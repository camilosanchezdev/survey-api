import { ApiProperty } from '@nestjs/swagger';
import { Survey } from '@prisma/client';

export class SurveyEntity implements Survey {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  publicLink: string;

  @ApiProperty()
  customerId: number;

  @ApiProperty()
  surveyStatusId: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  deleted: boolean;
}
