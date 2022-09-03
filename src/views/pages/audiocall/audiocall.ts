import './audiocall.css';
import { IObject } from '../../../common/interfaces/IObject';
import { IWord } from '../../../common/interfaces/IWord';

class AudiocallView {
  
  static renderStartBtn() {
    return `
    <button class="start-btn" disabled>Start</button>
    `;
  }

  static rightIcon() {
    return `<img
                    class="answer-img active"
                    src="./assets/images/right-icon.png"
                    alt="Correct-icon"
                    width="20"
                    />`;
  }

  static wrongIcon() {
    return `<img
                    class="answer-img active"
                    src="./assets/images/wrong-icon.png"
                    alt="Wrong-icon"
                    width="20"
                    />`;
  }


  static renderAudiocallDescription() {
    return `
    <div class="main-container-audiocall">
      <h1>Игра "Аудиокол"</h1>
      <div class="rules-container">
        <p>В игре "Аудиоколл" Ваша задача выбрать правильный перевод к услышанному слову из 5 предложенных вариантов.</p>
        <p class="controls-description">Вы можете отвечать на вопросы с помощью кнопок "1", "2", "3", "4", "5". Увидеть следующий вопрос можно при помощи клавиши "Enter"</p>
        <div class="control-keys">
          <img src="./assets/images/audiocall/key-one.png">
          <img src="./assets/images/audiocall/key-two.png">
          <img src="./assets/images/audiocall/key-three.png">
          <img src="./assets/images/audiocall/key-four.png">
          <img src="./assets/images/audiocall/key-five.png">
          <img src="./assets/images/audiocall/key-enter.png">
        </div>
      </div>
      <h3>Пожалуйста, выберите раздел</h3>
    </div>`;
  }

  static renderQuestion(answers: string[], word: IWord | null) {
    return `<div class="main-container-audiocall">
    <h1>Игра "Аудиовызов"</h1>
    <div class="game-container">
    <div class="audiocall-image-container">
          <img
            class="sound-icon"
            src="./assets/images/audiocall/sound.png"
            alt="Sound"
          />
          </div>
          <audio id="audio-word-${(<IWord>word).word}" src="http://localhost:4000/${(<IWord>word).audio}"></audio>

          <div class="audiocall-word-description">
            <img
              id="audio-btn-${(<IWord>word).word}"
              class = "audio-btn-img"
              src="./assets/svg/audio-speaker.svg"
              alt="Audio"
              class="audio-icon"
              width="25"
            />
            <p class="current-word-answer">Word</p>
          </div>

    <div class="btns-container-audiocall">
      <div class="answer-container-audiocall">
        <button class="answer1 answer-item">1. ${answers[0]}</button>
      </div>
      <div class="answer-container-audiocall">
        <button class="answer2 answer-item">2. ${answers[1]}</button>
      </div>
      <div class="answer-container-audiocall">
        <button class="answer3 answer-item">3. ${answers[2]}</button>
      </div>
      <div class="answer-container-audiocall">
        <button class="answer4 answer-item">4. ${answers[3]}</button>
      </div>
      <div class="answer-container-audiocall">
        <button class="answer5 answer-item">5. ${answers[4]}</button>
      </div>
    </div>
    <button id="btn-next" class="next-btn" disabled>Next</button>
  </div>
  </div>`;
  }

  static renderResults(correct: number, incorrect: number, accuracy: number) {
    return `<div class="main-container-audiocall">
              <div class="result-container">
                <h2 class="results-header">Ваш результат:</h2>
                <div class="results">
                  <div class="results-description">
                    <p>Правильных ответов: ${correct}</p>
                    <p>Ошибок: ${incorrect}</p>
                    <p>Правильных ответов подряд: 0</p>
                    <p class="results-accuracy">Процент правильных ответов: ${accuracy}%</p>
                </div>
                <div>
                  <canvas id="audiocall-results-chart"></canvas>
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
      <img id="audio-btn-${word.word}" src="./assets/svg/audio-speaker.svg" alt="Audio" class="audiocall-audio-icon" width="20">
      <span class="word-original word-audiocall">${word.word}</span> - <span class="word-audiocall">${word.wordTranslate}</span>
    </div>`;
  }

  static renderIncorrectResults(word: IWord) {
    return `<div class="word-list-item">
      <audio id="audio-word-${word.word}" src="http://localhost:4000/${word.audio}"></audio>
      <img id="audio-btn-${word.word}" src="./assets/svg/audio-speaker.svg" alt="Audio" class="audiocall-audio-icon" width="20">
      <span class="word-original word-audiocall">${word.word}</span> - <span class="word-audiocall">${word.wordTranslate}</span>
  </div>`;
  }
}

export default AudiocallView;
