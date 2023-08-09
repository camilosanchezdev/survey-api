import { Module } from '@nestjs/common';
import { SurveyResponsesController } from './survey-responses.controller';
import { SurveyResponsesService } from './survey-responses.service';
import { SurveyResponseAnswersModule } from '../survey-response-answers/survey-response-answers.module';
import { SurveyResponseQuestionsModule } from '../survey-response-questions/survey-response-questions.module';
import { SurveysModule } from '../surveys/surveys.module';
import { SurveyResponsesRepository } from './survey-responses.repository';
import { SurveyQuestionsModule } from '../survey-questions/survey-questions.module';
import { PrismaModule } from 'src/database/prisma.module';

@Module({
  imports: [
    PrismaModule,
    SurveyResponseAnswersModule,
    SurveyResponseQuestionsModule,
    SurveyQuestionsModule,
    SurveysModule,
  ],
  controllers: [SurveyResponsesController],
  providers: [SurveyResponsesService, SurveyResponsesRepository],
  exports: [SurveyResponsesRepository, SurveyResponsesService],
})
export class SurveyResponsesModule {}
