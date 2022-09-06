import { IUserWord } from '../common/interfaces/IUserWord';
import { IWord } from '../common/interfaces/IWord';
import config from '../config';

class Word {
  constructor(params: IWord | null = null) {
    if (params) {
      Object.assign(this, params);
    } else {
      throw new Error('Can not create new word!');
    }
  }

  static async init(id: string) {
    const params: IWord | null = (await Word.getWord(id)) || null;
    return new Word(params);
  }

  static async getWords(page = 0, group = 0) {
    const url = `${config.api.url}words?page=${page}&group=${group}`;
    const words = fetch(url).then((data) => data.json());
    return words;
  }

  static async getWord(id: string) {
    const url = `${config.api.url}words/${id}`;
    const word = fetch(url)
      .then((data) => data.json())
      .then((data: IWord) => data)
      .catch((err) => console.log(err));
    return word;
  }

  static async convertIUserWordToIWord(userWord: IUserWord) {
    const id = userWord.wordId || '';
    let res: IWord;
    if (id) {
      res = await Word.getWord(id) as IWord;
      return res;
    }
    return undefined;
  }
}

export default Word;
