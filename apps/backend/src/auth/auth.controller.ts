import { Body, Controller, Post, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';

import { CreateUserDto, createUserSchema } from '../users/dto/create-user.dto';
import { LoginUserDto, loginUserSchema } from './dto/login-user.dto';

import { ZodValidationPipe } from '../common/pipes/zod-validation.pipes';
import { JwtRefreshGuard } from './guards/jwt-refresh.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // =====================================
  //  REGISTER
  // =====================================
  @Post('register')
  async register(
    @Body(new ZodValidationPipe(createUserSchema))
    dto: CreateUserDto,
  ) {
    return this.authService.register(dto);
  }

  // =====================================
  //  LOGIN
  // =====================================
  @Post('login')
  async login(
    @Body(new ZodValidationPipe(loginUserSchema))
    dto: LoginUserDto,
  ) {
    return this.authService.login(dto);
  }

  // =====================================
  //  REFRESH TOKEN
  // =====================================
  @UseGuards(JwtRefreshGuard)
  @Post('refresh')
  async refresh(@Req() req) {
    const user = req.user;
    const refreshToken = req.refreshToken;
    return this.authService.refreshTokens(user.sub, refreshToken);
  }

  // =====================================
  //  LOGOUT
  // =====================================
  @UseGuards(JwtRefreshGuard)
  @Post('logout')
  async logout(@Req() req) {
    const user = req.user;
    return this.authService.logout(user.sub);
  }
}
