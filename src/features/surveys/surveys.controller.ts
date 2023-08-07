import { Body, Controller, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { RoleEnum } from 'src/common/enums/role.enum';
import { SurveysService } from './surveys.service';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/auth/guards/role.guard';
import { Roles } from 'src/common/decorators/role.decorator';
import { CreateSurveyInputDto } from './dtos/create-survey-input.dto';
import { IToken } from 'src/auth/interfaces/token.interface';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';
import { IBaseQuery } from '../base/base-query.interface';

@Controller('surveys')
export class SurveysController {
  constructor(private readonly surveysService: SurveysService) {}

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(RoleEnum.CUSTOMER)
  @Get()
  getList(@CurrentUser() user: IToken, @Query() query?: IBaseQuery): Promise<any> {
    return this.surveysService.getList(Number(user.sub), query);
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(RoleEnum.CUSTOMER)
  @Get(':id')
  getDetail(@Param('id') id: number, @CurrentUser() user: IToken): Promise<any> {
    return this.surveysService.getDetail(Number(id), Number(user.sub));
  }

  @Get('public/:id')
  getDetailByPublicLink(@Param('id') id: string, @CurrentUser() user: IToken): Promise<any> {
    return this.surveysService.getByPublicLink(id);
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(RoleEnum.CUSTOMER)
  @Post()
  create(@Body() req: CreateSurveyInputDto, @CurrentUser() user: IToken): Promise<any> {
    return this.surveysService.createAsActive(req, Number(user.sub));
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(RoleEnum.CUSTOMER)
  @Post('draft')
  createAsDraft(@Body() req: CreateSurveyInputDto, @CurrentUser() user: IToken): Promise<any> {
    return this.surveysService.createAsDraft(req, Number(user.sub));
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(RoleEnum.CUSTOMER)
  @Put(':id/active')
  markAsActive(@Param('id') id: number, @CurrentUser() user: IToken): Promise<any> {
    return this.surveysService.markAsActive(Number(id), Number(user.sub));
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(RoleEnum.CUSTOMER)
  @Put(':id/completed')
  markAsCompleted(@Param('id') id: number, @CurrentUser() user: IToken): Promise<any> {
    return this.surveysService.markAsCompleted(Number(id), Number(user.sub));
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(RoleEnum.CUSTOMER)
  @Put(':id/deleted')
  markAsDeleted(@Param('id') id: number, @CurrentUser() user: IToken): Promise<any> {
    return this.surveysService.markAsDeleted(Number(id), Number(user.sub));
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(RoleEnum.CUSTOMER)
  @Put(':id/permanently-deleted')
  markAsPermanentlyDeleted(@Param('id') id: number, @CurrentUser() user: IToken): Promise<any> {
    return this.surveysService.markAsPermanentlyDeleted(Number(id), Number(user.sub));
  }

  // @Roles(RoleEnum.CUSTOMER)
  // @Get(':id/report')
  // getReport(@Param('id') id: number, @CurrentUser() user: IToken): Promise<any> {
  //   return this.surveysService.getReport(id, Number(user.sub));
  // }
}
