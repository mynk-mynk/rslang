import './audiocall.css';
// import { IObject } from '../../../common/interfaces/IObject';

class AudiocallView {
  // static draw(data: IObject<string>)
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
}

export default AudiocallView;
