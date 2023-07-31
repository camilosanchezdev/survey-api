import { Injectable } from '@nestjs/common';
import { SurveyResponse } from './entities/survey-response.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '../base/base.service';
import { Transactional } from 'typeorm-transactional';
import { SaveResponseInputDto } from './dtos/save-response-input.dto';
import { SurveyResponseQuestionsService } from '../survey-response-questions/survey-response-questions.service';
import { SurveyResponseAnswersService } from '../survey-response-answers/survey-response-answers.service';
import { BaseResponse } from '../base/base.response';
import { SurveysService } from '../surveys/surveys.service';

@Injectable()
export class SurveyResponsesService extends BaseService<SurveyResponse> {
  constructor(
    @InjectRepository(SurveyResponse)
    private readonly engineRepo: Repository<SurveyResponse>,
    private readonly surveyResponseQuestionsService: SurveyResponseQuestionsService,
    private readonly surveyResponseAnswersService: SurveyResponseAnswersService,
    private readonly surveysService: SurveysService,
  ) {
    super(engineRepo);
  }

  @Transactional()
  async saveResponse(body: SaveResponseInputDto, publicLink: string): Promise<BaseResponse> {
    try {
      const survey = await this.surveysService.getByPublicLink(publicLink);
      const surveyQuestions = await survey.surveyQuestions;

      if (body.questions.length !== surveyQuestions.length) return { success: false, error: "Answers doesn't match" };

      const surveyResponseId = await this.create({
        surveyId: survey.id,
      });
      for (let index = 0; index < body.questions.length; index++) {
        const question = body.questions[index];
        const newQuestionId = await this.surveyResponseQuestionsService.create({
          surveyQuestionId: question.questionId,
          surveyResponseId: surveyResponseId,
        });
        for (let answerIndex = 0; answerIndex < question.answers.length; answerIndex++) {
          const answer = question.answers[answerIndex];
          await this.surveyResponseAnswersService.create({
            surveyAnswerId: answer.answerId,
            surveyResponseQuestionId: newQuestionId,
          });
        }
      }

      return { success: true };
    } catch (error) {
      return { success: false, error };
    }
  }
}
