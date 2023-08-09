import { IAnswerReport } from './answer-report.interface';

export interface IQuestionReport {
  id: number;
  name: string;
  surveyAnswers: IAnswerReport[];
}
