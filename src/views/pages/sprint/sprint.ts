import './sprint.css';
// import { IObject } from '../../common/interfaces/IObject';
import { IWord } from '../../../common/interfaces/IWord';

class SprintView {
  // static draw(data: IObject<string>)
  static draw() {
    return `<div class="main-container-sprint">
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

    <div class="result-container">
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
          <img class="sprint-audio-icon" src="../../assets/svg/audio-speaker.svg" alt="Audio Icon" width="20">
          <img src="../../assets/images/right-icon.png" alt="Correct Icon" width="20">
          <p><span>Word</span> - перевод</p>
        </li>
        <li>
          <img class="sprint-audio-icon" src="../../assets/svg/audio-speaker.svg" alt="Audio Icon" width="20">
          <img src="../../assets/images/wrong-icon.png" alt="Correct Icon" width="20">
          <p><span>Word</span> - перевод</p>
        </li>
      </ul>
    </div>
  </div>`;
  }

  static renderStartBtn() {
    return `
    <style>.start-btn {
      display: inline-block;
      width: 100px;
      padding: 10px;
      margin: 0 10px;
      border: 2px solid var(--color);
      border-radius: 10px;
      font-size: 0.8rem;
      transition: 0.2s;
    }
    
    .start-btn:hover {
      cursor: pointer;
      background: var(--color);
      color: var(--ligth-color);
    }
    
    .start-btn:active {
      transform: scale(0.98);
    }
    
    main {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
    }</style>
    <button class="start-btn" disabled>Start</button>
    `;
  }

  static rightIcon() {
    return `<img
                    class="answer-img active"
                    src="../../assets/images/right-icon.png"
                    alt="Correct-icon"
                    width="20"
                    />`;
  }

  static wrongIcon() {
    return `<img
                    class="answer-img active"
                    src="../../assets/images/wrong-icon.png"
                    alt="Wrong-icon"
                    width="20"
                    />`;
  }

  static renderScores(currentScore: number, pointPerAnswer: number) {
    return `<p class="current-score">${currentScore}</p>
        <p class="points-per-answer">+${pointPerAnswer} очков за слово</p>
      `
  }

  static renderGameContainer() {
    return `<div class="game-field">
      <div class="scores-container">
      </div>
      <div class="progress">
        <img
          id="level-1"
          src="../../assets/images/sprint/baby.png"
          alt="Level 1"
          width="25"
        />
        <img
        style="display: none"
          id="level-2"
          src="../../assets/images/sprint/toddler.png"
          alt="Level 2"
          width="35"
        />
        <img
        style="display: none"
          id="level-3"
          src="../../assets/images/sprint/teen.png"
          alt="Level 3"
          width="45"
        />
        <img
        style="display: none"
          id="level-4"
          src="../../assets/images/sprint/prof.png"
          alt="Level 4"
          width="55"
        />
      </div>
    </div>
    <div class="questions-container"></div>`;
  }

  static renderQuestion(word: IWord, translation: IWord, score: number) {
    return `
      <div class="word-props">
        <p class="sprint-word">${word.word}</p>
        <p class="sprint-translation">${translation.wordTranslate}</p>
        <img
          class="answer-correct"
          src="../../assets/images/right-icon.png"
          alt="Correct icon"
          width="30"
        />
        <img
          class="answer-wrong"
          src="../../assets/images/wrong-icon.png"
          alt="Wrong icon"
          width="30"
        />
      </div>
      <div class="btns-container">
        <button id="btn-true">Верно</button>
        <button id="btn-false">Неверно</button>
      </div>
  </div>`;
  }

  static renderResults(correct: number, incorrect: number, accuracy: number) {
    return `<div class="result-container">
              <h2 class="results-header">Ваш результат:</h2>

              <div class="results">

                <div class="results-description">

                    <p>Правильных ответов: ${correct}</p>
                    <p>Ошибок: ${incorrect}</p>
                    <p>Правильных ответов подряд: 0</p>
                </div>

              <p class="results-accuracy">${accuracy}%</p>

                <div class="correct-results"></div>
                <div class="incorrect-results"></div>
              </div>
            </div>`;
  }

  static renderCorrectResults(word: IWord) {
    return `
    <div>
      <audio id="audio-word-${word.word}" src="http://localhost:4000/${word.audio}"></audio>
      <img id="audio-btn-${word.word}" class = "audio-icon" src="../../assets/svg/audio-speaker.svg" alt="Audio" class="audio-icon" width="20">
      <span class="word-original">${word.word}</span> - <span class="word-translation">${word.wordTranslate}</span>
    </div>`;
  }

  static renderIncorrectResults(word: IWord) {
    return `<div>
      <audio id="audio-word-${word.word}" src="http://localhost:4000/${word.audio}"></audio>
      <img id="audio-btn-${word.word}" class = "audio-icon" src="../../assets/svg/audio-speaker.svg" alt="Audio" class="audio-icon" width="20">
      <span class="word-original">${word.word}</span> - <span class="word-translation">${word.wordTranslate}</span>
  </div>`;
  }
}

export default SprintView;
