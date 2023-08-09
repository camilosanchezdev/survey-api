import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateSurveyInputDto } from './dtos/create-survey-input.dto';
import { BaseResponse } from '../base/base.response';
import { SurveyStatusEnum } from 'src/common/enums/survey-status.enum';
import { SurveyQuestionsService } from '../survey-questions/survey-questions.service';
import { SurveyAnswersService } from '../survey-answers/survey-answers.service';
import { v4 as uuidv4 } from 'uuid';
import { IBaseQuery } from '../base/base-query.interface';
import { BaseListResponse } from '../base/base-list.response';
import { SurveysRepository } from './surveys.repository';
import { CustomersService } from '../customers/customers.service';
import { Survey } from '@prisma/client';

@Injectable()
export class SurveysService {
  constructor(
    private readonly surveyRepository: SurveysRepository,
    private readonly surveyQuestionsService: SurveyQuestionsService,
    private readonly surveyAnswersService: SurveyAnswersService,
    private readonly customersService: CustomersService,
  ) {}
  async getList(userId: number, query: IBaseQuery): Promise<BaseListResponse<Survey>> {
    const take = Number(query.take) || 10;
    const skip = Number(query.skip) || 0;
    const statusId = query.filters;

    try {
      const customer = await this.customersService.findOneByUserId(userId);
      const conditions = { customerId: customer.id, ...(statusId && { surveyStatusId: Number(statusId) }) };
      const total = await this.surveyRepository.count({ where: conditions });
      const res = await this.surveyRepository.findMany({
        where: conditions,
        select: { id: true, title: true, description: true, surveyStatusId: true, createdAt: true },
        take,
        skip,
        orderBy: { createdAt: 'desc' },
      });

      if (!res) throw new NotFoundException();
      return { totalRecords: total, data: res };
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  async getDetail(surveyId: number, userId: number): Promise<Survey> {
    try {
      const customer = await this.customersService.findOneByUserId(userId);
      const res = await this.surveyRepository.findFirst({
        where: { id: surveyId, customerId: customer.id },
        select: {
          id: true,
          title: true,
          description: true,
          publicLink: true,
          surveyStatusId: true,
          surveyQuestions: {
            select: {
              id: true,
              name: true,
              multiple: true,
              surveyAnswers: {
                select: {
                  id: true,
                  name: true,
                },
              },
            },
          },
        },
      });

      if (!res) throw new NotFoundException();
      return res;
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  async createCustom(body: CreateSurveyInputDto, userId: number, surveyStatusId: number): Promise<BaseResponse> {
    try {
      const customer = await this.customersService.findOneByUserId(userId);
      await this.surveyRepository.create({
        data: {
          title: body.title,
          description: body.description,
          customerId: customer.id,
          surveyStatusId,
          ...(surveyStatusId === SurveyStatusEnum.ACTIVE && { publicLink: this.generatePublicLink() }),
          surveyQuestions: {
            create: body.surveyQuestions.map((question) => ({
              name: question.name,
              multiple: question.multiple,
              surveyAnswers: { create: question.surveyAnswers.map((answer) => ({ name: answer.name })) },
            })),
          },
        },
      });

      return { success: true };
    } catch (error) {
      return { success: false, error };
    }
  }

  async createAsActive(body: CreateSurveyInputDto, userId: number): Promise<BaseResponse> {
    return this.createCustom(body, userId, SurveyStatusEnum.ACTIVE);
  }

  async createAsDraft(body: CreateSurveyInputDto, userId: number): Promise<BaseResponse> {
    return this.createCustom(body, userId, SurveyStatusEnum.DRAFT);
  }

  async updateStatus(
    surveyId: number,
    userId: number,
    surveyStatusId: number,
    permanentlyDeleted = false,
  ): Promise<BaseResponse> {
    try {
      const customer = await this.customersService.findOneByUserId(userId);
      const survey = await this.surveyRepository.findFirst({ where: { id: surveyId } });

      if (survey.customerId !== customer.id) throw new UnauthorizedException();

      survey.surveyStatusId = surveyStatusId;

      if (surveyStatusId === SurveyStatusEnum.ACTIVE) survey.publicLink = this.generatePublicLink();

      if (permanentlyDeleted) survey.deleted = true;

      await this.surveyRepository.update({ where: { id: surveyId }, data: survey });

      return { success: true };
    } catch (error) {
      return { success: false, error };
    }
  }

  async markAsActive(surveyId: number, userId: number): Promise<BaseResponse> {
    return this.updateStatus(surveyId, userId, SurveyStatusEnum.ACTIVE);
  }

  async markAsCompleted(surveyId: number, customerId: number): Promise<BaseResponse> {
    return this.updateStatus(surveyId, customerId, SurveyStatusEnum.COMPLETED);
  }

  async markAsDeleted(surveyId: number, customerId: number): Promise<BaseResponse> {
    return this.updateStatus(surveyId, customerId, SurveyStatusEnum.DELETED);
  }

  async markAsPermanentlyDeleted(surveyId: number, customerId: number): Promise<BaseResponse> {
    return this.updateStatus(surveyId, customerId, SurveyStatusEnum.DELETED, true);
  }

  generatePublicLink(): string {
    return uuidv4();
  }
  async getByPublicLink(publicLink: string): Promise<Survey> {
    try {
      const res = await this.surveyRepository.findFirst({
        where: { publicLink },
        select: {
          id: true,
          title: true,
          description: true,
          publicLink: true,
          surveyStatusId: true,
          surveyQuestions: {
            select: {
              id: true,
              name: true,
              multiple: true,
              surveyAnswers: {
                select: {
                  id: true,
                  name: true,
                },
              },
            },
          },
        },
      });

      if (!res) throw new NotFoundException();
      return res;
    } catch (error) {
      throw new NotFoundException(error);
    }
  }
}
