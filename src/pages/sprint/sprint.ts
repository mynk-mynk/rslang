import '../pages.css';
import '../pages';
import './sprint.css';

// Toggle display: flex / none; in .game-container and .results-container

class SprintPage {
  static drawGame() {
    return `<div class="main-container">
    <h1>Игра "Спринт"</h1>
    <div class="game-container">
      <p>timer 3 2 1 start</p>

      <div class="game-field">
        <div class="answers">
          <p class="current-score">350</p>
          <div class="correct-answers">
            <p id="1-correct-answer"></p>
            <p id="2-correct-answer"></p>
            <p id="3-correct-answer"></p>
          </div>
          <p class="points-per-answer">+10 очков за слово</p>
        </div>
        <div class="progress">
          <img src="../../assets/images/sprint/baby.png" alt="Level 1" width="25">
          <img src="../../assets/images/sprint/toddler.png" alt="Level 2" width="35">
          <img src="../../assets/images/sprint/teen.png" alt="Level 3" width="45">
          <img src="../../assets/images/sprint/prof.png" alt="Level 4" width="55">
        </div>
        <div class="word-props">
          <p class="sprint-word">word</p>
          <p class="sprint-translation">перевод</p>
          <img class="answer-correct" src="../../assets/images/right-icon.png" alt="Correct icon" width="30">
          <img class="answer-wrong" src="../../assets/images/wrong-icon.png" alt="Correct icon" width="30">
        </div>
        <div class="btns-container">
          <div class="btn-true">+</div>
          <div class="btn-false">-</div>
        </div>
      </div>

      <div class="sprint-timer">timer for 1 min</div>

    </div>
  </div>`;
  }

  static drawResults() {
    return `<div class="result-container">
    <h2 class="results-header">Ваш результат:</h2>
    <div class="results">
      <div class="results-description">
        <p>Правильных ответов: 0</p>
        <p>Ошибок: 0</p>
        <p>Правильных ответов подряд: 0</p>
      </div>
      <p class="results-accuracy">100%</p>
    </div>
    <ul class="word-list">
      <h3>Список слов:</h3>
      <li>
        <img class="audio-icon" src="../../assets/svg/audio-speaker.svg" alt="Audio Icon" width="20">
        <audio id="audio-word" src=""></audio>
        <img src="../../assets/images/right-icon.png" alt="Correct Icon" width="20">
        <p><span>Word</span> - перевод</p>
      </li>
      <li>
        <img class="audio-icon" src="../../assets/svg/audio-speaker.svg" alt="Audio Icon" width="20">
        <img src="../../assets/images/wrong-icon.png" alt="Correct Icon" width="20">
        <p><span>Word</span> - перевод</p>
      </li>
    </ul>
  </div>`;
  }
}

const main: HTMLElement | null = document.querySelector<HTMLElement>('main');
if (main) main.innerHTML = SprintPage.drawGame();
