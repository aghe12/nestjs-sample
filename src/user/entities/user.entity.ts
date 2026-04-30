import { UserDto } from '../dto/user.dto';

export interface IUser {
    id: number;
    name: string;
    email: string;
    age: number;
    isActive?: boolean;
}

export class User implements IUser {
    id: number;
    name: string;
    email: string;
    age: number;
    isActive?: boolean;

    constructor(user: IUser) {         
            this.id = user.id;
            this.name = user.name;
            this.email = user.email;
            this.age = user.age;
            this.isActive = user.isActive;
    }
}

export const UserDB: Array<UserDto> = [
    {id: 1, name: 'User 1', email: "user1@example.com", age: 25, isActive: true},
    {id: 2, name: 'User 2', email: "user2@example.com", age: 30, isActive: true}
]
