import { Get, Post, Put, Body, Param } from '@nestjs/common';
import { BaseEntity } from './base.entity';
import { IBaseService } from './base.interface';

export class BaseController<T extends BaseEntity> {
  constructor(private readonly IBaseService: IBaseService<T>) {}

  @Get()
  async findAll(): Promise<T[]> {
    return this.IBaseService.getAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<T> {
    return this.IBaseService.get(id);
  }

  @Post()
  async create(@Body() entity: T): Promise<number> {
    return this.IBaseService.create(entity);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() entity: T): Promise<T> {
    return this.IBaseService.update(id, entity);
  }
}
