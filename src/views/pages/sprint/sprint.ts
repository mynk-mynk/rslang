// import { IObject } from '../../common/interfaces/IObject';

class SprintView {
  // static draw(data: IObject<string>)
  static draw() {
    return `<style>
    .main-container {
      position: relative;
      width: 100%;
      height: 100%;
      justify-content: space-between;
      flex-direction: column;
      align-items: center;
    }
    
    .game-container {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 50px;
    }
    
    .sprint-timer {
      position: absolute;
      right: 100px;
    }
    
    .game-field {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 30px;
    }
    
    .current-score {
      font-family: var(--font-primary);
      font-size: 2.5rem;
      margin-bottom: 10px;
    }
    
    .answers {
      text-align: center;
    }
    
    .correct-answers p {
      display: inline-block;
      width: 12px;
      height: 12px;
      border-radius: 6px;
      background: var(--color);
      opacity: 20%;
      margin: 3px;
    }
    
    .points-per-answer {
      font-size: 1.1rem;
      margin-top: 5px;
    }
    
    .progress {
      margin-bottom: 10px;
      border-bottom: 2px solid var(--color);
    }
    
    .word-props {
      text-align: center;
      margin: 20px;
    }
    
    .sprint-word {
      font-family: var(--font-primary);
      font-size: 1.5rem;
    }
    
    .sprint-translation {
      font-size: 1.3rem;
      margin-top: 5px;
      margin-bottom: 10px;
    }
    
    .btns-container {
      display: flex;
      gap: 30px;
    }
    
    .btns-container div {
      user-select: none;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-primary);
      font-size: 5rem;
      width: 70px;
      height: 70px;
      border-radius: 35px;
      border: 2px solid var(--color);
      opacity: 80%;
      transition: 0.2s;
    }
    
    .btn-true {
      background: #50a150;
    }
    
    .btn-false {
      background: #f06969;
    }
    
    .btns-container div:hover {
      cursor: pointer;
      opacity: 100%;
      box-shadow: 0 0 5px var(--color);
    }
    
    .btns-container div:active {
      transform: scale(0.95);
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
    
    .result-container .audio-icon:hover {
      cursor: pointer;
      transform: scale(1.05);
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

export default SprintView;
