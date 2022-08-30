// import { IObject } from '../../../common/interfaces/IObject';

class AudiocallView {
  // static draw(data: IObject<string>)
  static draw() {
    return `<style>
    .main-container {
      height: 100%;
      flex-direction: column;
      align-items: center;
    }
    
    .game-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 80px;
      padding-top: 100px;
    }
    
    .word-img {
      display: none;
    }
    
    .sound-icon,
    .word-img {
      width: 150px;
    }
    
    .word-description {
      font-family: var(--font-primary);
      font-size: 2rem;
      display: flex;
      align-content: center;
      gap: 15px;
    }
    
    .word-description {
      display: flex;
    }
    
    .audio-icon {
      filter: var(--filter-light);
      transition: 0.1s;
    }
    
    .audio-icon:hover {
      cursor: pointer;
      filter: var(--filter-light);
      transform: scale(1.05);
    }
    
    .audio-icon:active {
      transform: scale(0.95);
    }
    
    .btns-container {
      width: 70%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 50px;
    }
    
    .btns-container div {
      position: relative;
      user-select: none;
      font-family: var(--font-secondary);
      font-size: 1.5rem;
      opacity: 80%;
      transition: 0.2s;
    }
    
    .btns-container div.correct-answer,
    .btns-container div.wrong-answer {
      opacity: 100%;
      text-shadow: 0 0 1px var(--color);
      transform: scale(1.05);
    }
    
    .btns-container div:hover {
      cursor: pointer;
      opacity: 100%;
      transform: scale(1.05);
      text-shadow: 0 0 1px var(--color);
    }
    
    .btns-container div.correct-answer:hover,
    .btns-container div.wrong-answer:hover {
      cursor: auto;
    }
    
    .btns-container div.correct-answer:active,
    .btns-container div.wrong-answer:active {
      transform: scale(1.05);
    }
    
    .btns-container div:active {
      transform: scale(0.95);
    }
    
    .answer-img {
      display: none;
      position: absolute;
      top: -25px;
      left: calc(50% - 10px);
    }
    
    .answer-img.active {
      display: block;
    }
    
    .result-container {
      display: flex;
      flex-direction: column;
      padding-top: 80px;
      gap: 30px;
    }
    
    .result-container .audio-icon {
      filter: var(--filter);
    }
    
    .results-header {
      align-self: center;
      font-size: 1.5rem;
    }
    
    .results {
      display: flex;
      gap: 50px;
    }
    
    .results-description p {
      margin: 5px;
    }
    
    .results-accuracy {
      align-self: center;
    }
    
    .word-list h3 {
      margin: 10px 0;
    }
    
    .word-list li {
      height: 30px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    
    .word-list li span {
      font-family: var(--font-primary);
      font-weight: 500;
      font-size: 1.1rem;
    }
    
    </style>
    <div class="main-container">
    <h1>Игра "Аудиовызов"</h1>
    
    <div class="game-container">
      <img class="sound-icon" src="../../assets/images/audiocall/sound.png" alt="Sound">
      <img class="word-img" src="" alt="Word image" width="100">

      <div class="word-description">
        <img id="audio-btn" src="../../assets/svg/audio-speaker.svg" alt="Audio" class="audio-icon" width="25">
        <p>Word</p>
      </div>

      <div class="btns-container">
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
          <img class="audio-icon" src="../../assets/svg/audio-speaker.svg" alt="Audio Icon" width="20">
          <img src="../../assets/images/right-icon.png" alt="Correct Icon" width="20">
          <p><span>Word</span> - перевод</p>
        </li>
        <li>
          <img class="audio-icon" src="../../assets/svg/audio-speaker.svg" alt="Audio Icon" width="20">
          <img src="../../assets/images/wrong-icon.png" alt="Correct Icon" width="20">
          <p><span>Word</span> - перевод</p>
        </li>
      </ul>
    </div>

  </div>`;
  }
}

export default AudiocallView;
