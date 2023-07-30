import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { BaseController } from '../base/base.controller';
import { AuthGuard } from '@nestjs/passport';
import { RoleEnum } from 'src/common/enums/role.enum';
import { Roles } from 'src/common/decorators/role.decorator';
import { RolesGuard } from 'src/auth/guards/role.guard';

@UseGuards(AuthGuard('jwt'), RolesGuard)
@Controller('users')
export class UsersController extends BaseController<User> {
  constructor(private readonly usersService: UsersService) {
    super(usersService);
  }

  @Roles(RoleEnum.ADMIN)
  @Post()
  create(@Body() req): Promise<any> {
    return this.usersService.createUser(req);
  }
}
