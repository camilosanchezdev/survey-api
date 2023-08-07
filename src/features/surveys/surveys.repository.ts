import { Injectable } from '@nestjs/common';
import { Prisma, Survey } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { BaseRepository } from '../base/base.respository';
import { DelegateArgs, DelegateReturnTypes } from 'src/database/types';
import { DefaultArgs } from '@prisma/client/runtime/library';

type SurveyDelegate = Prisma.SurveyDelegate<DefaultArgs>;

@Injectable()
export class SurveysRepository extends BaseRepository<
  SurveyDelegate,
  DelegateArgs<SurveyDelegate>,
  DelegateReturnTypes<SurveyDelegate>
> {
  constructor(private readonly prismaService: PrismaService) {
    super(prismaService.survey);
  }
}
