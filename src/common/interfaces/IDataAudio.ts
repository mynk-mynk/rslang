import { IWord } from './IWord';

export type IDataAudio = {
  textbookClick: boolean;
  curGroup: number;
  curPage: number;
  data2: string;
  wordsArr: IWord[];
  curWord: IWord | null;
  curAnswers: IWord[];
  answerMap: Map<IWord, string>;
  maxStreak: number;
};
