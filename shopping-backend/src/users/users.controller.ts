import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/request';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService:UsersService) {}

    @Post()
    createUser(@Body() createUserDto: CreateUserDto) {
        return this.usersService.createUser(createUserDto);
    }
}
