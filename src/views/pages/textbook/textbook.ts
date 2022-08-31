import './textbook.css';

class TextbookView {
  static drawPage():string {
    return `<div class="main-container-textbook">
    <h1>Учебник</h1>
    <div class="difficulty-container"></div>
    <div class="words-container"></div>

    <div class="pagination-container">
      <p class="pagination-first disabled"><<</p>
      <p class="pagination-prev disabled"><</p>
      <div class="pagination-current"><span id="page-number">1</span> / 30</div>
      <p class="pagination-next">></p>
      <p class="pagination-last">>></p>
    </div>

  </div>`;
  }
}

export default TextbookView;
