import { Injectable } from '@nestjs/common';
import { IToken } from './interfaces/token.interface';
import { User } from 'src/features/users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/features/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService, private usersService: UsersService) {}
  async generateJWT(user: User): Promise<{ access_token: string; roleId: number }> {
    const payload: IToken = {
      roleId: user.roleId,
      sub: user.id,
    };
    return {
      access_token: this.jwtService.sign(payload),
      roleId: user.roleId,
    };
  }
  async validateUser(email: string, password: string) {
    const user: User = await this.usersService.findOneByEmail(email);
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        const role = await user.role;
        const { password, ...res } = user;
        return { ...res, role };
      }
    }
    return null;
  }
}
