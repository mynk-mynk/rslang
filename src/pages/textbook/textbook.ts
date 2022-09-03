import { server } from '../../../config';
import '../pages.css';
import '../pages';
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

class TextbookPage {
  // words: IWord[];

  // constructor(words: IWord[]) {
  //   this.words = words;
  // }

  static draw() {
    return `<div class="main-container">
    <h1>Учебник</h1>

    <div class="difficulty-container">
      <div class="difficulty-btn level1 active">1</div>
      <div class="difficulty-btn level2">2</div>
      <div class="difficulty-btn level3">3</div>
      <div class="difficulty-btn level4">4</div>
      <div class="difficulty-btn level5">5</div>
      <div class="difficulty-btn level6">6</div>
      <div class="difficulty-btn level7">7</div>
    </div>

    <div class="words-container"></div>

    <div class="pagination-container">
      <p class="pagination-first disabled"><<</p>
      <p class="pagination-prev disabled"><</p>
      <div class="pagination-current"><span id="page-number">1</span> / 30</div>
      <p class="pagination-next">></p>
      <p class="pagination-last">>></p>
    </div>

  </div>`;
  }
}

const main: HTMLElement | null = document.querySelector<HTMLElement>('main');
if (main) main.innerHTML = TextbookPage.draw();

const difficultyContainer = document.querySelector('.difficulty-container');

function activateProp(el: HTMLElement, selector: string) {
  if (el) {
    const elements = document.querySelectorAll(selector);
    elements?.forEach((element) => element.classList.remove('active'));
    el.classList.add('active');
  }
}

difficultyContainer?.addEventListener('click', (e) => activateProp(e.target as HTMLElement, '.difficulty-btn'));

async function getWords(group = 1, page = 1) {
  const url = server.getLocal() + `words?group=${group}&page=${page}`;
  const res = await fetch(url);
  const words = await res.json() as IWord[];
  return words;
}

function drawWordCard(word: IWord) {
  const wordContainer = document.createElement('div');
  wordContainer.classList.add('word-container');
  wordContainer.innerHTML = `<img class="word-img" src="${server.getLocal()}${word.image}" alt="">
  <div class="word-description">
    <div class="word-properties">
      <img class="word-learned" src="./assets/images/textbook/tick.png" alt="Learned" width="40">
      <img class="word-hard" src="./assets/images/textbook/star.png" alt="Hard" width="40">
        </div>
      <div class="word">
      <h2>${word.word}</h2>
      <p class="word-transcription">${word.transcription}</p>
      <img id="btn-${word.id}-word" src="./assets/svg/audio-speaker.svg" alt="Audio" class="audio-icon" width="20">
      <audio id="audio-${word.id}-word" src="${server.getLocal()}${word.audio}"></audio>
      <p class="word-translation">${word.wordTranslate}</p>
    </div>
    <div class="word-meaning">
      <p>
      ${word.textMeaning}
      <img id="btn-${word.id}-meaning" class="audio-icon" src="./assets/svg/audio-speaker.svg" alt="Audio" width="20">
        <audio id="audio-${word.id}-meaning" src="${server.getLocal()}${word.audioMeaning}"></audio>
      </p>
      <p class="meaning-translation">${word.textMeaningTranslate}</p>
    </div>
    <div class="word-example">
      <p>
      ${word.textExample}
      <img id="btn-${word.id}-example" class="audio-icon" src="./assets/svg/audio-speaker.svg" alt="Audio" width="20">
        <audio id="audio-${word.id}-example" src="${server.getLocal()}${word.audioExample}"></audio>
      </p>
      <p class="example-translation">${word.textExampleTranslate}</p>
    </div>
  </div>`;

  const words = document.querySelector('.words-container');
  words?.append(wordContainer);
}

function toggleProp(el: HTMLElement) {
  if (el) {
    el.classList.toggle('active');
  }
}

function deactivateWordProp(el: HTMLImageElement) {
  const img = el;
  const card = el.closest('.word-container');
  const learned = card?.querySelector<HTMLImageElement>('.word-learned');
  const hard = card?.querySelector<HTMLImageElement>('.word-hard');
  if (img === learned) img.src = './assets/images/textbook/tick.png';
  if (img === hard) img.src = './assets/images/textbook/star.png';
  img.classList.remove('active');
}

function chooseWordProp(el: HTMLImageElement) {
  const img = el;
  const card = el.closest('.word-container');
  const learned = card?.querySelector<HTMLImageElement>('.word-learned');
  const hard = card?.querySelector<HTMLImageElement>('.word-hard');
  toggleProp(img);
  if (img === learned) {
    if (img.classList.contains('active')) {
      img.src = './assets/images/textbook/tick-filled.png';
      if (hard) deactivateWordProp(hard);
    } else {
      img.src = './assets/images/textbook/tick.png';
    }
  }
  if (img === hard) {
    if (img.classList.contains('active')) {
      img.src = './assets/images/textbook/star-filled.png';
      if (learned) deactivateWordProp(learned);
    } else {
      img.src = './assets/images/textbook/star.png';
    }
  }
}

function playAudio(btn: HTMLElement) {
  if (btn) {
    const id = btn.id.split('-');
    document.querySelector<HTMLAudioElement>(`#audio-${id[1]}-${id[2]}`)?.play().then((res) => res).catch((e: Error) => e);
  }
}

// TODO: disable audio btns while playing

async function init() {
  const words = await getWords();
  words.forEach((word) => drawWordCard(word));
  const wordProps = document.querySelectorAll('.word-properties');
  wordProps.forEach((container) => {
    container.addEventListener('click', (e) => chooseWordProp(e.target as HTMLImageElement));
  });
  document.querySelectorAll('.audio-icon').forEach((icon) => {
    icon.addEventListener('click', (e) => playAudio(e.target as HTMLElement));
  });
}

init().then((res) => res).catch((e) => e as string);
