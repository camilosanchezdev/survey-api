import { ApiProperty } from '@nestjs/swagger';
import { SurveyResponseQuestion } from '@prisma/client';

export class SurveyResponseQuestionEntity implements SurveyResponseQuestion {
  @ApiProperty()
  id: number;

  @ApiProperty()
  surveyQuestionId: number;

  @ApiProperty()
  surveyResponseId: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  deleted: boolean;
}
