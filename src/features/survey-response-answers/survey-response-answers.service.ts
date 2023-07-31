import { Injectable } from '@nestjs/common';
import { SurveyResponseAnswer } from './entities/survey-response-answer.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from '../base/base.service';
import { Repository } from 'typeorm';

@Injectable()
export class SurveyResponseAnswersService extends BaseService<SurveyResponseAnswer> {
  constructor(
    @InjectRepository(SurveyResponseAnswer)
    private readonly engineRepo: Repository<SurveyResponseAnswer>,
  ) {
    super(engineRepo);
  }
}
