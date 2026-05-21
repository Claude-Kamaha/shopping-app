import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/request';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from 'generated/prisma/client';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    return this.prismaService.user.create({
      data: {
        ...createUserDto,
        password: await bcrypt.hash(data.password, 10),
      },
    });
  }
}
