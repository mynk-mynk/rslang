export interface IUserWord {
  difficulty: string;
  optional: {
    streak: number
    streakAudio: number
    streakSprint: number
    newWord: boolean,
    // dateNew: date,
    // dateLearned: date,
    totalCount: number,
    totalCorrect: number,
  }
}
