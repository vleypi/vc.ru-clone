import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize';
import { AuthService } from 'src/auth/auth.service';
import { UsersController } from './users.controller';
import { User } from './users.model';
import { UsersService } from './users.service';

@Module({
    controllers: [UsersController],
    providers: [UsersService],
    imports: [
        SequelizeModule.forFeature([User]),
    ],
    exports: [
        UsersService
    ]
})
export class UsersModule {}
