import './textbook.css';

export function renderTextbookPage(): string {
  return `<div class="main-container-textbook">
    <h1>Учебник</h1>

    <div class="textbook-game-btns">
      <button class="start-audiocall">
        <img src="../../../assets/images/audiocall.png" alt="Sprint" width="40">
        <p>Играть</p>
      </button>
      <button class="start-sprint">
        <img src="../../../assets/images/sprint.png" alt="Sprint" width="40">
        <p>Играть</p>
      </button>
    </div>

    <div class="words-container"></div>

  </div>`;
}
