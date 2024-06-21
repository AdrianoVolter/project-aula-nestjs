import { Injectable } from '@nestjs/common';

export type User = {
    id?: number;
    name: string;
    age: number;
    uf: string;
};


@Injectable()
export class UserService {

    nexId: number = 1;
    users: User[] = [];

    getUsers(): User[] {
        return this.users;
    }

    addUser(newUser: User): User {
        if (!newUser.id) {
            newUser.id = this.nexId++;
        }
        this.users.push(newUser);
        return newUser;
    }

}
