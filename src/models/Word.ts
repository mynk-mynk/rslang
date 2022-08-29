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
    const url = `${config.api.url}words${pageGroup}`;
    const words = fetch(url)
      .then((data) => data.json());
    return words;
  }

  static async getWord(id: string) {
    const url = `${config.api.url}words/${id}`;
    const word = fetch(url)
      .then((data) => data.json())
      .then((data) => data as IWord)
      .catch((err) => console.log(err));
    return word;
  }
}

export default Word;
