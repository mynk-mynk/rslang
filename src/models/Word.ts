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
    const params: IWord | null = await Word.getWord(id) || null;
    return new Word(params);
  }

  static async getWords(page = '', group = '') {
    const pageGroup = page && group ? `?page=${page}&group=${group}` : '';
    const words = fetch(`${config.api.url}words${pageGroup}`)
      .then((data) => data.json());
    return words;
  }

  static async getWord(id: string) {
    const word = fetch(`${config.api.url}words/${id}`)
      .then((data) => data.json())
      .then((data) => data as IWord)
      .catch((err) => console.log(err));
    return word;
  }
}

export default Word;
