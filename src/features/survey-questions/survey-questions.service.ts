import { Injectable } from '@nestjs/common';
import { BaseService } from '../base/base.service';
import { SurveyQuestion } from './entities/survey-question.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SurveyQuestionsService extends BaseService<SurveyQuestion> {
  constructor(
    @InjectRepository(SurveyQuestion)
    private readonly engineRepo: Repository<SurveyQuestion>,
  ) {
    super(engineRepo);
  }
}
