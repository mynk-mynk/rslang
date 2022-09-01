import { findHtmlElement } from '../common/utils/utils';
import SprintView from '../views/pages/sprint/sprint';
import { IDataSprint } from '../common/interfaces/IDataSprint';
import { renderDifficultyBar } from '../views/components/difficulty-bar/difficulty-bar';
import { IWord, IWords } from '../common/interfaces/IWord';
import Word from '../models/Word';

class SprintController {
  static actionIndex() {
    const data: IDataSprint = {
      currentDifficulty: 0,
      data2: 'audiocall',
      wordsArr: [],
      currentWord: null,
      currentTranslation: null,
      currentAnswers: [],
      pointsPerAnswer: 10,
      streak: 0,
      multiplier: 1,
      totalScore: 0,
      answerMap: new Map(),
    };

    const mainContainer = <HTMLElement>document.querySelector('main');

    mainContainer.innerHTML = renderDifficultyBar();

    mainContainer.insertAdjacentHTML('beforeend', SprintView.renderStartBtn());

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
        if (event.key === 'a') {
          (<HTMLButtonElement>document.getElementById('btn-true')).click();
        } else if (event.key === 'd') {
          (<HTMLButtonElement>document.getElementById('btn-false')).click();
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

    function wordsRandomizer() {
      data.currentWord = data.wordsArr[Math.floor(Math.random() * 601)];
      const randomWord = () => {
        return data.wordsArr[Math.floor(Math.random() * 601)];
      };
      const randomArray: () => IWord[] = () => {
        const arr = [];
        for (let i = 0; i < 2; i += 1) {
          arr.push(randomWord());
        }
        return arr;
      };

      data.currentAnswers = randomArray();
      data.currentAnswers.splice(
        Math.floor(Math.random() * 2),
        1,
        data.currentWord,
      );
      data.currentTranslation = data.currentAnswers[Math.round(Math.random())];
    }

    function increaseMultiplier() {
      data.streak += 1;
      data.answerMap.set(<IWord>data.currentWord, 'correct');
      data.totalScore += data.pointsPerAnswer * data.multiplier;
      if (data.streak === 3) {
        data.streak = 0;
        data.multiplier === 4
          ? (data.multiplier = 4)
          : (data.multiplier += 1);
        (<HTMLElement>(document.getElementById(`level-${data.multiplier}`))).style.display = 'block';
      }
    }

    function decreaseMultiplier() {
      data.streak = 0;
      data.answerMap.set(<IWord>data.currentWord, 'incorrect');
      if (data.multiplier === 1) {
        data.multiplier = 1;
      } else {
        (<HTMLElement>(document.getElementById(`level-${data.multiplier}`))).style.display = 'none';
        data.multiplier -= 1;
      }
    }

    startBtn.onclick = async () => {
      startBtn.disabled = true;
      await generateWords();
      wordsRandomizer();
      mainContainer.innerHTML = SprintView.renderGameContainer(data.totalScore);
      const questionContainer = <HTMLDivElement>document.querySelector('.questions-container');
      questionContainer.innerHTML = SprintView.renderQuestion(
        <IWord>data.currentWord,
        <IWord>data.currentTranslation,
        data.totalScore,
      );
      checkAnswer();
      buttonPress();
    };

    function checkAnswer() {
      const btnTrue = <HTMLButtonElement>document.getElementById('btn-true');
      const btnFalse = <HTMLButtonElement>document.getElementById('btn-false');
      btnTrue.onclick = () => {
        if (data.currentWord === data.currentTranslation) {
          increaseMultiplier();
        } else {
          decreaseMultiplier();
        }
        nextQuestion();
      };
      btnFalse.onclick = () => {
        if (data.currentWord !== data.currentTranslation) {
          increaseMultiplier();
        } else {
          decreaseMultiplier();
        }
        nextQuestion();
      };
    }

    function nextQuestion() {
      if (data.answerMap.size < 15) {
        wordsRandomizer();
        const questionContainer = <HTMLDivElement>document.querySelector('.questions-container');
        questionContainer.innerHTML = SprintView.renderQuestion(
          <IWord>data.currentWord,
          <IWord>data.currentTranslation,
          data.totalScore,
        );
        checkAnswer();
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
          SprintView.renderResults(),
        );
        mapCorrect.forEach((_, k) => {
          (<HTMLDivElement>(
            document.querySelector('.correct-results')
          )).insertAdjacentHTML(
            'beforeend',
            SprintView.renderCorrectResults(k),
          );
        });
        mapIncorrect.forEach((_, k) => {
          (<HTMLDivElement>(
            document.querySelector('.incorrect-results')
          )).insertAdjacentHTML(
            'beforeend',
            SprintView.renderIncorrectResults(k),
          );
        });
      }
    }
  }
}

export default SprintController;
