import { IWord } from "./IWord";

export interface IDataSprint {
  currentDifficulty: number;
  data2: string;
  wordsArr: IWord[];
  currentWord: IWord | null;
  currentTranslation: IWord | null;
  currentAnswers: IWord[];
  pointsPerAnswer: number;
  streak: number;
  multiplier: number;
  totalScore: number;
  answerMap: Map<IWord, string>;
};