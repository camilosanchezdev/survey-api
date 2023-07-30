import { Injectable } from '@nestjs/common';
import { SurveyAnswer } from './entities/survey-answer.entity';
import { BaseService } from '../base/base.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SurveyAnswersService extends BaseService<SurveyAnswer> {
  constructor(
    @InjectRepository(SurveyAnswer)
    private readonly engineRepo: Repository<SurveyAnswer>,
  ) {
    super(engineRepo);
  }
}
