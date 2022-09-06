import { findHtmlElement } from '../common/utils/utils';
import App from '../models/App';
import IndexView from '../views/pages/index/index';

class IndexController {
  private app: App;

  constructor(app: App) {
    this.app = app;
  }

  actionIndex() {
    const main = findHtmlElement(document, 'main');
    main.innerHTML = IndexView.draw();

    this.app.setRouterToElements('.start-menu li');
    this.app.setRouterToElements('.btn-like-link');
  }
}

export default IndexController;
