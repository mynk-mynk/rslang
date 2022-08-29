import AudiocallView from '../views/pages/audiocall';

class AudiocallController {
  static actionIndex() {
    const data = {
      data1: '5',
      data2: 'audiocall',
    };
    (document.querySelector('main') as HTMLElement).innerHTML = AudiocallView.draw(data);
  }
}

export default AudiocallController;
