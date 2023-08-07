import { Module } from '@nestjs/common';
import { SurveyStatusesController } from './survey-statuses.controller';
import { SurveyStatusesService } from './survey-statuses.service';

@Module({
  controllers: [SurveyStatusesController],
  providers: [SurveyStatusesService],
})
export class SurveyStatusesModule {}
