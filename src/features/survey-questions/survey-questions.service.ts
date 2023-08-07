import { Injectable } from '@nestjs/common';
import { SurveyQuestionsRepository } from './survey-questions.repository';
import { Prisma } from '@prisma/client';

@Injectable()
export class SurveyQuestionsService {
  constructor(private readonly surveyQuestionsRepository: SurveyQuestionsRepository) {
    //
  }
  async create(body) {
    return this.surveyQuestionsRepository.create(body);
  }
  async findMany(body: Prisma.SurveyQuestionFindManyArgs) {
    return this.surveyQuestionsRepository.findMany(body);
  }
}
