import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { BaseRepository } from '../base/base.respository';
import { DelegateArgs, DelegateReturnTypes } from 'src/database/types';
import { DefaultArgs } from '@prisma/client/runtime/library';

type SurveyAnswerDelegate = Prisma.SurveyAnswerDelegate<DefaultArgs>;

@Injectable()
export class SurveyAnswersRepository extends BaseRepository<
  SurveyAnswerDelegate,
  DelegateArgs<SurveyAnswerDelegate>,
  DelegateReturnTypes<SurveyAnswerDelegate>
> {
  constructor(private readonly prismaService: PrismaService) {
    super(prismaService.surveyAnswer);
  }
}
