import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from './guards/role.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @UseGuards(AuthGuard('local'), RolesGuard)
  login(@Req() req): Promise<any> {
    return this.authService.generateJWT(req.user);
  }
}
