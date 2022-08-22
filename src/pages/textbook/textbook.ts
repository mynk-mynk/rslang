import '../pages.css';
import '../pages.ts';
import './textbook.css';

const difficultyContainer = document.querySelector('.difficulty-container');

function activateLevel(el: HTMLElement) {
  if (el) {
    const btns = difficultyContainer?.querySelectorAll('.difficulty-btn');
    btns?.forEach((btn) => btn.classList.remove('active'));
    el.classList.add('active');
  }
}

difficultyContainer?.addEventListener('click', (e) => activateLevel(e.target as HTMLElement));

async function getCard() {
  const url = 'http://localhost:4000/words/5e9f5ee35eb9e72bc21afbf9';
  const res = await fetch(url);
  const word = await res.json();
  console.log(word);

  const wordContainer = document.querySelector('.word-container');
  if (wordContainer) {
    wordContainer.innerHTML = 
    `<img class="word-img" src="http://localhost:4000/${word.image}" alt="">
    <div class="word-description">
      <div class="worrd-properties">
            <img src="../../assets/images/tick.png" alt="Learned" width="40" height="30">
            <img src="../../assets/images/star.png" alt="Hard" width="40">
          </div>
        <div class="word">
        <h2>${word.word}</h2>
        <p class="word-transcription">${word.transcription}</p>
        <img src="../../assets/svg/audio-speaker.svg" alt="Audio" class="audio-icon" width="20">
        <p class="word-translation">${word.wordTranslate}</p>
      </div>
      <div class="word-meaning">
        <p>
        ${word.textMeaning}
          <img class="audio-icon" src="../../assets/svg/audio-speaker.svg" alt="Audio" width="20">
        </p>
        <p class="meaning-translation">${word.textMeaningTranslate}</p>
      </div>
      <div class="word-example">
        <p>
        ${word.textExample}
          <img class="audio-icon" src="../../assets/svg/audio-speaker.svg" alt="Audio" width="20">
        </p>
        <p class="example-translation">${word.textExampleTranslate}</p>
      </div>
    </div>`;
  }
}

void getCard();
