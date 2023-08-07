import { Module } from '@nestjs/common';
import { SurveyAnswersController } from './survey-answers.controller';
import { SurveyAnswersService } from './survey-answers.service';
import { SurveyAnswersRepository } from './survey-answers.repository';
import { PrismaModule } from 'src/database/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [SurveyAnswersController],
  providers: [SurveyAnswersService, SurveyAnswersRepository],
  exports: [SurveyAnswersService, SurveyAnswersRepository],
})
export class SurveyAnswersModule {}
