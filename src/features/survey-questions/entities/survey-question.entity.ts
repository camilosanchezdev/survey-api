import { ApiProperty } from '@nestjs/swagger';
import { SurveyQuestion } from '@prisma/client';

export class SurveyQuestionEntity implements SurveyQuestion {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  multiple: boolean;

  @ApiProperty()
  surveyId: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  deleted: boolean;
}
