import { IObject } from '../common/interfaces/IObject';
import TextbookView from '../views/pages/textbook';

class TextbookController {
  static actionIndex() {
    const data: IObject<string> = {
      data1: '1',
      data2: 'textbook',
    };
    (document.querySelector('main') as HTMLElement).innerHTML = TextbookView.draw(data);
  }
}

export default TextbookController;
