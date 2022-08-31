import { findHtmlElement } from '../common/utils/utils';
import { renderDifficultyBar } from '../views/components/difficulty-bar/difficulty-bar';
// import DifficultyBar from '../views/components/difficulty-bar/difficulty-bar';
import TextbookView from '../views/pages/textbook/textbook';

class TextbookController {
  static actionIndex() {
    const main = findHtmlElement(document, 'main');
    main.innerHTML = TextbookView.drawPage();

    const diffBar = findHtmlElement(document, '.difficulty-container');
    diffBar.innerHTML = renderDifficultyBar();
  }
}

export default TextbookController;
