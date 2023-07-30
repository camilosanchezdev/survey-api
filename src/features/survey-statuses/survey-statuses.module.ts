import { Module } from '@nestjs/common';
import { SurveyStatus } from './entities/survey-status.entity';
import { SurveyStatusesController } from './survey-statuses.controller';
import { SurveyStatusesService } from './survey-statuses.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SurveyStatus])],
  controllers: [SurveyStatusesController],
  providers: [SurveyStatusesService],
})
export class SurveyStatusesModule {}
