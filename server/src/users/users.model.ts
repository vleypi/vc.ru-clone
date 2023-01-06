import { Model,Table,Column,DataType,BelongsToMany,HasMany } from "sequelize-typescript";

interface UserCreationAttrs{
    email: string;
    paswword: string;
}

@Table({tableName: 'users'})

export class User extends Model<User,UserCreationAttrs>{

    @Column({type: DataType.INTEGER,unique: true,autoIncrement: true,primaryKey: true})
    id: number

    @Column({type: DataType.STRING,unique: true,allowNull: false})
    email: string;

    @Column({type: DataType.STRING,allowNull: false})
    password: string;
}