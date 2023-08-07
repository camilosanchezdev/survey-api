import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { BaseRepository } from '../base/base.respository';
import { DelegateArgs, DelegateReturnTypes } from 'src/database/types';
import { DefaultArgs } from '@prisma/client/runtime/library';

type SurveyQuestionDelegate = Prisma.SurveyQuestionDelegate<DefaultArgs>;

@Injectable()
export class SurveyQuestionsRepository extends BaseRepository<
  SurveyQuestionDelegate,
  DelegateArgs<SurveyQuestionDelegate>,
  DelegateReturnTypes<SurveyQuestionDelegate>
> {
  constructor(private readonly prismaService: PrismaService) {
    super(prismaService.surveyQuestion);
  }
}
