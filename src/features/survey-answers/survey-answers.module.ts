import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SurveyAnswer } from './entities/survey-answer.entity';
import { SurveyAnswersController } from './survey-answers.controller';
import { SurveyAnswersService } from './survey-answers.service';

@Module({
  imports: [TypeOrmModule.forFeature([SurveyAnswer])],
  controllers: [SurveyAnswersController],
  providers: [SurveyAnswersService],
  exports: [SurveyAnswersService],
})
export class SurveyAnswersModule {}
