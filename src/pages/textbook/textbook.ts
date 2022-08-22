import '../pages.css';
import '../pages.ts';
import './textbook.css';

const difficultyContainer = document.querySelector('.difficulty-container');

function activateLevel(el: HTMLElement) {
  if (el) {
    const btns = difficultyContainer?.querySelectorAll('.difficulty-btn');
    btns?.forEach((btn) => btn.classList.remove('active'));
    el.classList.add('active');
  }
}

difficultyContainer?.addEventListener('click', (e) => activateLevel(e.target as HTMLElement));
