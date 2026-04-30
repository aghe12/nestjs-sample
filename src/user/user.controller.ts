import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDto } from './dto/user.dto';
import { ApiCreatedResponse, ApiBadGatewayResponse } from '@nestjs/swagger';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiCreatedResponse({description: 'User created successfully', type: UserDto})
  @ApiBadGatewayResponse({description: 'Bad input data'})
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @ApiCreatedResponse({description: 'Users found successfully', type: [UserDto]})
  findAll(): UserDto[] {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiCreatedResponse({description: 'User found successfully', type: UserDto})
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  @ApiCreatedResponse({description: 'User updated successfully', type: UserDto})
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @ApiCreatedResponse({description: 'User deleted successfully', type: UserDto})
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
