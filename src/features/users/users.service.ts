import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserInputDto } from './dtos/user-input.dto';
import * as bcrypt from 'bcrypt';
import { BaseService } from '../base/base.service';
import { BaseResponse } from '../base/base.response';
import { RoleEnum } from 'src/common/enums/role.enum';

@Injectable()
export class UsersService extends BaseService<User> {
  constructor(
    @InjectRepository(User)
    private readonly engineRepo: Repository<User>,
  ) {
    super(engineRepo);
  }
  async findOneByEmail(email: string): Promise<User> {
    const result = await this.engineRepo.findOneBy({ email });
    if (!result) throw new NotFoundException('Not Record Found.');
    return result;
  }
  async findOne(userId: number): Promise<User> {
    const result = await this.engineRepo.findOneBy({ id: userId });
    if (!result) throw new NotFoundException('Not Record Found.');
    return result;
  }
  async createUser(userInputDto: UserInputDto): Promise<BaseResponse> {
    try {
      const hash = Buffer.from(`${userInputDto.username}:${userInputDto.password}`).toString('base64');

      const newUser = { ...userInputDto, hash, roleId: RoleEnum.CUSTOMER };
      const payload = Object.assign(new User(), newUser);

      payload.password = await bcrypt.hash(userInputDto.password, 10);

      await this.engineRepo.save(payload);

      return { success: true };
    } catch (error) {
      return { success: false, error };
    }
  }
}
