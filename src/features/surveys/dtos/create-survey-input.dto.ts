export interface CreateSurveyInputDto {
  title: string;
  description: string;
  surveyQuestions: {
    name: string;
    multiple: boolean;
    surveyAnswers: { name: string }[];
  }[];
}
