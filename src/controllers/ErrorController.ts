import { findHtmlElement } from '../common/utils/utils';
import ErrorView from '../views/pages/error/error';

class ErrorController {
  static actionIndex() {
    const main = findHtmlElement(document, 'main');
    main.innerHTML = ErrorView.draw();
  }
}

export default ErrorController;
