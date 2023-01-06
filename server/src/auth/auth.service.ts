import { Injectable,UnauthorizedException,HttpException,HttpStatus} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import {JwtService} from '@nestjs/jwt';
import { User } from 'src/users/users.model';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import bcrypt from 'bcrypt'

@Injectable()
export class AuthService {

    constructor(
        private userService: UsersService,
        private jwtService: JwtService
    ){}

    async login(userDto: CreateUserDto){
        const user = await this.validateUser(userDto)
        return this.generateToken(user)
    }

    async registration(userDto: CreateUserDto){
        const candidate = await this.userService.getUserByEmail(userDto.email)

        if(!!candidate){
            throw new HttpException('Пользователь с таким email уже существует', HttpStatus.BAD_REQUEST)
        }

        const hashPassword = await bcrypt.hash(userDto.password)
        const user = await this.userService.createUser({...userDto, password: hashPassword})

        return this.generateToken(user)
    }

    private async generateToken(user: User){
        const payload = {email: user.email,id: user.id}

        return{
            token: this.jwtService.sign(payload)
        }
    }

    private async validateUser(userDto: CreateUserDto){
        const user = await this.userService.getUserByEmail(userDto.email)
        const paswwordEquals = await bcrypt.compare(userDto.password,user.password)

        if(user && paswwordEquals){
            return user
        }

        throw new UnauthorizedException({message: 'Некорректный email или пароль'})
    }
}
