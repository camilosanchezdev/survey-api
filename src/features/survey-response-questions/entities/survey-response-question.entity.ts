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
import { SurveyResponse } from 'src/features/survey-responses/entities/survey-response.entity';
import { SurveyResponseAnswer } from 'src/features/survey-response-answers/entities/survey-response-answer.entity';

@Entity({ name: 'survey_response_questions' })
export class SurveyResponseQuestion extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'survey_response_question_id' })
  id: number;

  @Column({ type: 'int', name: 'survey_question_id' })
  surveyQuestionId: number;

  @ManyToOne(() => SurveyQuestion, (surveyQuestion) => surveyQuestion.surveyResponseQuestions, { lazy: true })
  @JoinColumn({ name: 'survey_question_id' })
  surveyQuestion: Promise<SurveyQuestion>;

  @Column({ type: 'int', name: 'survey_response_id' })
  surveyResponseId: number;

  @ManyToOne(() => SurveyResponse, (surveyResponse) => surveyResponse.surveyResponseQuestions, { lazy: true })
  @JoinColumn({ name: 'survey_response_id' })
  surveyResponse: Promise<SurveyResponse>;

  @OneToMany(() => SurveyResponseAnswer, (surveyResponseAnswer) => surveyResponseAnswer.surveyResponseQuestion, {
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
