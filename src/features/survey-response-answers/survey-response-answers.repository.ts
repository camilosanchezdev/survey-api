import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { BaseRepository } from '../base/base.respository';
import { DelegateArgs, DelegateReturnTypes } from 'src/database/types';
import { DefaultArgs } from '@prisma/client/runtime/library';

type SurveyResponseAnswersDelegate = Prisma.SurveyResponseAnswerDelegate<DefaultArgs>;

@Injectable()
export class SurveyResponseAnswersRepository extends BaseRepository<
  SurveyResponseAnswersDelegate,
  DelegateArgs<SurveyResponseAnswersDelegate>,
  DelegateReturnTypes<SurveyResponseAnswersDelegate>
> {
  constructor(private readonly prismaService: PrismaService) {
    super(prismaService.surveyResponseAnswer);
  }
}
