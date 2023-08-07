import { ApiProperty } from '@nestjs/swagger';
import { SurveyResponse } from '@prisma/client';

export class SurveyResponseEntity implements SurveyResponse {
  @ApiProperty()
  id: number;

  @ApiProperty()
  surveyId: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  deleted: boolean;
}
