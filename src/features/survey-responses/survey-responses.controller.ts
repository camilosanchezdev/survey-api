import { Body, Controller, Param, Post } from '@nestjs/common';
import { BaseController } from '../base/base.controller';
import { SurveyResponsesService } from './survey-responses.service';
import { SaveResponseInputDto } from './dtos/save-response-input.dto';

@Controller('survey-responses')
export class SurveyResponsesController {
  constructor(private readonly surveysResponsesService: SurveyResponsesService) {}

  @Post(':id')
  saveResponse(@Body() req: SaveResponseInputDto, @Param('id') publicLink: string): Promise<any> {
    return this.surveysResponsesService.saveResponse(req, publicLink);
  }
}
