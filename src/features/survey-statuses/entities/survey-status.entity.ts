import { ApiProperty } from '@nestjs/swagger';
import { SurveyStatus } from '@prisma/client';

export class SurveyStatusEntity implements SurveyStatus {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  deleted: boolean;
}
