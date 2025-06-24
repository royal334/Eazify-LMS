import { Body, Controller, Headers, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto, SignInDto, TeacherCreateDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() dto: AuthDto) {
    return await this.authService.register(dto);
  }

  @Post('register-teacher')
  async createTeacher(
    @Body() dto: TeacherCreateDto,
    @Headers('teacher-secret') secret: string,
  ) {
    return this.authService.createTeacher(dto, secret);
  }

  @Post('login')
  async login(@Body() dto: SignInDto) {
    return await this.authService.login(dto);
  }
}
