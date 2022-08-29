import ErrorView from '../views/pages/error';

class ErrorController {
  static actionIndex() {
    (document.querySelector('main') as HTMLElement).innerHTML = ErrorView.draw();
  }
}

export default ErrorController;
