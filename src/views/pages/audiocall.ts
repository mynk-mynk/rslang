import { IObject } from '../../common/interfaces/IObject';
import { IWord, IWords } from '../../common/interfaces/IWord';

class AudiocallView {
  static draw(data: IObject<string>) {
    return `<div>Audiocall content with data: ${Object.values(data).join(
      ' , '
    )}</div>`;
  }
  static renderDifficulty() {
    return `<div class="difficulty-container">
              <div class="difficulty-btn level1">1</div>
              <div class="difficulty-btn level2">2</div>
              <div class="difficulty-btn level3">3</div>
              <div class="difficulty-btn level4">4</div>
              <div class="difficulty-btn level5">5</div>
              <div class="difficulty-btn level6">6</div>
            </div>
            <button class="start-btn" disabled>START</button>
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

  static renderQuestion(answers: string[], word: IWord | null) {
    return `
    <div class="game-container">
          <img
            
            class="sound-icon"
            src="../../assets/images/sound.png"
            alt="Sound"
          />
          <audio id="audio-word-${
            (<IWord>word).word
          }" src="http://localhost:4000/${(<IWord>word).audio}"></audio>
          <img class="word-img" src="" alt="Word image" width="100" />

          <div class="word-description">
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

    <div class="btns-container">
      <div>
        <button class="answer1 answer-item">1. ${answers[0]}</button>
      </div>
      <div>
        <button class="answer2 answer-item">2. ${answers[1]}</button>
      </div>
      <div>
        <button class="answer3 answer-item">3. ${answers[2]}</button>
      </div>
      <div>
        <button class="answer4 answer-item">4. ${answers[3]}</button>
      </div>
      <div>
        <button class="answer5 answer-item">5. ${answers[4]}</button>
      </div>
    </div>
    <button id="btn-next" disabled>Next</button>
  </div>`;
  }

  static renderResults() {
    return `<div class="result-container">
              <h2 class="results-header">Ваш результат:</h2>

              <div class="results">

                <div class="results-description">

                    <p>Правильных ответов: 0</p>
                    <p>Ошибок: 0</p>
                    <p>Правильных ответов подряд: 0</p>
                </div>

              <p class="results-accuracy">100%</p>

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

export default AudiocallView;
