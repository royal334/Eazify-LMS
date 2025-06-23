import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from './prisma/prisma.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService,
    private readonly prismaService: PrismaService,
  ) {}

  @Get('health')
  getHealth(): string {
    return this.appService.getHealth();
  }

  @Get('config')
  getConfig(): any {
    return {
      port: this.configService.get('PORT'),
      dbUrl: this.configService.get('DATABASE_URL'),
      supabaseUrl: this.configService.get('SUPABASE_URL'),
    };
  }

  @Get('prisma-test')
  async getPrismaTest(): Promise<{ status: string }> {
    await this.prismaService.$queryRaw`SELECT 1`;
    return { status: 'Prisma Connected' };
  }
}
