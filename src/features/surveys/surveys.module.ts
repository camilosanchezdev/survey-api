import { Module } from '@nestjs/common';
import { SurveysController } from './surveys.controller';
import { SurveysService } from './surveys.service';
import { SurveyQuestionsModule } from '../survey-questions/survey-questions.module';
import { SurveyAnswersModule } from '../survey-answers/survey-answers.module';
import { SurveysRepository } from './surveys.repository';
import { PrismaModule } from 'src/database/prisma.module';
import { CustomersModule } from '../customers/customers.module';

@Module({
  imports: [SurveyQuestionsModule, SurveyAnswersModule, PrismaModule, CustomersModule],
  controllers: [SurveysController],
  providers: [SurveysService, SurveysRepository],
  exports: [SurveysService, SurveysRepository],
})
export class SurveysModule {}
