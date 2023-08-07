import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { User } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private engineRepo: UsersRepository) {
    //
  }
  async findOneByEmail(email: string): Promise<User> {
    const result = await this.engineRepo.findFirst({ where: { email } });
    if (!result) throw new NotFoundException('Not Record Found.');
    return result;
  }
  async findOne(userId: number): Promise<User> {
    const result = await this.engineRepo.findFirst({ where: { id: userId } });
    if (!result) throw new NotFoundException('Not Record Found.');
    return result;
  }
  // async createUser(userInputDto: UserInputDto): Promise<BaseResponse> {
  //   try {
  //     const hash = Buffer.from(`${userInputDto.username}:${userInputDto.password}`).toString('base64');

  //     const newUser = { ...userInputDto, hash, roleId: RoleEnum.CUSTOMER };
  //     const payload = Object.assign(new User(), newUser);

  //     payload.password = await bcrypt.hash(userInputDto.password, 10);

  //     await this.engineRepo.save(payload);

  //     return { success: true };
  //   } catch (error) {
  //     return { success: false, error };
  //   }
  // }
}
