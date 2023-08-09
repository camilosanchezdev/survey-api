import { IQuestionReport } from './question-report.interface';

export interface IReport {
  id: number;
  title: string;
  description: string;
  totalResponses: number;
  surveyQuestions: IQuestionReport[];
}
