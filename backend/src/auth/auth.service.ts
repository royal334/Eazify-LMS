import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto, SignInDto } from './dto';
import * as argon2 from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private config: ConfigService,
    private jwt: JwtService,
  ) {}

  async register(dto: AuthDto) {
    const hashStr = String(dto.hash);
    const hashedPassword = await argon2.hash(hashStr);

    try {
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          hash: hashedPassword,
        },
      });

      return {
        token: await this.signToken(user.id, user.email),
        user,
      };
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials taken');
        }
      }

      throw error;
    }
  }

  async login(dto: SignInDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (!user) {
      throw new ForbiddenException('User not found');
    }

    const hashStr = String(dto.hash);
    const isHashValid = await argon2.verify(user.hash, hashStr);

    if (!isHashValid) {
      throw new ForbiddenException('Invalid Credentials Provided');
    }

    return {
      access_token: await this.signToken(user.id, user.email),
      user,
    };
  }

  async signToken(userId: string, email: string): Promise<string> {
    const payload = {
      sub: userId,
      email,
    };
    const secret = this.config.get('ACCESS_TOKEN');

    const token = await this.jwt.signAsync(payload, {
      secret,
      expiresIn: '1h',
    });

    return token;
  }
}
