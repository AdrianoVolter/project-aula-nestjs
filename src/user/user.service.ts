import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    getUsers(): object[] {
        return [{
            id: 1,
            name: 'John Doe',
            email: 'john@gmail.com',
        }];
    }

    addUser(): object {
        return [{
            id: 2,
            name: 'Maria',
            email: 'maria@gmail.com',
        }]  
    }
}
