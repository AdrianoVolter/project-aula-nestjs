import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(private readonly userSevice: UserService) { }

    @Get()
    getUsers(): object[] {
        return this.userSevice.getUsers();
    }

    @Post()
    addUser(): object {
        return this.userSevice.addUser();
    }
    
}
