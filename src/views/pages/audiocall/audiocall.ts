import './audiocall.css';
import { IObject } from '../../../common/interfaces/IObject';
import { IWord } from '../../../common/interfaces/IWord';

class AudiocallView {
  static draw() {
    return `<div class="main-container-audiocall">
    <h1>Игра "Аудиовызов"</h1>
    
    <div class="game-container">
      <img class="sound-icon" src="../../assets/images/audiocall/sound.png" alt="Sound">
      <img class="word-img" src="" alt="Word image" width="100">

      <div class="audiocall-word-description">
        <img id="audio-btn" src="../../assets/svg/audio-speaker.svg" alt="Audio" class="audiocall-audio-icon" width="25">
        <p>Word</p>
      </div>

      <div class="btns-container-audiocall">
        <div class="answer1 correct-answer">
          <img class="answer-img active" src="../../assets/images/right-icon.png" alt="Correct-icon" width="20">
          <img class="answer-img" src="../../assets/images/wrong-icon.png" alt="Wrong-icon" width="20">
          Answer 1
        </div>
        <div class="answer2 wrong-answer">
          <img class="answer-img" src="../../assets/images/right-icon.png" alt="Correct-icon" width="20">
          <img class="answer-img active" src="../../assets/images/wrong-icon.png" alt="Wrong-icon" width="20">
          Answer 2
        </div>
        <div class="answer3">Answer 3</div>
        <div class="answer4">Answer 4</div>
        <div class="answer5">Answer 5</div>
      </div>

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
          <img class="audiocall-audio-icon" src="../../assets/svg/audio-speaker.svg" alt="Audio Icon" width="20">
          <img src="../../assets/images/right-icon.png" alt="Correct Icon" width="20">
          <p><span>Word</span> - перевод</p>
        </li>
        <li>
          <img class="audiocall-audio-icon" src="../../assets/svg/audio-speaker.svg" alt="Audio Icon" width="20">
          <img src="../../assets/images/wrong-icon.png" alt="Correct Icon" width="20">
          <p><span>Word</span> - перевод</p>
        </li>
      </ul>
    </div>

  </div>`;
  }

  static renderStartBtn() {
    return `
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

  static renderAudiocallDescription() {
    return `
    <div class="main-container-audiocall">
      <h1>Игра "Аудиокол"</h1>
      <div class="rules-container">
        <p>В игре "Аудиоколл" Ваша задача выбрать правильный перевод к услышанному слову из 5 предложенных вариантов.</p>
      </div>
      <div>
        <p class="controls-description">Вы можете отвечать на вопросы с помощью кнопок "1", "2", "3", "4", "5". Увидеть следующий вопрос можно при помощи клавиши "Enter"</p>
        <div class="control-keys">
          <img src="../../assets/images/audiocall/key-one.png">
          <img src="../../assets/images/audiocall/key-two.png">
          <img src="../../assets/images/audiocall/key-three.png">
          <img src="../../assets/images/audiocall/key-four.png">
          <img src="../../assets/images/audiocall/key-five.png">
          <img src="../../assets/images/audiocall/key-enter.png">
        </div>
      </div>
      <h3>Пожалуйста, выберите раздел</h3>
    </div>`
  }


  static renderQuestion(answers: string[], word: IWord | null) {
    return `<div class="main-container-audiocall">
    <h1>Игра "Аудиовызов"</h1>
    <div class="game-container">
          <img
            class="sound-icon"
            src="../../assets/images/audiocall/sound.png"
            alt="Sound"
          />
          <audio id="audio-word-${(<IWord>word).word}" src="http://localhost:4000/${(<IWord>word).audio}"></audio>

          <div class="audiocall-word-description">
            <img
              id="audio-btn-${(<IWord>word).word}"
              class = "audio-btn-img"
              src="../../assets/svg/audio-speaker.svg"
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
    <button id="btn-next" disabled>Next</button>
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
                </div>
              <p class="results-accuracy">${accuracy}%</p>
            </div>
            <div class="result-answers-container">
              <h3><img src="../../assets/images/right-icon.png" alt="Correct Icon" width="20"> Правильные ответы</h3>
              <div class="correct-results"></div>
              <h3><img src="../../assets/images/wrong-icon.png" alt="Incorrect Icon" width="20"> Ошибки</h3>
              <div class="incorrect-results"></div>
            </div>
        </div`;
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

export default AudiocallView;
