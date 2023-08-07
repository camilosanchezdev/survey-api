import { Module } from '@nestjs/common';
import { SurveyQuestionsService } from './survey-questions.service';
import { SurveyQuestionsController } from './survey-questions.controller';
import { SurveyQuestionsRepository } from './survey-questions.repository';
import { PrismaModule } from 'src/database/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [SurveyQuestionsController],
  providers: [SurveyQuestionsService, SurveyQuestionsRepository],
  exports: [SurveyQuestionsService, SurveyQuestionsRepository],
})
export class SurveyQuestionsModule {}
