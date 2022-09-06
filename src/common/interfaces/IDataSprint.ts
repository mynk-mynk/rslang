import { IWord } from "./IWord";

export interface IDataSprint {
  textbookClick: boolean,
  curGroup: number;
  curPage: number;
  wordsArr: IWord[];
  curWord: IWord | null;
  curTranslation: IWord | null;
  curAnswers: IWord[];
  pointsPerAnswer: number;
  curStreak: number;
  multiplier: number;
  totalScore: number;
  answerMap: Map<IWord, string>;
  maxStreak: number;
};