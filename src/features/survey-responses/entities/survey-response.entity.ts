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
import { Survey } from 'src/features/surveys/entities/survey.entity';
import { SurveyResponseQuestion } from 'src/features/survey-response-questions/entities/survey-response-question.entity';

@Entity({ name: 'survey_responses' })
export class SurveyResponse extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'survey_response_id' })
  id: number;

  @Column({ type: 'int', name: 'survey_id' })
  surveyId: number;

  @ManyToOne(() => Survey, (survey) => survey.surveyResponses, { lazy: true })
  @JoinColumn({ name: 'survey_id' })
  survey: Promise<Survey>;

  @OneToMany(() => SurveyResponseQuestion, (surveyResponseQuestion) => surveyResponseQuestion.surveyResponse, {
    lazy: true,
  })
  surveyResponseQuestions: Promise<SurveyResponseQuestion[]>;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt?: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt?: Date;

  @DeleteDateColumn({ type: 'timestamp', default: null })
  deletedAt?: Date;
}
