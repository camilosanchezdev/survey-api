import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Survey } from './entities/survey.entity';
import { SurveysController } from './surveys.controller';
import { SurveysService } from './surveys.service';
import { SurveyQuestionsModule } from '../survey-questions/survey-questions.module';
import { SurveyAnswersModule } from '../survey-answers/survey-answers.module';

@Module({
  imports: [TypeOrmModule.forFeature([Survey]), SurveyQuestionsModule, SurveyAnswersModule],
  controllers: [SurveysController],
  providers: [SurveysService],
})
export class SurveysModule {}
