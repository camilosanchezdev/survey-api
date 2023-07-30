import { Module } from '@nestjs/common';
import { SurveyQuestionsService } from './survey-questions.service';
import { SurveyQuestionsController } from './survey-questions.controller';
import { SurveyQuestion } from './entities/survey-question.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SurveyQuestion])],
  controllers: [SurveyQuestionsController],
  providers: [SurveyQuestionsService],
  exports: [SurveyQuestionsService],
})
export class SurveyQuestionsModule {}
