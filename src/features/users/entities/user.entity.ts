import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Role } from '../../roles/entities/role.entity';
import { BaseEntity } from 'src/features/base/base.entity';

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

  //   @OneToMany(() => Post, (post) => post.user, { lazy: true })
  //   posts: Promise<Post[]>;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt?: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt?: Date;

  @DeleteDateColumn({ type: 'timestamp', default: null })
  deletedAt?: Date;
}
