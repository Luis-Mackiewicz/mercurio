import { Body, Controller, Post, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';

import type { CreateUserDto } from '../users/dto/create-user.dto';

import { createUserSchema } from '../users/dto/create-user.dto';
import { loginUserSchema } from './dto/login-user.dto';
import type { LoginUserDto } from './dto/login-user.dto';

import { ZodValidationPipe } from '../common/pipes/zod-validation.pipes';
import { JwtRefreshGuard } from './guards/jwt.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(
    @Body(new ZodValidationPipe(createUserSchema))
    dto: CreateUserDto,
  ) {
    return this.authService.register(dto);
  }

  @Post('login')
  async login(
    @Body(new ZodValidationPipe(loginUserSchema))
    dto: LoginUserDto,
  ) {
    return this.authService.login(dto);
  }

  @UseGuards(JwtRefreshGuard)
  @Post('refresh')
  async refresh(@Req() req) {
    const user = req.user;
    const refreshToken = req.refreshToken;
    return this.authService.refreshTokens(user.sub, refreshToken);
  }

  @UseGuards(JwtRefreshGuard)
  @Post('logout')
  async logout(@Req() req) {
    const user = req.user;
    return this.authService.logout(user.sub);
  }
}
