import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UserService {
  private users = [];

  getAllUsers() {
    return this.users;
  }

  getOneById(id: string) {
    return this.users.find((user) => user.id === id);
  }
  createUser(userDto: CreateUserDto) {
    this.users.push({
      ...userDto,
      id: new Date().valueOf(),
    });
    return userDto;
  }

  removeUser(id: string) {
    return this.removeUser('id');
  }

  updateUser(id: number, updateUserDto: UpdateUserDto) {
    return this.users.find((user) => user.id == id);
  }
}
