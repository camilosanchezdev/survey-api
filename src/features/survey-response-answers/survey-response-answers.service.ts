import { Injectable } from '@nestjs/common';
import { SurveyResponseAnswersRepository } from './survey-response-answers.repository';

@Injectable()
export class SurveyResponseAnswersService {
  constructor(private readonly surveyResponseAnswersRepository: SurveyResponseAnswersRepository) {
    //
  }
  async getTotalResponseAnswers(surveyAnswerId: number): Promise<number> {
    return this.surveyResponseAnswersRepository.count({ where: { surveyAnswerId } });
  }
}
