import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { BaseEntity } from 'src/features/base/base.entity';
import { Survey } from 'src/features/surveys/entities/survey.entity';

@Entity({ name: 'customers' })
export class Customer extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'customer_id' })
  id: number;

  @Column({
    name: 'first_name',
    nullable: false,
    default: '',
  })
  firstName: string;

  @Column({
    name: 'last_name',
    nullable: false,
    default: '',
  })
  lastName: string;

  @Column({ type: 'int', name: 'user_id' })
  userId: number;

  @OneToOne(() => User, (user) => user.customer, { lazy: true })
  @JoinColumn({ name: 'user_id' })
  user?: Promise<User>;

  @OneToMany(() => Survey, (survey) => survey.customer, { lazy: true })
  surveys: Promise<Survey[]>;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt?: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt?: Date;

  @DeleteDateColumn({ type: 'timestamp', default: null })
  deletedAt?: Date;
}
