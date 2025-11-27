import { Body, Controller, Post, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import type { Request } from 'express';
import type { JwtRefreshRequest } from './types/refresh-request.types';
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
  async refresh(@Req() req: JwtRefreshRequest) {
    return this.authService.refreshTokens(req.user.sub, req.refreshToken);
  }
}
