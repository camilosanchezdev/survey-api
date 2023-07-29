import { BadGatewayException, Injectable, NotFoundException } from '@nestjs/common';
import { FindOneOptions, FindOptionsWhere, Repository } from 'typeorm';
import { IBaseService } from './base.interface';
import { BaseEntity } from './base.entity';

@Injectable()
export class BaseService<T extends BaseEntity> implements IBaseService<T> {
  constructor(private readonly genericRepository: Repository<T>) {}

  create(entity: any): Promise<number> {
    try {
      return new Promise<number>((resolve, reject) => {
        this.genericRepository
          .save(entity)
          .then((created) => resolve(created.id))
          .catch((err) => reject(err));
      });
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  getAll(): Promise<T[]> {
    try {
      return <Promise<T[]>>this.genericRepository.find();
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  async get(id: number): Promise<T> {
    try {
      const options: FindOneOptions<T> = {
        where: {
          id: id,
        } as FindOptionsWhere<T>,
      };
      const res = await this.genericRepository.findOne(options);

      if (!res) throw new NotFoundException();
      return res;
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  async update(id: number, entity: any): Promise<any> {
    try {
      await this.genericRepository.update(id, entity);
      return this.get(id);
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }
}
