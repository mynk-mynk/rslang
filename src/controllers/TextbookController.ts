import { findHtmlElement, showBurgerMenu } from '../common/utils/utils';
import { renderDifficultyBar } from '../views/components/difficulty-bar/difficulty-bar';
// import DifficultyBar from '../views/components/difficulty-bar/difficulty-bar';
import { renderTextbookPage } from '../views/pages/textbook/textbook';

class TextbookController {
  static actionIndex() {
    const main = findHtmlElement(document, 'main');
    main.innerHTML = renderTextbookPage();
    const header = findHtmlElement(document, 'h1');
    header.after(renderDifficultyBar());

    showBurgerMenu();
  }
}

export default TextbookController;
