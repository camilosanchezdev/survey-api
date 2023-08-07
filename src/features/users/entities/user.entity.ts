// import { Role } from '../../roles/entities/role.entity';
// import { BaseEntity } from 'src/features/base/base.entity';
// import { Customer } from 'src/features/customers/entities/customer.entity';
import { User } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
export class UserEntity implements User {
  @ApiProperty()
  id: number;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  roleId: number | null;

  @ApiProperty({ required: false, nullable: true })
  customerId: number | null;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  deleted: boolean;
}
