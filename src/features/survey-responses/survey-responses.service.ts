import { Injectable, NotFoundException } from '@nestjs/common';
import { SaveResponseInputDto } from './dtos/save-response-input.dto';
import { SurveyResponseAnswersService } from '../survey-response-answers/survey-response-answers.service';
import { BaseResponse } from '../base/base.response';
import { SurveysService } from '../surveys/surveys.service';
import { SurveyQuestionsService } from '../survey-questions/survey-questions.service';
import { SurveyResponsesRepository } from './survey-responses.repository';
import { SurveyAnswerEntity } from '../survey-answers/entities/survey-answer.entity';
import { IReport } from './interfaces/report.interface';
import { IQuestionReport } from './interfaces/question-report.interface';
import { IAnswerReport } from './interfaces/answer-report.interface';

@Injectable()
export class SurveyResponsesService {
  constructor(
    private readonly surveysService: SurveysService,
    private readonly surveyQuestionsService: SurveyQuestionsService,
    private readonly surveyResponsesRepository: SurveyResponsesRepository,
    private readonly surveyResponseAnswersService: SurveyResponseAnswersService,
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
  async getReport(surveyId: number, userId: number): Promise<IReport> {
    try {
      const survey: any = await this.surveysService.getDetail(surveyId, userId);
      const totalResponses = await this.surveyResponsesRepository.count({ where: { surveyId } });

      const surveyQuestions: IQuestionReport[] = [];
      for (let index = 0; index < survey.surveyQuestions.length; index++) {
        const question: any = survey.surveyQuestions[index];
        const surveyAnswers: IAnswerReport[] = [];
        for (let j = 0; j < question.surveyAnswers.length; j++) {
          const answer: SurveyAnswerEntity = question.surveyAnswers[j];
          const total = await this.surveyResponseAnswersService.getTotalResponseAnswers(answer.id);

          surveyAnswers.push({
            id: answer.id,
            name: answer.name,
            total,
          });
        }
        surveyQuestions.push({ id: question.id, name: question.name, surveyAnswers });
      }
      const res: IReport = {
        id: survey.id,
        title: survey.title,
        description: survey.description,
        totalResponses,
        surveyQuestions,
      };

      if (!res) throw new NotFoundException();
      return res;
    } catch (error) {
      throw new NotFoundException(error);
    }
  }
}
