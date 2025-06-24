import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user-dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    const users = await this.prisma.user.findMany();

    if (!users.length) {
      throw new NotFoundException('No users found');
    }

    return users.map(({ hash: _, ...userWithoutHash }) => userWithoutHash);
  }

  async findOne(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException(`User with id ${userId} not found`);
    }

    const { hash: _, ...userWithoutHash } = user;
    return userWithoutHash;
  }

  async update(userId: string, updateUserDto: UpdateUserDto) {
    const confirmedUser = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!confirmedUser) {
      throw new NotFoundException(
        `Cannot update - user with id ${userId} not found`,
      );
    }

    const user = await this.prisma.user.update({
      where: { id: userId },
      data: updateUserDto,
    });

    const { hash: _, ...userWithoutHash } = user;

    return userWithoutHash;
  }

  async remove(userId: string) {
    const confirmedUser = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!confirmedUser) {
      throw new NotFoundException(
        `Cannot delete — user with id ${userId} not found`,
      );
    }

    await this.prisma.user.delete({
      where: { id: userId },
    });

    return 'User deleted successfully';
  }
}
