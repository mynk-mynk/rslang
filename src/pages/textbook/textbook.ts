import '../pages.css';
import '../pages.ts';
import './textbook.css';

interface IWord {
  id: string,
  group: number,
  page: number,
  word: string,
  image: string,
  audio: string,
  audioMeaning: string,
  audioExample: string,
  textMeaning: string,
  textExample: string,
  transcription: string,
  wordTranslate: string,
  textMeaningTranslate: string,
  textExampleTranslate: string
}

// TODO - function which change shadow color depending on a difficulty
// for card-container, word-props, audio-icons and pagination

const difficultyContainer = document.querySelector('.difficulty-container');

function activateProp(el: HTMLElement, selector: string) {
  if (el) {
    const elements = document.querySelectorAll(selector);
    elements?.forEach((element) => element.classList.remove('active'));
    el.classList.add('active');
  }
}

difficultyContainer?.addEventListener('click', (e) => activateProp(e.target as HTMLElement, '.difficulty-btn'));

async function getCard() {
  const url = 'http://localhost:4000/words/5e9f5ee35eb9e72bc21afbf9';
  const res = await fetch(url);
  const word = await res.json() as IWord;
  const wordContainer = document.querySelector('.word-container');
  if (wordContainer) {
    wordContainer.innerHTML = `<img class="word-img" src="http://localhost:4000/${word.image}" alt="">
    <div class="word-description">
      <div class="word-properties">
        <img class="word-learned" src="../../assets/images/textbook/tick.png" alt="Learned" width="40">
        <img class="word-hard" src="../../assets/images/textbook/star.png" alt="Hard" width="40">
          </div>
        <div class="word">
        <h2>${word.word}</h2>
        <p class="word-transcription">${word.transcription}</p>
        <audio id="audio-word" src="http://localhost:4000/${word.audio}"></audio>
        <img id="audio-btn-word" src="../../assets/svg/audio-speaker.svg" alt="Audio" class="audio-icon" width="20">
        <p class="word-translation">${word.wordTranslate}</p>
      </div>
      <div class="word-meaning">
        <p>
        ${word.textMeaning}
        <img id="audio-btn-meaning" class="audio-icon" src="../../assets/svg/audio-speaker.svg" alt="Audio" width="20">
          <audio id="audio-meaning" src="http://localhost:4000/${word.audioMeaning}"></audio>
        </p>
        <p class="meaning-translation">${word.textMeaningTranslate}</p>
      </div>
      <div class="word-example">
        <p>
        ${word.textExample}
        <img id="audio-btn-example" class="audio-icon" src="../../assets/svg/audio-speaker.svg" alt="Audio" width="20">
          <audio id="audio-example" src="http://localhost:4000/${word.audioExample}"></audio>
        </p>
        <p class="example-translation">${word.textExampleTranslate}</p>
      </div>
    </div>`;
  }
}

function toggleProp(el: HTMLElement) {
  if (el) {
    el.classList.toggle('active');
  }
}

function deactivateWordProp(el: HTMLImageElement) {
  const img = el;
  const learned = document.querySelector<HTMLImageElement>('.word-learned');
  const hard = document.querySelector<HTMLImageElement>('.word-hard');
  if (img === learned) img.src = '../../assets/images/textbook/tick.png';
  if (img === hard) img.src = '../../assets/images/textbook/star.png';
  img.classList.remove('active');
}

function chooseWordProp(el: HTMLImageElement) {
  const img = el;
  const learned = document.querySelector<HTMLImageElement>('.word-learned');
  const hard = document.querySelector<HTMLImageElement>('.word-hard');
  toggleProp(img);
  if (img === learned) {
    if (img.classList.contains('active')) {
      img.src = '../../assets/images/textbook/tick-filled.png';
      if (hard) deactivateWordProp(hard);
    } else {
      img.src = '../../assets/images/textbook/tick.png';
    }
  }
  if (img === hard) {
    if (img.classList.contains('active')) {
      img.src = '../../assets/images/textbook/star-filled.png';
      if (learned) deactivateWordProp(learned);
    } else {
      img.src = '../../assets/images/textbook/star.png';
    }
  }
}

function playAudio(btn: HTMLElement) {
  if (btn) {
    const id = btn.id.split('-').reverse()[0];
    document.querySelector<HTMLAudioElement>(`#audio-${id}`)?.play().then((res) => res).catch((e: Error) => e);
  }
}

// TODO: disable audio btns while playing

async function init() {
  await getCard();
  const wordProps = document.querySelector('.word-properties');
  wordProps?.addEventListener('click', (e) => chooseWordProp(e.target as HTMLImageElement));
  document.querySelectorAll('.audio-icon').forEach((icon) => {
    icon.addEventListener('click', (e) => playAudio(e.target as HTMLElement));
  });
}

init().then((res) => res).catch((e) => e as string);
