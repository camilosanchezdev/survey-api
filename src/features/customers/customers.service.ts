import { Injectable, NotFoundException } from '@nestjs/common';
import { CustomersRepository } from './customers.repository';
import { Customer } from '@prisma/client';

@Injectable()
export class CustomersService {
  constructor(private readonly customersRepository: CustomersRepository) {
    //
  }
  async findOneByUserId(userId: number): Promise<Customer> {
    const result = await this.customersRepository.findFirst({ where: { userId } });
    if (!result) throw new NotFoundException('Not Record Found.');
    return result;
  }
}
