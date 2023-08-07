import { Module } from '@nestjs/common';
import { SurveyResponseAnswersController } from './survey-response-answers.controller';
import { SurveyResponseAnswersService } from './survey-response-answers.service';

@Module({
  controllers: [SurveyResponseAnswersController],
  providers: [SurveyResponseAnswersService],
})
export class SurveyQuestionsModule {}
