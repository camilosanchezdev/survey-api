export interface SaveResponseInputDto {
  questions: {
    questionId: number;
    answers: { answerId: number }[];
  }[];
}
