// eslint-disable-next-line import/no-cycle
import App from '../models/App';
import IndexView from '../views/pages';

class IndexController {
  private app: App;

  constructor(app: App) {
    this.app = app;
  }

  actionIndex() {
    this.app.setRouterToElements('.start-menu li');

    const main: HTMLElement | null =
      document.querySelector<HTMLElement>('main');
    if (main) main.innerHTML = IndexView.draw();
  }
}

export default IndexController;
