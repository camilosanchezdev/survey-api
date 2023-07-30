import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { BaseEntity } from 'src/features/base/base.entity';
import { SurveyAnswer } from 'src/features/survey-answers/entities/survey-answer.entity';
import { SurveyResponseQuestion } from 'src/features/survey-response-questions/entities/survey-response-question.entity';

@Entity({ name: 'survey_response_answers' })
export class SurveyResponseAnswer extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'survey_response_answer_id' })
  id: number;

  @Column({ type: 'int', name: 'survey_answer_id' })
  surveyAnswerId: number;

  @ManyToOne(() => SurveyAnswer, (surveyAnswer) => surveyAnswer.surveyResponseAnswers, { lazy: true })
  @JoinColumn({ name: 'survey_answer_id' })
  surveyAnswer: Promise<SurveyAnswer>;

  @Column({ type: 'int', name: 'survey_response_question_id' })
  surveyResponseQuestionId: number;

  @ManyToOne(() => SurveyResponseQuestion, (surveyResponseQuestion) => surveyResponseQuestion.surveyResponseAnswers, {
    lazy: true,
  })
  @JoinColumn({ name: 'survey_response_question_id' })
  surveyResponseQuestion: Promise<SurveyResponseQuestion>;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt?: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt?: Date;

  @DeleteDateColumn({ type: 'timestamp', default: null })
  deletedAt?: Date;
}
