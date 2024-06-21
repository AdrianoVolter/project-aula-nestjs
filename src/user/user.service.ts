import { Injectable, NotFoundException } from '@nestjs/common';

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

  patchUser(id: number, userData: User): User {
    const index = this.users.findIndex(u => u.id == id);
    if(index < 0) throw new NotFoundException();
    const user = this.users[index];
    if(userData.name)
        user.name = userData.name;
    if(userData.age)
        user.age = userData.age;
    if(userData.uf)
        user.uf = userData.uf;
    this.users[index] = user;
    return user;
  }
}
