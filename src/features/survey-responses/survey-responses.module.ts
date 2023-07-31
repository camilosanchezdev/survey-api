import { Module } from '@nestjs/common';
import { SurveyResponse } from './entities/survey-response.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SurveyResponsesController } from './survey-responses.controller';
import { SurveyResponsesService } from './survey-responses.service';
import { SurveyResponseAnswersModule } from '../survey-response-answers/survey-response-answers.module';
import { SurveyResponseQuestionsModule } from '../survey-response-questions/survey-response-questions.module';
import { SurveysModule } from '../surveys/surveys.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([SurveyResponse]),
    SurveyResponseAnswersModule,
    SurveyResponseQuestionsModule,
    SurveysModule,
  ],
  controllers: [SurveyResponsesController],
  providers: [SurveyResponsesService],
})
export class SurveyResponsesModule {}
