import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';
import { RoleEnum } from 'src/common/enums/role.enum';
import { Roles } from 'src/common/decorators/role.decorator';
import { RolesGuard } from 'src/auth/guards/role.guard';

@UseGuards(AuthGuard('jwt'), RolesGuard)
@Controller('users')
// export class UsersController extends BaseController<User> {
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
}
