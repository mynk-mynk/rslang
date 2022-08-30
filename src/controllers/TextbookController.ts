// import { IObject } from '../common/interfaces/IObject';
import { findHtmlElement } from '../common/utils/utils';
import TextbookView from '../views/pages/textbook/textbook';

class TextbookController {
  static actionIndex() {
    // const data: IObject<string> = {
    //   data1: '1',
    //   data2: 'textbook',
    // };
    const main = findHtmlElement(document, 'main');
    main.innerHTML = TextbookView.draw();
  }
}

export default TextbookController;
