import App from '../models/App';
import Word from '../models/Word';
import { IWord } from '../common/interfaces/IWord';
import { IDataTextbook } from '../common/interfaces/IDataTextbook';
import { findHtmlElement } from '../common/utils/utils';
import {
  activateCurrentDifficulty, activateProp, renderDifficultyBar, setHardWordsVisible,
} from '../views/components/difficulty-bar/difficulty-bar';
import { disableBtns, renderPagination, setPageNum } from '../views/components/pagination/pagination';
import {
  chooseWordProp, renderWordCard, playAudio, changeCardBoxshadow, setWordPropsVisible,
} from '../views/components/word-card/word-card';
import { renderTextbookPage } from '../views/pages/textbook/textbook';
import User from '../models/User';
import { IUserWord } from '../common/interfaces/IUserWord';

class TextbookController {
  private app: App;

  private data: IDataTextbook;

  constructor(app: App) {
    this.app = app;
    this.app.subscribeOnAuthChange(() => {
      setHardWordsVisible(this.app.isAuth);
      setWordPropsVisible(this.app.isAuth);
    });
    this.data = this.getFromLS() || { difficulty: 0, pageNum: 0 };
  }

  actionIndex() {
    const main = findHtmlElement(document, 'main');
    main.innerHTML = renderTextbookPage();

    const header = findHtmlElement(document, 'h1');
    header.after(renderDifficultyBar());
    this.addListenersToDiffBar();
    setHardWordsVisible(this.app.isAuth);

    this.generateWordCards(this.data.pageNum, this.data.difficulty, this.app.isAuth);
    activateCurrentDifficulty(this.data.difficulty + 1);

    const mainContainer = findHtmlElement(document, '.main-container-textbook');
    mainContainer.append(renderPagination());
    this.addListenersToPagination();

    this.addListenersToGameBtns();
  }

  async generateWordCards(page: number, difficulty: number, auth: boolean) {
    const wordsContainer = findHtmlElement(document, '.words-container');
    wordsContainer.innerHTML = '';
    let words = difficulty !== 6
      ? await Word.getWords(page, difficulty) as IWord[]
      : await User.getUserWords() as IUserWord[];

    if (difficulty === 6) {
      const wordsPromises = (words as IUserWord[])
        .filter((word) => word.difficulty === 'hard')
        .map((word) => Word.convertIUserWordToIWord(word));
      const results = await Promise.allSettled(wordsPromises);
      const successfullWords = results
        .filter((res) => res.status === 'fulfilled')
        .map((res) => (res as PromiseFulfilledResult<IWord | undefined>).value)
        .filter((val) => val) as IWord[];

      words = successfullWords;
    }

    words.forEach((word) => {
      const card = renderWordCard(word as IWord);
      wordsContainer.append(card);
    });
    changeCardBoxshadow(difficulty + 1);
    setWordPropsVisible(auth);
    this.addListenersToCards();
    setPageNum(page + 1);
    disableBtns(page);
    this.setToLS({ pageNum: page, difficulty });

    const pagination = findHtmlElement(document, '.pagination-container');
    pagination.style.display = this.data.difficulty === 6 ? 'none' : 'flex';

    const hardBtn = document.querySelectorAll<HTMLElement>('.word-hard');
    hardBtn.forEach((btn) => {
      btn.style.display = this.data.difficulty === 6 ? 'none' : 'block';
    });

    this.markUserWords();
  }

  addListenersToDiffBar() {
    const difficultyContainer = findHtmlElement(document, '.difficulty-container');

    difficultyContainer.addEventListener('click', (e) => {
      const btn = e.target as HTMLElement;
      activateProp(btn);
      if (!btn.classList.contains('difficulty-btn')) return;
      const diff = btn.dataset.group;
      this.data.difficulty = Number(diff) - 1 || 0;
      this.data.pageNum = 0;
      this.generateWordCards(this.data.pageNum, this.data.difficulty, this.app.isAuth)
        .then(() => changeCardBoxshadow(this.data.difficulty + 1));
    });
  }

  addListenersToCards() {
    const wordProps = document.querySelectorAll('.word-properties');
    wordProps.forEach((container) => {
      container.addEventListener('click', (e) => {
        chooseWordProp(e.target as HTMLImageElement);
        this.onPropsBtnsClick(e.target as HTMLImageElement);
      });
    });

    document.querySelectorAll('.audio-icon').forEach((icon) => {
      icon.addEventListener('click', (e) => playAudio(e.target as HTMLElement));
    });
  }

  addListenersToGameBtns() {
    const audiocallGame = findHtmlElement(document, '.start-audiocall');
    const sprintGame = findHtmlElement(document, '.start-sprint');
    audiocallGame.addEventListener('click', () => this.callGame('audiocall'));
    sprintGame.addEventListener('click', () => this.callGame('sprint'));
  }

  addListenersToPagination() {
    const pagination = findHtmlElement(document, '.pagination-container');
    pagination.addEventListener('click', (e) => {
      const btn = e.target as HTMLElement;
      if (btn.classList.contains('disabled')) return;

      const nextPage = findHtmlElement(document, '.pagination-next');
      const lastPage = findHtmlElement(document, '.pagination-last');
      const prevPage = findHtmlElement(document, '.pagination-prev');
      const firstPage = findHtmlElement(document, '.pagination-first');

      if (btn === nextPage) {
        this.data.pageNum += 1;
        this.data.pageNum = this.data.pageNum <= 29 ? this.data.pageNum : 29;
      }

      if (btn === lastPage) {
        this.data.pageNum = 29;
      }

      if (btn === prevPage) {
        this.data.pageNum -= 1;
        this.data.pageNum = this.data.pageNum >= 0 ? this.data.pageNum : 0;
      }

      if (btn === firstPage) {
        this.data.pageNum = 0;
      }

      this.generateWordCards(this.data.pageNum, this.data.difficulty, this.app.isAuth);
    });
  }

  callGame(game: 'audiocall' | 'sprint') {
    const params = {
      page: this.data.pageNum,
      difficulty: this.data.difficulty,
      textBookClick: true,
    };
    this.app.openGamePage(game, params);
  }

  setToLS(data: IDataTextbook) {
    localStorage.setItem('textbookData', JSON.stringify(data));
  }

  getFromLS() {
    const textbookData = localStorage.getItem('textbookData');
    let res = { difficulty: 0, pageNum: 0 };
    if (textbookData) {
      try {
        res = JSON.parse(textbookData) as IDataTextbook;
      } catch (err) {
        console.log(err);
      }
    }
    return res;
  }

  createUserWord(difficulty: string) {
    const word: IUserWord = {
      difficulty,
      optional: {
        streak: 0,
        newWord: false,
        totalCountAudiocall: 0,
        totalCorrectAudiocall: 0,
        totalCountSprint: 0,
        totalCorrectSprint: 0,
      },
    };
    return word;
  }

  async putWordToServer(id: string, difficulty: string) {
    let userWord = await User.getUserWord(id) as IUserWord | null;
    if (userWord) {
      userWord.difficulty = difficulty;
      // to match PUT IUserWord interface (fails with them)
      if ((userWord.difficulty) === 'learned' && !userWord.optional.dateLearned) userWord.optional.dateLearned = Date.now();
      delete userWord.wordId;
      delete userWord.id;
      await User.updateUserWord(id, userWord);
    } else {
      userWord = this.createUserWord(difficulty);
      if ((userWord.difficulty) === 'learned' && !userWord.optional.dateLearned) userWord.optional.dateLearned = Date.now();
      User.createUserWord(id, userWord);
    }
  }

  async onPropsBtnsClick(eventTarget: HTMLElement) {
    const word = eventTarget.closest<HTMLElement>('.word-container');
    if (!word) return;
    const activeProp = word.querySelector<HTMLElement>('.word-properties .active');
    let currentDifficulty = '';

    if (activeProp) {
      currentDifficulty = activeProp.dataset.difficulty || '';
      await this.putWordToServer(word.id, currentDifficulty);
      if (this.data.difficulty === 6) {
        word.remove();
      }
    } else {
      await User.deleteUserWord(word.id);
    }
    // await this.generateWordCards(this.data.pageNum, this.data.difficulty, this.app.isAuth);
  }

  async markUserWords() {
    const userWords: IUserWord[] = await User.getUserWords() as IUserWord[] || [];
    const wordsOnPage = document.querySelectorAll<HTMLElement>('.word-container');

    wordsOnPage.forEach((word) => {
      const userWord = userWords.find((el) => el.wordId === word.id);
      if (userWord) {
        const prop = word.querySelector<HTMLElement>(`.word-${userWord.difficulty}`);
        if (prop) {
          prop.classList.add('active');
        }
      }
    });
  }
}

export default TextbookController;
