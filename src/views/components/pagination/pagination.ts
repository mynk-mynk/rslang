import './pagination.css';

export function renderPagination() {
  const pagination = document.createElement('div');
  pagination.classList.add('pagination-container');
  pagination.innerHTML = `<p class="pagination-first disabled"><<</p>
  <p class="pagination-prev disabled"><</p>
  <div class="pagination-current"><span id="textbook-page-number">1</span> / 30</div>
  <p class="pagination-next">></p>
  <p class="pagination-last">>></p>`;
  return pagination;
}
