import Word from '../models/Word';
import { IWord } from '../common/interfaces/IWord';
import { findHtmlElement, showBurgerMenu } from '../common/utils/utils';
import { activateProp, renderDifficultyBar } from '../views/components/difficulty-bar/difficulty-bar';
import { renderPagination } from '../views/components/pagination/pagination';
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
      difficulty: 1,
      pageNum: 1,
      words: [],
    };

    showBurgerMenu();

    const main = findHtmlElement(document, 'main');
    main.innerHTML = renderTextbookPage();

    const header = findHtmlElement(document, 'h1');
    header.after(renderDifficultyBar());
    // authorization check (6 or 7 categories)
    TextbookController.addListenersToDiffBar();

    TextbookController.generateWordCards(data.pageNum, data.difficulty)
      .catch((e) => console.log(e));

    const mainContainer = findHtmlElement(document, '.main-container-textbook');
    mainContainer.append(renderPagination());
  }

  static addListenersToDiffBar() {
    const difficultyContainer = document.querySelector('.difficulty-container');
    difficultyContainer?.addEventListener('click', (e) => activateProp(e.target as HTMLElement, '.difficulty-btn'));
  }

  static async generateWordCards(page: number, difficulty: number) {
    const wordsContainer = findHtmlElement(document, '.words-container');
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
