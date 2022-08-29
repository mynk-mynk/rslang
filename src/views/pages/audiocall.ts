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
            <button class="start-btn">START</button>
            `;
  }

  static renderQuestion(answers: string[]) {
    return `
    <div class="game-container">
          <img
            class="sound-icon"
            src="../../assets/images/sound.png"
            alt="Sound"
          />
          <img class="word-img" src="" alt="Word image" width="100" />

          <div class="word-description">
            <img
              id="audio-btn"
              src="../../assets/svg/audio-speaker.svg"
              alt="Audio"
              class="audio-icon"
              width="25"
            />
            <p class="current-word-answer">Word</p>
          </div>
          
    <div class="btns-container">
      <div>
        <button class="answer1 answer-item">1. ${answers[0].toUpperCase()}</button>
      </div>
      <div>
        <button class="answer2 answer-item">2. ${answers[1].toUpperCase()}</button>
      </div>
      <div>
        <button class="answer3 answer-item">3. ${answers[2].toUpperCase()}</button>
      </div>
      <div>
        <button class="answer4 answer-item">4. ${answers[3].toUpperCase()}</button>
      </div>
      <div>
        <button class="answer5 answer-item">5. ${answers[4].toUpperCase()}</button>
      </div>
    </div>`;
  }
}

export default AudiocallView;
