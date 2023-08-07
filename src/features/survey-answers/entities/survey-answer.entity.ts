import { ApiProperty } from '@nestjs/swagger';
import { SurveyAnswer } from '@prisma/client';

export class SurveyAnswerEntity implements SurveyAnswer {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  surveyQuestionId: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  deleted: boolean;
}
