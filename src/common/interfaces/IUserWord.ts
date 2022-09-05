export interface IUserWord {
  difficulty: string,
  optional: {
    streak: number,
    newWord: boolean,
    totalCountAudiocall: number,
    totalCorrectAudiocall: number,
    totalCountSprint: number,
    totalCorrectSprint: number,
  },
  wordId?: string,
}
