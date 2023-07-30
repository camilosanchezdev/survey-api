import { Injectable } from '@nestjs/common';
import { BaseService } from '../base/base.service';
import { Survey } from './entities/survey.entity';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { CreateSurveyInputDto } from './dtos/create-survey-input.dto';
import { BaseResponse } from '../base/base.response';
import { SurveyStatusEnum } from 'src/common/enums/survey-status.enum';
import { SurveyQuestionsService } from '../survey-questions/survey-questions.service';
import { Transactional } from 'typeorm-transactional';
import { SurveyAnswersService } from '../survey-answers/survey-answers.service';

@Injectable()
export class SurveysService extends BaseService<Survey> {
  constructor(
    @InjectRepository(Survey)
    private readonly engineRepo: Repository<Survey>,

    @InjectDataSource() private dataSource: DataSource,
    private readonly surveyQuestionsService: SurveyQuestionsService,
    private readonly surveyAnswersService: SurveyAnswersService,
  ) {
    super(engineRepo);
  }

  @Transactional()
  async createCustom(body: CreateSurveyInputDto, customerId: number, surveyStatusId: number): Promise<BaseResponse> {
    try {
      const surveyId = await this.create({
        title: body.title,
        description: body.description,
        customerId,
        surveyStatusId,
      });
      for (let index = 0; index < body.surveyQuestions.length; index++) {
        const question = body.surveyQuestions[index];
        const newQuestionId = await this.surveyQuestionsService.create({
          name: question.name,
          multiple: question.multiple,
          surveyId: surveyId,
        });
        for (let answerIndex = 0; answerIndex < question.surveyAnswers.length; answerIndex++) {
          const answer = question.surveyAnswers[answerIndex];
          await this.surveyAnswersService.create({
            name: answer.name,
            surveyQuestionId: newQuestionId,
          });
        }
      }

      return { success: true };
    } catch (error) {
      return { success: false, error };
    }
  }
  async createAsActive(body: CreateSurveyInputDto, customerId: number): Promise<BaseResponse> {
    return this.createCustom(body, customerId, SurveyStatusEnum.ACTIVE);
  }
  async createAsDraft(body: CreateSurveyInputDto, customerId: number): Promise<BaseResponse> {
    return this.createCustom(body, customerId, SurveyStatusEnum.DRAFT);
  }
}
