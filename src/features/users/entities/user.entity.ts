import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Role } from '../../roles/entities/role.entity';
import { BaseEntity } from 'src/features/base/base.entity';
import { Customer } from 'src/features/customers/entities/customer.entity';

@Entity({ name: 'users' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'user_id' })
  id: number;

  @Column({
    nullable: false,
    unique: true,
  })
  username: string;

  @Column({
    nullable: false,
  })
  password: string;

  @Column({ type: 'int', name: 'role_id' })
  roleId: number;

  @ManyToOne(() => Role, (role) => role.users, { lazy: true })
  @JoinColumn({ name: 'role_id' })
  role: Promise<Role>;

  @OneToOne(() => Customer, (customer) => customer.user, { lazy: true })
  customer?: Promise<Customer>;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt?: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt?: Date;

  @DeleteDateColumn({ type: 'timestamp', default: null })
  deletedAt?: Date;
}
