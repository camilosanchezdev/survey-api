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
import { SurveyAnswer } from 'src/features/survey-answers/entities/survey-answer.entity';

@Entity({ name: 'survey_questions' })
export class SurveyQuestion extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'survey_question_id' })
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false, default: false })
  multiple: boolean;

  @Column({ type: 'int', name: 'survey_id' })
  surveyId: number;

  @ManyToOne(() => Survey, (survey) => survey.surveyQuestions, { lazy: true })
  @JoinColumn({ name: 'survey_id' })
  survey: Promise<Survey>;

  @OneToMany(() => SurveyAnswer, (surveyAnswer) => surveyAnswer.surveyQuestion, { lazy: true })
  surveyAnswers: Promise<SurveyAnswer[]>;

  @OneToMany(() => SurveyAnswer, (surveyResponseQuestion) => surveyResponseQuestion.surveyQuestion, { lazy: true })
  surveyResponseQuestions: Promise<SurveyAnswer[]>;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt?: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt?: Date;

  @DeleteDateColumn({ type: 'timestamp', default: null })
  deletedAt?: Date;
}
