import { findHtmlElement } from '../../../common/utils/utils';
import './difficulty-bar.css';

export function renderDifficultyBar() {
  const diffBar = document.createElement('div');
  diffBar.classList.add('difficulty-container');
  diffBar.innerHTML = `<div class="difficulty-btn level1 active" data-group="1">1</div>
    <div class="difficulty-btn level2" data-group="2">2</div>
    <div class="difficulty-btn level3" data-group="3">3</div>
    <div class="difficulty-btn level4" data-group="4">4</div>
    <div class="difficulty-btn level5" data-group="5">5</div>
    <div class="difficulty-btn level6" data-group="6">6</div>
    <div class="difficulty-btn level7" data-group="7">7</div>`;
  return diffBar;
}

export function activateProp(el: HTMLElement, selector = '.difficulty-btn') {
  if (!el.classList.contains('difficulty-btn')) return;
  if (el) {
    const elements = document.querySelectorAll(selector);
    elements?.forEach((element) => element.classList.remove('active'));
    el.classList.add('active');
  }
}

export function activateCurrentDifficulty(category: number) {
  const currentDiff = findHtmlElement(document, `[data-group="${category}"]`);
  activateProp(currentDiff);
}

export function setHardWordsVisible(auth: boolean) {
  const hardWords = document.querySelector<HTMLElement>('.level7');
  if (hardWords) hardWords.style.display = auth ? '' : 'none';
}
