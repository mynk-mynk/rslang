import { findHtmlElement } from '../common/utils/utils';
import SprintView from '../views/pages/sprint/sprint';

class SprintController {
  actionIndex(page?: number, difficulty?: number, textBookClick?: boolean) {
    console.log(page, difficulty, textBookClick);
    // const data = {
    //   data1: '3',
    //   data2: 'sprint',
    // };
    const main = findHtmlElement(document, 'main');
    main.innerHTML = SprintView.draw();
  }
}

export default SprintController;
