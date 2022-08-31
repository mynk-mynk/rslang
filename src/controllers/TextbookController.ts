// import { IObject } from '../common/interfaces/IObject';
import { findHtmlElement } from '../common/utils/utils';
// import DifficultyBar from '../views/components/difficulty-bar/difficulty-bar';
import TextbookView from '../views/pages/textbook/textbook';

class TextbookController {
  static actionIndex() {
    // const data: IObject<string> = {
    //   data1: '1',
    //   data2: 'textbook',
    // };
    const main = findHtmlElement(document, 'main');
    main.innerHTML = TextbookView.draw();

    // const header = findHtmlElement(document, 'h1');
    // header.after(DifficultyBar.draw());
  }
}

export default TextbookController;
