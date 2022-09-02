import Word from '../models/Word';
import { IWord } from '../common/interfaces/IWord';
import { findHtmlElement, showBurgerMenu } from '../common/utils/utils';
import { activateCurrentDifficulty, activateProp, renderDifficultyBar } from '../views/components/difficulty-bar/difficulty-bar';
import { disableBtns, renderPagination, setPageNum } from '../views/components/pagination/pagination';
import {
  chooseWordProp, renderWordCard, playAudio, changeCardBoxshadow,
} from '../views/components/word-card/word-card';
import { renderTextbookPage } from '../views/pages/textbook/textbook';

interface IDataTextbook {
  difficulty: number,
  pageNum: number,
}

class TextbookController {
  static actionIndex() {
    const data: IDataTextbook = TextbookController.getFromLS()
    || { difficulty: 0, pageNum: 0 };

    showBurgerMenu();

    const main = findHtmlElement(document, 'main');
    main.innerHTML = renderTextbookPage();

    const header = findHtmlElement(document, 'h1');
    header.after(renderDifficultyBar());
    // const hardWords = findHtmlElement(document, '.level7');
    // hardWords.style.display = App.isAuth ? 'block' : 'none';
    TextbookController.addListenersToDiffBar();

    TextbookController.generateWordCards(data.pageNum, data.difficulty)
      .catch((e) => console.log(e));
    activateCurrentDifficulty(data.difficulty + 1);

    const mainContainer = findHtmlElement(document, '.main-container-textbook');
    mainContainer.append(renderPagination());

    const pagination = findHtmlElement(document, '.pagination-container');
    pagination.addEventListener('click', async (e) => {
      const btn = e.target as HTMLElement;
      if (btn.classList.contains('disabled')) return;

      const nextPage = findHtmlElement(document, '.pagination-next');
      const lastPage = findHtmlElement(document, '.pagination-last');
      const prevPage = findHtmlElement(document, '.pagination-prev');
      const firstPage = findHtmlElement(document, '.pagination-first');

      if (btn === nextPage) {
        data.pageNum += 1;
        data.pageNum = data.pageNum <= 29 ? data.pageNum : 29;
      }

      if (btn === lastPage) {
        data.pageNum = 29;
      }

      if (btn === prevPage) {
        data.pageNum -= 1;
        data.pageNum = data.pageNum >= 0 ? data.pageNum : 0;
      }

      if (btn === firstPage) {
        data.pageNum = 0;
      }

      await TextbookController.generateWordCards(data.pageNum, data.difficulty);
    });

    const difficultyContainer = findHtmlElement(document, '.difficulty-container');
    difficultyContainer.addEventListener('click', async (e) => {
      const btn = e.target as HTMLElement;
      if (!btn.classList.contains('difficulty-btn')) return;
      const diff = btn.dataset.group;
      data.difficulty = Number(diff) - 1 || 0;
      data.pageNum = 0;
      await TextbookController.generateWordCards(data.pageNum, data.difficulty);
      // TODO: hard words generation when difficulty = 6;
      changeCardBoxshadow(data.difficulty + 1);
    });
  }

  static async generateWordCards(page: number, difficulty: number) {
    const wordsContainer = findHtmlElement(document, '.words-container');
    wordsContainer.innerHTML = '';
    const words = await Word.getWords(page, difficulty) as IWord[];
    words.forEach((word) => {
      const card = renderWordCard(word);
      wordsContainer.append(card);
    });
    changeCardBoxshadow(difficulty + 1);
    TextbookController.addListenersToCards();
    setPageNum(page + 1);
    disableBtns(page);
    TextbookController.setToLS({ pageNum: page, difficulty });
  }

  static addListenersToDiffBar() {
    const difficultyContainer = findHtmlElement(document, '.difficulty-container');
    difficultyContainer.addEventListener('click', (e) => activateProp(e.target as HTMLElement));
  }

  static addListenersToCards() {
    const wordProps = document.querySelectorAll('.word-properties');
    wordProps.forEach((container) => {
      container.addEventListener('click', (e) => chooseWordProp(e.target as HTMLImageElement));
    });

    document.querySelectorAll('.audio-icon').forEach((icon) => {
      icon.addEventListener('click', (e) => playAudio(e.target as HTMLElement));
    });
  }

  static setToLS(data: IDataTextbook) {
    localStorage.setItem('textbookData', JSON.stringify(data));
  }

  static getFromLS() {
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
}

export default TextbookController;
