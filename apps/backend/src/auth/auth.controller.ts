// auth.controller.ts
import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login-user.dto'; // Importa o DTO de login
import { ZodValidationPipe } from '../pipes/zod-validation.pipe'; // Assumindo que você tem um ZodValidationPipe
import { loginUserSchema } from './dto/login-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(HttpStatus.OK) // O login deve retornar status 200 OK
  async login(
    // Aplica o pipe de validação Zod no DTO
    @Body(new ZodValidationPipe(loginUserSchema)) loginUserDto: LoginUserDto,
  ) {
    const user = await this.authService.validateUser(
      loginUserDto.email,
      loginUserDto.password,
    );

    if (!user) {
      throw new UnauthorizedException(
        'Credenciais inválidas (email ou senha).',
      );
    }

    return this.authService.login(user);
  }
}
