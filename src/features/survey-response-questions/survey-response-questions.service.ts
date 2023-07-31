import { Injectable } from '@nestjs/common';
import { SurveyResponseQuestion } from './entities/survey-response-question.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from '../base/base.service';
import { Repository } from 'typeorm';

@Injectable()
export class SurveyResponseQuestionsService extends BaseService<SurveyResponseQuestion> {
  constructor(
    @InjectRepository(SurveyResponseQuestion)
    private readonly engineRepo: Repository<SurveyResponseQuestion>,
  ) {
    super(engineRepo);
  }
}
