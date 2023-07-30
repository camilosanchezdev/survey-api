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
import { SurveyQuestion } from 'src/features/survey-questions/entities/survey-question.entity';
import { SurveyResponseAnswer } from 'src/features/survey-response-answers/entities/survey-response-answer.entity';

@Entity({ name: 'survey_answers' })
export class SurveyAnswer extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'survey_answer_id' })
  id: number;

  @Column({ nullable: false, default: '' })
  name: string;

  @Column({ type: 'int', name: 'survey_question_id' })
  surveyQuestionId: number;

  @ManyToOne(() => SurveyQuestion, (surveyQuestion) => surveyQuestion.surveyAnswers, { lazy: true })
  @JoinColumn({ name: 'survey_question_id' })
  surveyQuestion: Promise<SurveyQuestion>;

  @OneToMany(() => SurveyResponseAnswer, (surveyResponseAnswer) => surveyResponseAnswer.surveyAnswer, {
    lazy: true,
  })
  surveyResponseAnswers: Promise<SurveyResponseAnswer[]>;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt?: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt?: Date;

  @DeleteDateColumn({ type: 'timestamp', default: null })
  deletedAt?: Date;
}
