import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SurveyResponseQuestion } from './entities/survey-response-question.entity';
import { SurveyResponseQuestionsController } from './survey-response-questions.controller';
import { SurveyResponseQuestionsService } from './survey-response-questions.service';

@Module({
  imports: [TypeOrmModule.forFeature([SurveyResponseQuestion])],
  controllers: [SurveyResponseQuestionsController],
  providers: [SurveyResponseQuestionsService],
  exports: [SurveyResponseQuestionsService],
})
export class SurveyResponseQuestionsModule {}
