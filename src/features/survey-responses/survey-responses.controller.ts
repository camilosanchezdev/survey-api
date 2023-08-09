import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { SurveyResponsesService } from './survey-responses.service';
import { SaveResponseInputDto } from './dtos/save-response-input.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/auth/guards/role.guard';
import { Roles } from 'src/common/decorators/role.decorator';
import { RoleEnum } from 'src/common/enums/role.enum';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';
import { IToken } from 'src/auth/interfaces/token.interface';

@Controller('survey-responses')
export class SurveyResponsesController {
  constructor(private readonly surveysResponsesService: SurveyResponsesService) {}

  @Post(':id')
  saveResponse(@Body() req: SaveResponseInputDto, @Param('id') publicLink: string): Promise<any> {
    return this.surveysResponsesService.saveResponse(req, publicLink);
  }
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(RoleEnum.CUSTOMER)
  @Get(':id/report')
  getReport(@Param('id') id: number, @CurrentUser() user: IToken): Promise<any> {
    return this.surveysResponsesService.getReport(Number(id), Number(user.sub));
  }
}
