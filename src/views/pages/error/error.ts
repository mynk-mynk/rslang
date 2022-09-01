import './error.css';

class ErrorView {
  static draw() {
    return `<div class="main-container-error">
    <h1>404</h1>
    <p>Page not found</p>
    </div>`;
  }
}

export default ErrorView;
