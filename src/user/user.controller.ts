// user.controller.ts
import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../user/user.entity';

export class UserData {
  id: number;
  username: string;
  email: string;
  walletAddress: string;
  password: string;
}

// defining the URL.
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // These are equivalent of route files in expressJS where we define what controllers take power in which routes and etc.
  @Get()
  getAll(): Promise<User[]> {
    return this.userService.viewUser();
  }

  @Get(':id')
  getOne(@Param('id') id: number): Promise<User> {
    return this.userService.viewOneUser(id);
  }

  @Post()
  create(@Body() User: User): Promise<User> {
    console.log(User);
    return this.userService.createUser(User);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() User: User): Promise<User> {
    return this.userService.updateUser(id, User);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.userService.deleteUser(id);
  }
}
