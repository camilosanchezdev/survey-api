import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { BaseRepository } from '../base/base.respository';
import { DelegateArgs, DelegateReturnTypes } from 'src/database/types';
import { DefaultArgs } from '@prisma/client/runtime/library';

type CustomerDelegate = Prisma.CustomerDelegate<DefaultArgs>;

@Injectable()
export class CustomersRepository extends BaseRepository<
  CustomerDelegate,
  DelegateArgs<CustomerDelegate>,
  DelegateReturnTypes<CustomerDelegate>
> {
  constructor(private readonly prismaService: PrismaService) {
    super(prismaService.customer);
  }
}
