import { Body, Controller, Get, Post } from '@nestjs/common';
import { User, UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(private readonly userSevice: UserService) { }

    @Get()
    getUsers(): User[]{
        return this.userSevice.getUsers();
    }

    @Post()
    addUser(@Body() newUser: User): User {
        return this.userSevice.addUser(newUser);
    }
    
}
