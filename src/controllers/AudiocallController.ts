import { findHtmlElement } from '../common/utils/utils';
import AudiocallView from '../views/pages/audiocall/audiocall';

class AudiocallController {
  static actionIndex() {
    // const data = {
    //   data1: '5',
    //   data2: 'audiocall',
    // };
    const main = findHtmlElement(document, 'main');
    main.innerHTML = AudiocallView.draw();
  }
}

export default AudiocallController;
