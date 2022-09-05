export interface IUserWord {
  difficulty: string;
  optional: {
    newWord: boolean,
    dateNew: number,
    dateLearned: number,
    newInGame: string,
    streakAudio: number,
    streakSprint: number,
    totalCountAudiocall: number,
    totalCorrectAudiocall: number,
    totalCountSprint: number,
    totalCorrectSprint: number,
  },
  wordId?: string,
  id?: string,
}
