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
import { BaseEntity } from 'src/features/base/base.entity';
import { Customer } from 'src/features/customers/entities/customer.entity';
import { SurveyStatus } from 'src/features/survey-statuses/entities/survey-status.entity';
import { SurveyQuestion } from 'src/features/survey-questions/entities/survey-question.entity';
import { SurveyResponse } from 'src/features/survey-responses/entities/survey-response.entity';

@Entity({ name: 'surveys' })
export class Survey extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'survey_id' })
  id: number;

  @Column({ nullable: false, default: '' })
  title: string;

  @Column({ nullable: false, default: '' })
  description: string;

  @Column({ name: 'public_link', nullable: true, default: '' })
  publicLink: string;

  @Column({ type: 'int', name: 'customer_id' })
  customerId: number;

  @ManyToOne(() => Customer, (customer) => customer.surveys, { lazy: true })
  @JoinColumn({ name: 'customer_id' })
  customer: Promise<Customer>;

  @Column({ type: 'int', name: 'survey_status_id' })
  surveyStatusId: number;

  @ManyToOne(() => SurveyStatus, (surveyStatus) => surveyStatus.surveys, { lazy: true })
  @JoinColumn({ name: 'survey_status_id' })
  surveyStatus: Promise<SurveyStatus>;

  @OneToMany(() => SurveyQuestion, (surveyQuestion) => surveyQuestion.survey, { lazy: true })
  surveyQuestions: Promise<SurveyQuestion[]>;

  @OneToMany(() => SurveyResponse, (surveyResponse) => surveyResponse.survey, { lazy: true })
  surveyResponses: Promise<SurveyResponse[]>;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt?: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt?: Date;

  @DeleteDateColumn({ type: 'timestamp', default: null })
  deletedAt?: Date;
}
