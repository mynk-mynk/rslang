import { IWord } from './IWord';

export type IDataAudio = {
  currentDifficulty: number;
  data2: string;
  wordsArr: IWord[];
  currentWord: IWord | null;
  currentAnswers: IWord[];
  answerMap: Map<IWord, string>;
};
