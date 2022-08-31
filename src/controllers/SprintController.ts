import SprintView from '../views/pages/sprint';

class SprintController {
  static actionIndex() {
    const data = {
      data1: '3',
      data2: 'sprint',
    };
    (document.querySelector('main') as HTMLElement).innerHTML =
      SprintView.draw(data);
  }
}

export default SprintController;
