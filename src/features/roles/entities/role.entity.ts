import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client';

export class RoleEntity implements Role {
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
