interface IWord {
  id: string;
  group: number;
  page: number;
  word: string;
  image: string;
  audio: string;
  audioMeaning: string;
  audioExample: string;
  textMeaning: string;
  textExample: string;
  transcription: string;
  wordTranslate: string;
  textMeaningTranslate: string;
  textExampleTranslate: string;
}

// interface IStatistic {
//   learnedWords: string;
//   optional: {};
// }

// interface IUserWord {
//   difficulty: string;
//   optional: {};
// }

// interface ISetting {
//   wordsPerDay: string;
//   optional: {};
// }

class Word {
  // constructor() {

  // }
}

export { Word, IWord };
