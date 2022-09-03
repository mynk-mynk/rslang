import './sprint.css';
// import { IObject } from '../../common/interfaces/IObject';
import { IWord } from '../../../common/interfaces/IWord';

class SprintView {
  static renderStartBtn() {
    return `
    <button class="start-btn" disabled>Start</button>
    `;
  }

  static renderSprintDescription() {
    return `
    <div class="main-container-sprint">
      <h1>Игра "Спринт"</h1>
      <div class="rules-container">
        <p>В игре "Спринт" Ваша задача выбрать правильный перевод к заданному слову.</p>
        <p>Ответив правильно на 3 вопроса, количество баллов за правильный ответ удваивается.</p> 
        <p>Изображения человечков показывает текущий множитель.</p>
        <p>Вы можете отвечать на вопросы с помощью кнопок Вправо и Влево</p>
      </div>
      <div>
        <div class="control-keys">
          <img src="./assets/images/sprint/left-arrow.png">
          <img src="./assets/images/sprint/right-arrow.png">
        </div>
      </div>
      <h3>Пожалуйста, выберите раздел</h3>
    </div>`;
  }

  static renderScores(currentScore: number, pointPerAnswer: number) {
    return `
      <p class="current-score">${currentScore}</p>
      <p class="points-per-answer">+${pointPerAnswer} очков за слово</p>
  `;
  }

  static renderGameContainer() {
    return `
    <div class="main-container-sprint">
    <h1>Игра "Спринт"</h1>
    <p id="timer-container"></p>
    <div class="game-field">
      <div class="answers">
      </div>
      <div class="correct-answers">
        <p id="1-correct-answer" class="streak-mark"></p>
        <p id="2-correct-answer" class="streak-mark"></p>
        <p id="3-correct-answer" class="streak-mark"></p>
      </div>
      <div class="progress">
        <img
          id="level-1"
          src="./assets/images/sprint/baby.png"
          alt="Level 1"
          width="25"
        />
        <img
        style="display: none"
          id="level-2"
          src="./assets/images/sprint/toddler.png"
          alt="Level 2"
          width="35"
        />
        <img
        style="display: none"
          id="level-3"
          src="./assets/images/sprint/teen.png"
          alt="Level 3"
          width="45"
        />
        <img
        style="display: none"
          id="level-4"
          src="./assets/images/sprint/prof.png"
          alt="Level 4"
          width="55"
        />
      </div>
    </div>
    <div class="word-props"></div>
    
    <div class="btns-container">
        <div id="btn-true" class="btn-true">+</div>
        <div id="btn-false" class="btn-false">-</div>
      </div>
    </div>`;
  }

  static renderQuestion(word: IWord, translation: IWord, score: number) {
    return `
        <p class="sprint-word">${word.word}</p>
        <p class="sprint-translation">${translation.wordTranslate}</p>
        <img
          class="answer-correct"
          src="./assets/images/right-icon.png"
          alt="Correct icon"
          width="30"
        />
        <img
          class="answer-wrong"
          src="./assets/images/wrong-icon.png"
          alt="Wrong icon"
          width="30"
        />`;
  }

  static renderResults(correct: number, incorrect: number, accuracy: number) {
    return `<div class="main-container-sprint">
              <div class="result-container">
                <h2 class="results-header">Ваш результат:</h2>

                <div class="results">
                  <div class="results-description">
                    <p>Правильных ответов: ${correct}</p>
                    <p>Ошибок: ${incorrect}</p>
                    <p class="results-accuracy">Процент правильных ответов: ${accuracy}%</p>
                </div>
                <div>
                  <canvas id="sprint-results-chart"></canvas>
                </div>
              
            </div>
            <div class="result-answers-container">
              <h3><img src="./assets/images/right-icon.png" alt="Correct Icon" width="20"> Правильные ответы</h3>
              <div class="correct-results"></div>
              <h3><img src="./assets/images/wrong-icon.png" alt="Incorrect Icon" width="20"> Ошибки</h3>
              <div class="incorrect-results"></div>
            </div>
        </div`;
  }

  static renderCorrectResults(word: IWord) {
    return `
    <div class="word-list-item">
      <audio id="audio-word-${word.word}" src="http://localhost:4000/${word.audio}"></audio>
      <img id="audio-btn-${word.word}" class = "sprint-audio-icon" src="./assets/svg/audio-speaker.svg" alt="Audio" class="audio-icon" width="20">
      <span class="word-original word-sprint">${word.word}</span>-<span class="word-sprint">${word.wordTranslate}</span>
    </div>`;
  }

  static renderIncorrectResults(word: IWord) {
    return `<div class="word-list-item">
      <audio id="audio-word-${word.word}" src="http://localhost:4000/${word.audio}"></audio>
      <img id="audio-btn-${word.word}" class = "sprint-audio-icon" src="./assets/svg/audio-speaker.svg" alt="Audio" class="audio-icon" width="20">
      <span class="word-original word-sprint">${word.word}</span>-<span class="word-sprint">${word.wordTranslate}</span>
  </div>`;
  }
}

export default SprintView;
