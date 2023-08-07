import { Module } from '@nestjs/common';
import { SurveyResponseQuestionsController } from './survey-response-questions.controller';
import { SurveyResponseQuestionsService } from './survey-response-questions.service';

@Module({
  controllers: [SurveyResponseQuestionsController],
  providers: [SurveyResponseQuestionsService],
  exports: [SurveyResponseQuestionsService],
})
export class SurveyResponseQuestionsModule {}
