import { ApiProperty } from '@nestjs/swagger';
import { SurveyResponseAnswer } from '@prisma/client';

export class SurveyResponseAnswerEntity implements SurveyResponseAnswer {
  @ApiProperty()
  id: number;

  @ApiProperty()
  surveyAnswerId: number;

  @ApiProperty()
  surveyResponseQuestionId: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  deleted: boolean;
}
