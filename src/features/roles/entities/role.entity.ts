import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, UpdateDateColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { BaseEntity } from 'src/features/base/base.entity';

@Entity({ name: 'roles' })
export class Role extends BaseEntity {
  @Column({
    nullable: false,
    default: '',
  })
  name: string;

  @OneToMany(() => User, (user) => user.role, { lazy: true })
  users: Promise<User[]>;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt?: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt?: Date;

  @DeleteDateColumn({ type: 'timestamp', default: null })
  deletedAt?: Date;
}
