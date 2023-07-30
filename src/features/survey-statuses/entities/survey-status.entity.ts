import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { BaseEntity } from 'src/features/base/base.entity';
import { Survey } from 'src/features/surveys/entities/survey.entity';

@Entity({ name: 'survey_statuses' })
export class SurveyStatus extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'survey_status_id' })
  id: number;

  @Column({
    nullable: false,
    default: '',
  })
  name: string;

  @OneToMany(() => Survey, (survey) => survey.surveyStatus, { lazy: true })
  surveys: Promise<Survey[]>;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt?: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt?: Date;

  @DeleteDateColumn({ type: 'timestamp', default: null })
  deletedAt?: Date;
}
