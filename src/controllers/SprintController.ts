import Chart, { ChartType } from 'chart.js/auto';
import { findHtmlElement, showBurgerMenu } from '../common/utils/utils';
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
    mainContainer.innerHTML = '';
    mainContainer.insertAdjacentHTML('afterbegin', SprintView.renderSprintDescription());
    const gameContainer = <HTMLElement>document.querySelector('.main-container-sprint');
    gameContainer.append(renderDifficultyBar());
    gameContainer.insertAdjacentHTML('beforeend', SprintView.renderStartBtn());

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

    function countdown(minutes: number) {
      let seconds = 60;
      const mins = minutes;
      function tick() {
        const counter = document.getElementById('timer-container');
        const currentMinutes = mins - 1;
        seconds -= 1;
        (<HTMLDivElement>counter).innerHTML = `${currentMinutes.toString()}:${(seconds < 10 ? '0' : '')}${String(seconds)}`;
        if (seconds > 0) {
          setTimeout(tick, 1000);
        } else if (mins > 1) {
          countdown(mins - 1);
        }
      }
      tick();
    }

    function createPieChart(incorrect: number, correct: number) {
      const labels = [
        'Ошибка',
        'Правильно',
      ];

      const pieColors = ['#ff6969', '#00a249'];
      const pieResultsData = {
        labels,
        datasets: [{
          label: 'Результаты игры',
          backgroundColor: pieColors,
          borderColor: 'var(--color)',
          data: [incorrect, correct],
          borderAlign: 'inner',
          borderWidth: 1,
        }],
      };

      const chartConfig = {
        type: <ChartType>'pie',
        data: pieResultsData,
        options: {
          responsive: true,
          responsiveAnimationDuration: 3000,
          plugins: {
            legend: {
              position: 'top' as const,
            },
            title: {
              display: true,
              text: 'Результаты игры',
            },
          },
        },
      };
      const myChart = new Chart(
        <HTMLCanvasElement>document.getElementById('sprint-results-chart'),
        chartConfig,
      );
    }

    function checkGameEnd() {
      let timerId = setTimeout(function gameEnd() {
        const counter = document.getElementById('timer-container');
        if (counter?.innerHTML === '0:111') {
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
            SprintView.renderResults(
              mapCorrect.size,
              mapIncorrect.size,
              mapIncorrect.size === 0 ? 100 : +((mapCorrect.size / mapSort.size) * 100).toFixed(0),
            ),
          );
          createPieChart(mapIncorrect.size, mapCorrect.size);
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
          document.querySelectorAll('.sprint-audio-icon').forEach((icon) => {
            icon.addEventListener('click', (e) => playAudio(e.target as HTMLElement));
          });
        }
        timerId = setTimeout(gameEnd, 1000);
      }, 1000);
    }

    function buttonPress() {
      const btnTrue = <HTMLDivElement>document.getElementById('btn-true');
      const btnFalse = <HTMLDivElement>document.getElementById('btn-false');
      document.addEventListener('keydown', (event: KeyboardEvent) => {
        if (event.key === '1') {
          btnTrue.click();
          btnTrue.classList.add('sprint-active')
        } else if (event.key === '2') {
          btnFalse.click();
          btnFalse.classList.add('sprint-active')
        }
      });
      document.addEventListener('keyup', (event: KeyboardEvent) => {
        if (event.key === '1') {
          btnTrue.classList.remove('sprint-active')
        } else if (event.key === '2') {
          btnFalse.classList.remove('sprint-active')
        }
      });

    }

    async function generateWords() {
      const temporaryResult: IWords[] = [];
      for (let i = 0; i < 30; i += 1) {
        const midRes: IWords = await Word.getWords(i, data.currentDifficulty)
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

    function changeStreakColor(color: string) {
      document.querySelectorAll('.streak-mark').forEach((el) => el.setAttribute('style', `background:${color}`));
    }

    function increaseMultiplier() {
      if (data.streak === 3 && data.multiplier === 4) {
        data.streak = 3;
      } else if (data.streak === 3 && data.multiplier < 4) {
        data.streak = 0;
        changeStreakColor('var(--color)');
        data.streak += 1;
      } else {
        data.streak += 1;
      }
      data.answerMap.set(<IWord>data.currentWord, 'correct');
      data.totalScore += data.pointsPerAnswer;
      (<HTMLElement>document.getElementById(`${data.streak}-correct-answer`)).style.background = '#00a249';

      if (data.streak === 3) {
        data.pointsPerAnswer < 80 ? data.pointsPerAnswer *= 2 : data.pointsPerAnswer = 80;
        changeStreakColor('#00a249');
        data.multiplier === 4 ? (data.multiplier = 4) : (data.multiplier += 1);
        (<HTMLElement>(document.getElementById(`level-${data.multiplier}`))).style.visibility = 'visible';
      }
    }

    function decreaseMultiplier() {
      data.streak = 0;
      (<HTMLImageElement>document.querySelector('.answer-icon-image')).src = 'wrong';
      (<HTMLImageElement>document.querySelector('.answer-icon-image')).style.visibility = 'visible';
      changeStreakColor('var(--color)');
      data.answerMap.set(<IWord>data.currentWord, 'incorrect');
      data.pointsPerAnswer > 10 ? data.pointsPerAnswer /= 2 : data.pointsPerAnswer = 10;
      if (data.multiplier === 1) {
        data.multiplier = 1;
      } else {
        (<HTMLElement>(document.getElementById(`level-${data.multiplier}`))).style.visibility = 'hidden';
        data.multiplier -= 1;
      }
    }

    function playAudio(btn: HTMLElement) {
      if (btn) {
        const id = btn.id.split('-').reverse()[0];
        (<HTMLAudioElement>document.getElementById(`audio-word-${id}`)).play().then((res) => res).catch((e: Error) => e);
      }
    }

    startBtn.onclick = async () => {
      startBtn.disabled = true;
      await generateWords();
      wordsRandomizer();
      mainContainer.innerHTML = SprintView.renderGameContainer();
      const questionContainer = <HTMLDivElement>document.querySelector('.word-props');
      questionContainer.innerHTML = SprintView.renderQuestion(
        <IWord>data.currentWord,
        <IWord>data.currentTranslation,
        data.totalScore,
        'right',
      );
      const scoresContainer = <HTMLDivElement>document.querySelector('.answers');
      scoresContainer.innerHTML = SprintView.renderScores(data.totalScore, data.pointsPerAnswer);
      checkAnswer();
      buttonPress();
      countdown(1);
      checkGameEnd();
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
      wordsRandomizer();
      const questionContainer = <HTMLDivElement>document.querySelector('.word-props');
      questionContainer.innerHTML = SprintView.renderQuestion(
        <IWord>data.currentWord,
        <IWord>data.currentTranslation,
        data.totalScore,
        'right',
      );
      const scoresContainer = <HTMLDivElement>document.querySelector('.answers');
      scoresContainer.innerHTML = SprintView.renderScores(data.totalScore, data.pointsPerAnswer);
      checkAnswer();
    }
  }
}

export default SprintController;
