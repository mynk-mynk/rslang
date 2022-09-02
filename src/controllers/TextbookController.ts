import Word from '../models/Word';
import { IWord } from '../common/interfaces/IWord';
import { findHtmlElement, showBurgerMenu } from '../common/utils/utils';
import { activateProp, renderDifficultyBar } from '../views/components/difficulty-bar/difficulty-bar';
import { disableBtns, renderPagination, setPageNum } from '../views/components/pagination/pagination';
import { chooseWordProp, renderWordCard, playAudio } from '../views/components/word-card/word-card';
import { renderTextbookPage } from '../views/pages/textbook/textbook';

interface IDataTextbook {
  difficulty: number,
  pageNum: number,
  words: IWord[]
}

class TextbookController {
  static actionIndex() {
    const data: IDataTextbook = {
      difficulty: 0,
      pageNum: 0,
      words: [],
    };

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
      disableBtns(data.pageNum);
      setPageNum(data.pageNum + 1);
    });
  }

  static addListenersToDiffBar() {
    const difficultyContainer = document.querySelector('.difficulty-container');
    difficultyContainer?.addEventListener('click', (e) => activateProp(e.target as HTMLElement, '.difficulty-btn'));
  }

  static async generateWordCards(page: number, difficulty: number) {
    const wordsContainer = findHtmlElement(document, '.words-container');
    wordsContainer.innerHTML = '';
    const words = await Word.getWords(page, difficulty) as IWord[];
    words.forEach((word) => {
      const card = renderWordCard(word);
      wordsContainer.append(card);
    });
    TextbookController.addListenersToCards();
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
}

export default TextbookController;
