import './difficulty-bar.css';

class DifficultyBar {
  static draw() {
    return `<div class="difficulty-container">
    <div class="difficulty-btn level1">1</div>
    <div class="difficulty-btn level2">2</div>
    <div class="difficulty-btn level3">3</div>
    <div class="difficulty-btn level4">4</div>
    <div class="difficulty-btn level5">5</div>
    <div class="difficulty-btn level6">6</div>
    <div class="difficulty-btn level7">7</div>
    
  </div>
  <button class="start-btn" disabled>Start</button>`;
  }
}

export default DifficultyBar;
