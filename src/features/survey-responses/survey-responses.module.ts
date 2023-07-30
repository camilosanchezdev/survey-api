import { Module } from '@nestjs/common';
import { SurveyResponse } from './entities/survey-response.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SurveyResponsesController } from './survey-responses.controller';
import { SurveyResponsesService } from './survey-responses.service';

@Module({
  imports: [TypeOrmModule.forFeature([SurveyResponse])],
  controllers: [SurveyResponsesController],
  providers: [SurveyResponsesService],
})
export class SurveyResponsesModule {}
