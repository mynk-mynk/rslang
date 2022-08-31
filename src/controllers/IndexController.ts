import IndexView from '../views/pages';

class IndexController {
  static actionIndex() {
    const data = {
      data1: '0',
      data2: 'index',
    };
    (document.querySelector('main') as HTMLElement).innerHTML =
      IndexView.draw(data);
  }
}

export default IndexController;
