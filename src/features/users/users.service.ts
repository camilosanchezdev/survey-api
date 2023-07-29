import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './entities/user.entity';
import { FindOneOptions, FindOptionsWhere, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserInputDto } from './dtos/user-input.dto';
import * as bcrypt from 'bcrypt';
import { BaseService } from '../base/base.service';
import { UserListResponse } from './responses/user-list.response';
import { UserResponse } from './responses/user.response';
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
  async findOneByUsername(username: string): Promise<User> {
    const result = await this.engineRepo.findOneBy({ username });
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
  async list(page: number, limit: number): Promise<UserListResponse> {
    try {
      const offset = page * limit - limit;
      const query = `c.deletedAt IS NULL AND c.roleId = ${RoleEnum.CUSTOMER}`;
      const length = await this.engineRepo.createQueryBuilder('c').where(query).getCount();
      const response = await this.engineRepo
        .createQueryBuilder('c')
        .where(query)
        .take(limit)
        .skip(offset)
        .orderBy('c.createdAt', 'DESC')
        .getMany();

      return {
        users: response.map((user) => ({
          id: user.id,
          username: user.username,
        })),
        length,
      };
    } catch (error) {
      console.log('error', error);
    }
  }
  async edit(id: number, entity: User): Promise<BaseResponse> {
    const { username, password } = entity;
    let payload: any = { username };
    if (password) {
      const newPassword = await bcrypt.hash(password, 10);
      const hash = Buffer.from(`${entity.username}:${entity.password}`).toString('base64');
      payload = {
        username,
        hash,
        password: newPassword,
      };
    }

    try {
      await this.engineRepo.update(id, payload);
      return { success: true };
    } catch (error) {
      return { success: false, error };
    }
  }
  async getOne(id: number): Promise<UserResponse> {
    try {
      const options: FindOneOptions<UserResponse> = {
        where: {
          id: id,
        } as FindOptionsWhere<UserResponse>,
      };
      const res = await this.engineRepo.findOne(options);

      if (!res) throw new NotFoundException();
      const response: UserResponse = {
        id: res.id,
        username: res.username,
      };
      return response;
    } catch (error) {
      throw new NotFoundException(error);
    }
  }
  async remove(id: number): Promise<BaseResponse> {
    try {
      await this.engineRepo.update(id, { deletedAt: new Date() });
      return { success: true };
    } catch (error) {
      return { success: false, error };
    }
  }
}
