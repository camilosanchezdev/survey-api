import { Module } from '@nestjs/common';
import { SurveyResponseAnswersController } from './survey-response-answers.controller';
import { SurveyResponseAnswersService } from './survey-response-answers.service';
import { SurveyResponseAnswersRepository } from './survey-response-answers.repository';
import { PrismaModule } from 'src/database/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [SurveyResponseAnswersController],
  providers: [SurveyResponseAnswersService, SurveyResponseAnswersRepository],
  exports: [SurveyResponseAnswersService, SurveyResponseAnswersRepository],
})
export class SurveyResponseAnswersModule {}
