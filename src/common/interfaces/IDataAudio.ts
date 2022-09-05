import { IWord } from './IWord';

export type IDataAudio = {
  textbookClick: boolean;
  currentDifficulty: number;
  currentPage: number;
  data2: string;
  wordsArr: IWord[];
  currentWord: IWord | null;
  currentAnswers: IWord[];
  answerMap: Map<IWord, string>;
  maxStreak: number;
};
