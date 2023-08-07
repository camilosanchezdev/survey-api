import { Injectable } from '@nestjs/common';
import { Prisma, Survey } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { BaseRepository } from '../base/base.respository';
import { DelegateArgs, DelegateReturnTypes } from 'src/database/types';
import { DefaultArgs } from '@prisma/client/runtime/library';

type SurveyResponseDelegate = Prisma.SurveyResponseDelegate<DefaultArgs>;

@Injectable()
export class SurveyResponsesRepository extends BaseRepository<
  SurveyResponseDelegate,
  DelegateArgs<SurveyResponseDelegate>,
  DelegateReturnTypes<SurveyResponseDelegate>
> {
  constructor(private readonly prismaService: PrismaService) {
    super(prismaService.surveyResponse);
  }
}
