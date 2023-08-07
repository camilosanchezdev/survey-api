import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { BaseRepository } from '../base/base.respository';
import { DelegateArgs, DelegateReturnTypes } from 'src/database/types';
import { DefaultArgs } from '@prisma/client/runtime/library';

type UserDelegate = Prisma.UserDelegate<DefaultArgs>;

@Injectable()
export class UsersRepository extends BaseRepository<
  UserDelegate,
  DelegateArgs<UserDelegate>,
  DelegateReturnTypes<UserDelegate>
> {
  constructor(private readonly prismaService: PrismaService) {
    super(prismaService.user);
  }
}
