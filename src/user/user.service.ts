import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDto } from './dto/user.dto';
import { User, UserDB } from './entities/user.entity';

@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto): UserDto {
    const maxId = Math.max(...UserDB.map(u => u.id));
    const newUser: UserDto = {
      id: maxId + 1,
      name: createUserDto.name,
      email: createUserDto.email,
      age: createUserDto.age,
      isActive: true
    };

    UserDB.push(newUser);
    return newUser;
  }

  findAll(): User[] {
    return UserDB;
  }

  findOne(id: number): User | undefined {
    return UserDB.find(u => u.id === id);
  }

  update(id: number, updateUserDto: UpdateUserDto): User | undefined {
    const user = UserDB.find(u => u.id === id);
    if (!user) {
      return undefined;
    }
    Object.assign(user, updateUserDto);
    return user;
  }

  remove(id: number): User | undefined {
    const user = UserDB.find(u => u.id === id);
    if (!user) {
      return undefined;
    }
    return UserDB.splice(UserDB.indexOf(user), 1)[0];
  }
}
