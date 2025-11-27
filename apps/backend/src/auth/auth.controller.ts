import {
  Body,
  Controller,
  Post,
  UseGuards,
  Req,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import type { Request } from 'express';
import type { JwtRefreshRequest } from './types/refresh-request.types';
import type { CreateUserDto } from '../users/dto/create-user.dto';

import { createUserSchema } from '../users/dto/create-user.dto';
import { loginUserSchema } from './dto/login-user.dto';
import type { LoginUserDto } from './dto/login-user.dto';

import { ZodValidationPipe } from '../common/pipes/zod-validation.pipes';
import { JwtRefreshGuard } from './guards/jwt.guard';
import { Public } from '../common/decorators/public.decorators';
import { JwtAuthGuard } from './guards/jwt.auth.guard';

type JwtAuthRequest = Request & { user: { sub: string } };

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  async register(
    @Body(new ZodValidationPipe(createUserSchema))
    dto: CreateUserDto,
  ) {
    return this.authService.register(dto);
  }

  @Public()
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(
    @Body(new ZodValidationPipe(loginUserSchema))
    dto: LoginUserDto,
  ) {
    return this.authService.login(dto);
  }

  @Public()
  @UseGuards(JwtRefreshGuard)
  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  async refresh(@Req() req: JwtRefreshRequest) {
    return this.authService.refreshTokens(req.user.sub, req.refreshToken);
  }

  @UseGuards(JwtAuthGuard)
  @Post('logout')
  @HttpCode(HttpStatus.OK)
  async logout(@Req() req: JwtAuthRequest) {
    return this.authService.logout(req.user.sub);
  }
}
