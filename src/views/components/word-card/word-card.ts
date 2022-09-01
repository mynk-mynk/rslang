import { IWord } from '../../../common/interfaces/IWord';
import config from '../../../config';
import './word-card.css';

export function renderWordCard(word: IWord) {
  const wordContainer = document.createElement('div');
  wordContainer.classList.add('word-container');
  wordContainer.innerHTML = `<img class="textbook-word-img" src="${config.api.url}${word.image}" alt="${word.word} image">
  <div class="word-description">
    <div class="word-properties">
      <img class="word-learned" src="../../../assets/images/textbook/tick-filled.png" alt="Learned" width="40">
      <img class="word-hard" src="../../../assets/images/textbook/star-filled.png" alt="Hard" width="40">
        </div>
      <div class="word">
      <h2>${word.word}</h2>
      <p class="word-transcription">${word.transcription}</p>
      <img id="btn-${word.id}-word" src="../../../assets/svg/audio-speaker.svg" alt="Audio" class="audio-icon" width="20">
      <audio id="audio-${word.id}-word" src="${config.api.url}${word.audio}"></audio>
      <p class="word-translation">${word.wordTranslate}</p>
    </div>
    <div class="word-meaning">
      <p>
      ${word.textMeaning}
      <img id="btn-${word.id}-meaning" class="audio-icon" src="../../../assets/svg/audio-speaker.svg" alt="Audio" width="20">
        <audio id="audio-${word.id}-meaning" src="${config.api.url}${word.audioMeaning}"></audio>
      </p>
      <p class="meaning-translation">${word.textMeaningTranslate}</p>
    </div>
    <div class="word-example">
      <p>
      ${word.textExample}
      <img id="btn-${word.id}-example" class="audio-icon" src="../../../assets/svg/audio-speaker.svg" alt="Audio" width="20">
        <audio id="audio-${word.id}-example" src="${config.api.url}${word.audioExample}"></audio>
      </p>
      <p class="example-translation">${word.textExampleTranslate}</p>
    </div>
  </div>`;
  return wordContainer;
}

export function chooseWordProp(el: HTMLImageElement) {
  const img = el;
  const card = el.closest('.word-container');
  const learned = card?.querySelector<HTMLImageElement>('.word-learned');
  const hard = card?.querySelector<HTMLImageElement>('.word-hard');
  img.classList.toggle('active');
  if (img === learned) {
    if (img.classList.contains('active')) {
      if (hard) hard.classList.remove('active');
    }
  }
  if (img === hard) {
    if (img.classList.contains('active')) {
      if (learned) learned.classList.remove('active');
    }
  }
}

export function playAudio(btn: HTMLElement) {
  if (btn) {
    const id = btn.id.split('-');
    document.querySelector<HTMLAudioElement>(`#audio-${id[1]}-${id[2]}`)?.play().then((res) => res).catch((e: Error) => e);
  }
}
