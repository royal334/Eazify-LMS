import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  UseGuards,
  ForbiddenException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user-dto';
import { JwtGuard } from 'src/auth/guards';
import { GetUser } from 'src/auth/decorator/get-user-decorator';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get('me')
  getProfile(@GetUser('id') userId: string) {
    return this.userService.findOne(userId);
  }

  @Get(':id')
  findOne(
    @Param('id', new ParseUUIDPipe()) id: string,
    @GetUser('id') userId: string,
  ) {
    if (id !== userId) {
      throw new ForbiddenException('Access denied.');
    }

    return this.userService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @GetUser('id') userId: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    if (id !== userId) {
      throw new ForbiddenException('Access denied - You can only update your own account.');
    }

    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(
    @Param('id', new ParseUUIDPipe()) id: string,
    @GetUser('id') userId: string,
  ) {
    if (id !== userId) {
      throw new ForbiddenException('Access denied - You can only delete your own account.');
    }

    return this.userService.remove(id);
  }
}
