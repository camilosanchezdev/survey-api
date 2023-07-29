import { Body, Controller, Post, UseGuards, Get, Query, Put, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { BaseController } from '../base/base.controller';
import { AuthGuard } from '@nestjs/passport';
import { UserListResponse } from './responses/user-list.response';
import { UserResponse } from './responses/user.response';
import { BaseResponse } from '../base/base.response';
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

  //   @Roles(RoleEnum.ADMIN)
  //   @Get(':id')
  //   getOne(@Param('id') id: number): Promise<UserResponse> {
  //     return this.usersService.getOne(id);
  //   }

  //   @Roles(RoleEnum.ADMIN)
  //   @Get()
  //   getWebsites(@Query('page') page: number, @Query('limit') limit: number): Promise<UserListResponse> {
  //     return this.usersService.list(page, limit);
  //   }

  //   @Roles(RoleEnum.ADMIN)
  //   @Put(':id')
  //   edit(@Param('id') id: number, @Body() entity: User): Promise<BaseResponse> {
  //     return this.usersService.edit(id, entity);
  //   }

  //   @Roles(RoleEnum.ADMIN)
  //   @Put(':id/remove')
  //   remove(@Param('id') id: number): Promise<BaseResponse> {
  //     return this.usersService.remove(id);
  //   }
}
