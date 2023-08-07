import { Injectable } from '@nestjs/common';
import { SurveyAnswersRepository } from './survey-answers.repository';

@Injectable()
export class SurveyAnswersService {
  constructor(private readonly surveyAnswersRepository: SurveyAnswersRepository) {
    //
  }
  async create(body) {
    return this.surveyAnswersRepository.create(body);
  }
}
