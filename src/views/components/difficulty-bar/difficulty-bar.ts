export function renderDifficultyBar() {
  return `<style>
  .difficulty-container {
    display: flex;
    gap: 15px;
  }
  
  .difficulty-btn {
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-primary);
    font-size: 1.8rem;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    border: 2px solid var(--color);
    opacity: 70%;
    transition: 0.2s;
  }
  
  .level1 {
    background: #f06969;
  }
  
  .level2 {
    background: #ec7d3d;
  }
  
  .level3 {
    background: #e4e713;
  }
  
  .level4 {
    background: #50a150;
  }
  
  .level5 {
    background: #69d0f0;
  }
  
  .level6 {
    background: #4183c0;
  }
  
  .level7 {
    background: #906bb3;
  }
  
  .difficulty-btn:hover {
    cursor: pointer;
    opacity: 100%;
    box-shadow: 0 0 5px var(--color);
  }
  
  .difficulty-btn:active {
    transform: scale(0.95);
  }
  
  .difficulty-btn.active {
    transform: scale(1.15);
    opacity: 100%;
    box-shadow: 0 0 10px var(--color);
  }
    </style>
  <div class="difficulty-container">
    <div class="difficulty-btn level1 active">1</div>
    <div class="difficulty-btn level2">2</div>
    <div class="difficulty-btn level3">3</div>
    <div class="difficulty-btn level4">4</div>
    <div class="difficulty-btn level5">5</div>
    <div class="difficulty-btn level6">6</div>
    <div class="difficulty-btn level7">7</div>
  </div>`;
}

