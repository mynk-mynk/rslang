import { findHtmlElement, showBurgerMenu } from '../common/utils/utils';
import ErrorView from '../views/pages/error/error';

class ErrorController {
  static actionIndex() {
    const main = findHtmlElement(document, 'main');
    main.innerHTML = ErrorView.draw();

    showBurgerMenu();
  }
}

export default ErrorController;
