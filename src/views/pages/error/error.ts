class ErrorView {
  static draw() {
    return `<style>
    .main-container {
      display: flex;
      flex-direction: column;
      gap: 30px;
      align-items: center;
      font-family: var(--font-primary);
    }
    
    h1 {
      font-size: 5rem;
    }
    
    p {
      font-size: 2rem;
    }
    </style>
    <div class="main-container">
    <h1>404</h1>
    <p>Page not found</p>
    </div>`;
  }
}

export default ErrorView;
