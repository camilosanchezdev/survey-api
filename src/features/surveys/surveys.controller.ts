import { Body, Controller, Param, Post, Put, UseGuards } from '@nestjs/common';
import { RoleEnum } from 'src/common/enums/role.enum';
import { BaseController } from '../base/base.controller';
import { Survey } from './entities/survey.entity';
import { SurveysService } from './surveys.service';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/auth/guards/role.guard';
import { Roles } from 'src/common/decorators/role.decorator';
import { CreateSurveyInputDto } from './dtos/create-survey-input.dto';
import { IToken } from 'src/auth/interfaces/token.interface';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';

@UseGuards(AuthGuard('jwt'), RolesGuard)
@Controller('surveys')
export class SurveysController extends BaseController<Survey> {
  constructor(private readonly surveysService: SurveysService) {
    super(surveysService);
  }

  @Roles(RoleEnum.CUSTOMER)
  @Post()
  createCustom(@Body() req: CreateSurveyInputDto, @CurrentUser() user: IToken): Promise<any> {
    return this.surveysService.createAsActive(req, Number(user.sub));
  }

  @Roles(RoleEnum.CUSTOMER)
  @Post('draft')
  createAsDraft(@Body() req: CreateSurveyInputDto, @CurrentUser() user: IToken): Promise<any> {
    return this.surveysService.createAsDraft(req, Number(user.sub));
  }

  @Roles(RoleEnum.CUSTOMER)
  @Put(':id/active')
  markAsActive(@Param('id') id: number, @CurrentUser() user: IToken): Promise<any> {
    return this.surveysService.markAsActive(id, Number(user.sub));
  }

  @Roles(RoleEnum.CUSTOMER)
  @Put(':id/completed')
  markAsCompleted(@Param('id') id: number, @CurrentUser() user: IToken): Promise<any> {
    return this.surveysService.markAsCompleted(id, Number(user.sub));
  }

  @Roles(RoleEnum.CUSTOMER)
  @Put(':id/deleted')
  markAsDeleted(@Param('id') id: number, @CurrentUser() user: IToken): Promise<any> {
    return this.surveysService.markAsDeleted(id, Number(user.sub));
  }

  @Roles(RoleEnum.CUSTOMER)
  @Put(':id/permanently-deleted')
  markAsPermanentlyDeleted(@Param('id') id: number, @CurrentUser() user: IToken): Promise<any> {
    return this.surveysService.markAsPermanentlyDeleted(id, Number(user.sub));
  }
}
