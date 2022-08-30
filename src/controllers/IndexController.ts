import IndexView from '../views/pages/index';

class IndexController {
  static actionIndex() {
    // const data = {
    //   data1: '0',
    //   data2: 'index',
    // };
    const main: HTMLElement | null = document.querySelector<HTMLElement>('main');
    if (main) main.innerHTML = IndexView.draw();
  }
}

export default IndexController;
