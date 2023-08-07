import { Injectable } from '@nestjs/common';
import { SaveResponseInputDto } from './dtos/save-response-input.dto';
import { SurveyResponseQuestionsService } from '../survey-response-questions/survey-response-questions.service';
import { SurveyResponseAnswersService } from '../survey-response-answers/survey-response-answers.service';
import { BaseResponse } from '../base/base.response';
import { SurveysService } from '../surveys/surveys.service';
import { SurveyQuestionsService } from '../survey-questions/survey-questions.service';
import { SurveyResponsesRepository } from './survey-responses.repository';

@Injectable()
export class SurveyResponsesService {
  constructor(
    private readonly surveysService: SurveysService,
    private readonly surveyQuestionsService: SurveyQuestionsService,
    private readonly surveyResponsesRepository: SurveyResponsesRepository,
  ) {}

  async saveResponse(body: SaveResponseInputDto, publicLink: string): Promise<BaseResponse> {
    try {
      const survey = await this.surveysService.getByPublicLink(publicLink);
      const surveyQuestions = await this.surveyQuestionsService.findMany({ where: { surveyId: survey.id } });

      if (body.questions.length !== surveyQuestions.length) return { success: false, error: "Answers doesn't match" };

      await this.surveyResponsesRepository.create({
        data: {
          surveyId: survey.id,
          surveyResponseQuestions: {
            create: body.questions.map((question) => ({
              surveyQuestionId: Number(question.questionId),
              surveyResponseAnswer: {
                create: question.answers.map((answer) => ({
                  surveyAnswerId: Number(answer.answerId),
                })),
              },
            })),
          },
        },
      });

      return { success: true };
    } catch (error) {
      return { success: false, error };
    }
  }
}
