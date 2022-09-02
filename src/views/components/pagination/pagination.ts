import { findHtmlElement } from '../../../common/utils/utils';
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

export function disableBtns(page: number) {
  const nextPage = findHtmlElement(document, '.pagination-next');
  const lastPage = findHtmlElement(document, '.pagination-last');
  const prevPage = findHtmlElement(document, '.pagination-prev');
  const firstPage = findHtmlElement(document, '.pagination-first');
  if (page === 0) {
    prevPage.classList.add('disabled');
    firstPage.classList.add('disabled');
  }
  if (page > 0) {
    prevPage.classList.remove('disabled');
    firstPage.classList.remove('disabled');
  }
  if (page === 29) {
    nextPage.classList.add('disabled');
    lastPage.classList.add('disabled');
  }
  if (page < 29) {
    nextPage.classList.remove('disabled');
    lastPage.classList.remove('disabled');
  }
}

export function setPageNum(num: number) {
  const currentPage = findHtmlElement(document, '#textbook-page-number');
  currentPage.innerText = num.toString();
}
