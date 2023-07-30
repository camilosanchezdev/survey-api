import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SurveyResponseAnswer } from './entities/survey-response-answer.entity';
import { SurveyResponseAnswersController } from './survey-response-answers.controller';
import { SurveyResponseAnswersService } from './survey-response-answers.service';

@Module({
  imports: [TypeOrmModule.forFeature([SurveyResponseAnswer])],
  controllers: [SurveyResponseAnswersController],
  providers: [SurveyResponseAnswersService],
})
export class SurveyQuestionsModule {}
