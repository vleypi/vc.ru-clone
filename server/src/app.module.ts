import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import {ConfigModule} from '@nestjs/config'
import { SequelizeModule } from "@nestjs/sequelize";
import { ServeStaticModule } from "@nestjs/serve-static";
import { UsersModule } from './users/users.module';
import * as path from 'path';
import { User } from './users/users.model';

@Module({
    controllers: [],
    providers: [],
    imports: [
      ConfigModule.forRoot({
          envFilePath: `.${process.env.NODE_ENV}.env`,
      }),
      ServeStaticModule.forRoot({
        rootPath: path.resolve(__dirname,'static')
      }),
      SequelizeModule.forRoot({
          dialect: 'postgres',
          host: process.env.POSTGRES_HOST,
          port: Number(process.env.POSTGRES_PORT),
          username: process.env.POSTGRES_USER,
          password: process.env.POSTGRES_PASSWORD,
          database: process.env.POSTGRES_DB,
          models: [User],
          autoLoadModels: true
      }),
      AuthModule,
      UsersModule
    ],
})

export class AppModule {}
