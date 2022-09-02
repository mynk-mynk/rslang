import { findHtmlElement, showBurgerMenu } from '../common/utils/utils';
import { IWord, IWords } from '../common/interfaces/IWord';
import { IDataAudio } from '../common/interfaces/IDataAudio';
import config from '../config';
import Word from '../models/Word';
import AudiocallView from '../views/pages/audiocall/audiocall';
import { renderDifficultyBar } from '../views/components/difficulty-bar/difficulty-bar';

class AudiocallController {
  static actionIndex() {
      const data: IDataAudio = {
      currentDifficulty: 0,
      data2: 'audiocall',
      wordsArr: [],
      currentWord: null,
      currentAnswers: [],
      answerMap: new Map(),
    };

    showBurgerMenu();
    const mainContainer = findHtmlElement(document, 'main');

    mainContainer.innerHTML = '';
    mainContainer.insertAdjacentHTML('afterbegin', AudiocallView.renderAudiocallDescription());
    const gameContainer = <HTMLElement>document.querySelector('.main-container-audiocall')
    gameContainer.append(renderDifficultyBar());
    gameContainer.insertAdjacentHTML('beforeend', AudiocallView.renderStartBtn());

    const startBtn = <HTMLButtonElement>document.querySelector('.start-btn');

    const difficultyContainer = document.querySelector('.difficulty-container');

    function activateProp(el: HTMLElement, selector: string) {
      if (el) {
        const elements = document.querySelectorAll(selector);
        elements?.forEach((element) => element.classList.remove('active'));
        el.classList.add('active');
        startBtn.disabled = false;
        data.currentDifficulty = Number(el.innerText) - 1;
      }
    }

    difficultyContainer?.addEventListener('click', (e) => {
      activateProp(e.target as HTMLElement, '.difficulty-btn');
    });

    function buttonPress() {
      document.addEventListener('keypress', (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
          (<HTMLButtonElement>document.getElementById('btn-next')).click();
        } else {
          (<HTMLButtonElement>(
            document.querySelector(`.answer${event.key}`)
          )).click();
        }
      });
    }

    async function generateWords() {
      const temporaryResult: IWords[] = [];

      for (let i = 0; i < 30; i += 1) {
        const midRes: IWord[] = await Word.getWords(i, data.currentDifficulty)
          .then((words) => words)
          .catch((e) => console.log(e));
        temporaryResult.push(midRes.flat());
      }
      data.wordsArr = temporaryResult.flat();
    }

    function playAudio(btn: HTMLElement) {
      if (btn) {
        const id = btn.id.split('-').reverse()[0];
        (<HTMLAudioElement>document.getElementById(`audio-word-${id}`)).play();
      }
    }

    function wordsRandomizer() {
      data.currentWord = data.wordsArr[Math.floor(Math.random() * 601)];
      const randomWord = () => data.wordsArr[Math.floor(Math.random() * 601)];
      const randomArray: () => string[] = () => {
        const arr = [];
        for (let i = 0; i < 5; i += 1) {
          arr.push(randomWord().wordTranslate);
        }
        return arr;
      };

      data.currentAnswers = randomArray();
      data.currentAnswers.splice(
        Math.floor(Math.random() * 5),
        1,
        data.currentWord.wordTranslate,
      );
    }

    startBtn.onclick = async () => {
      startBtn.disabled = true;
      await generateWords();
      wordsRandomizer();

      mainContainer.innerHTML = AudiocallView.renderQuestion(
        data.currentAnswers,
        data.currentWord,
      );

      (<HTMLAudioElement>(
        document.getElementById(`audio-word-${(<IWord>data.currentWord).word}`)
      )).play();
      checkAnswer();
      nextQuestion();
      buttonPress();
      (<HTMLImageElement>(
        document.querySelector('.audio-btn-img')
      )).addEventListener('click', (e) => playAudio(e.target as HTMLImageElement));
    };

    function checkAnswer() {
      (<HTMLDivElement>document.querySelector('.btns-container-audiocall')).onclick = (
        e: Event,
      ) => {
        nextQuestion();
        buttonPress();
        const answerItems = [
          ...document.getElementsByClassName('answer-item'),
        ];
        if ((<HTMLElement>e.target).classList.contains('answer-item')) {
          const answerImage = document.querySelector('.sound-icon');
          (<HTMLImageElement>answerImage).src = `${config.api.url}${
            (<IWord>data.currentWord).image
          }`;
          (<HTMLParagraphElement>(
            document.querySelector('.current-word-answer')
          )).innerHTML = (<IWord>data.currentWord).word;
          if ((<HTMLElement>e.target).innerText.slice(3) === (<IWord>data.currentWord).wordTranslate) {
            (<HTMLButtonElement[]>answerItems).forEach((el) => el.setAttribute('disabled', 'true'));
            (<HTMLElement>e.target).insertAdjacentHTML(
              'beforebegin',
              AudiocallView.rightIcon(),
            );
            (<HTMLElement>e.target).classList.add('correct-answer');
            (<HTMLButtonElement>document.getElementById('btn-next')).disabled = false;
            data.answerMap.set(<IWord>data.currentWord, 'correct');
          } else {
            (<HTMLButtonElement[]>answerItems).forEach(
              (el) => el.setAttribute('disabled', 'true'),
            );
            (<HTMLButtonElement[]>answerItems).forEach((el) => {
              if (
                el.innerHTML.slice(3) === (<IWord>data.currentWord).wordTranslate
              ) {
                el.insertAdjacentHTML('beforebegin', AudiocallView.rightIcon());
                (<HTMLElement>el).classList.add('correct-answer');
              }
            });
            (<HTMLElement>e.target).insertAdjacentHTML(
              'beforebegin',
              AudiocallView.wrongIcon(),
            );
            (<HTMLElement>e.target).classList.add('wrong-answer');
            (<HTMLButtonElement>document.getElementById('btn-next')).disabled = false;
            data.answerMap.set(<IWord>data.currentWord, 'incorrect');
          }
        }
      };
    }

    function nextQuestion() {
      (<HTMLButtonElement>document.getElementById('btn-next')).onclick = () => {
        if (data.answerMap.size < 4) {
          wordsRandomizer();
          mainContainer.innerHTML = AudiocallView.renderQuestion(
            data.currentAnswers,
            data.currentWord,
          );

          (<HTMLAudioElement>(
            document.getElementById(`audio-word-${(<IWord>data.currentWord).word}`)
          )).play();
          (<HTMLImageElement>(
            document.querySelector('.audio-btn-img')
          )).addEventListener('click', (e) => playAudio(e.target as HTMLImageElement));
          checkAnswer();
          buttonPress();
        } else {
          mainContainer.innerHTML = '';
          const mapSort = new Map([...data.answerMap.entries()].sort());
          const mapCorrect = new Map(
            [...mapSort].filter(([_, v]) => v === 'correct'),
          );
          const mapIncorrect = new Map(
            [...mapSort].filter(([_, v]) => v === 'incorrect'),
          );
          mainContainer.insertAdjacentHTML(
            'afterbegin',
            AudiocallView.renderResults(
              mapCorrect.size,
              mapIncorrect.size,
              mapIncorrect.size === 0 ? 100 : +((mapCorrect.size / mapSort.size) * 100).toFixed(0),
            ),
          );
          mapCorrect.forEach((_, k) => {
            (<HTMLDivElement>(
              document.querySelector('.correct-results')
            )).insertAdjacentHTML(
              'beforeend',
              AudiocallView.renderCorrectResults(k),
            );
          });
          mapIncorrect.forEach((_, k) => {
            (<HTMLDivElement>(
              document.querySelector('.incorrect-results')
            )).insertAdjacentHTML(
              'beforeend',
              AudiocallView.renderIncorrectResults(k),
            );
          });
          document.querySelectorAll('.audiocall-audio-icon').forEach((icon) => {
            icon.addEventListener('click', (e) => playAudio(e.target as HTMLElement));
          });
        }
      };
    }
  }
}

export default AudiocallController;
