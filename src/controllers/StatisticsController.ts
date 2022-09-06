import Chart from 'chart.js/auto';
import { IUserWord } from '../common/interfaces/IUserWord';
import { findHtmlElement } from '../common/utils/utils';
import App from '../models/App';
import User from '../models/User';
import StatisticsView from '../views/pages/statistics/statistics';

class StatisticsController {
  private userWords: IUserWord[];

  private app: App;

  private learnedWords: number;

  private newSprint: number;

  private correctSprint: number;

  private streakSprint: number;

  private newAudio: number;

  private correctAudio: number;

  private streakAudio: number;

  private newWords: number;

  private correctTotal: number;

  private newWordsDates: string[];

  private newWordsCounts: number[];

  private learnedWordsDates: string[];

  private learnedWordsCounts: number[];

  constructor(app: App) {
    this.app = app;
    this.userWords = [];
    this.learnedWords = 0;
    this.newWords = 0;

    this.newSprint = 0;
    this.correctSprint = 0;
    this.streakSprint = 0;
    this.newAudio = 0;
    this.correctAudio = 0;
    this.streakAudio = 0;
    this.correctTotal = 0;

    this.newWordsDates = [];
    this.newWordsCounts = [];

    this.learnedWordsDates = [];
    this.learnedWordsCounts = [];
  }

  async actionIndex() {
    this.userWords = await User.getUserWords();
    this.learnedWords = 0;
    this.newWords = 0;
    this.newSprint = 0;
    this.correctSprint = 0;
    this.streakSprint = 0;
    this.newAudio = 0;
    this.correctAudio = 0;
    this.streakAudio = 0;
    this.correctTotal = 0;
    this.newWordsDates = [];
    this.newWordsCounts = [];
    this.learnedWordsDates = [];
    this.learnedWordsCounts = [];

    this.getUserStatistics();
    const main = findHtmlElement(document, 'main');
    main.innerHTML = StatisticsView.draw(this.newSprint, Math.round(this.correctSprint), 3, this.newAudio, Math.round(this.correctAudio), 6, this.newWords, Math.round(this.correctTotal), this.learnedWords);
    StatisticsController.graphicNewWords(this.newWordsDates, this.newWordsCounts);
    // ['01.09', '02.09', '03.09', '04.09', '05.09', '06.09'], [12, 19, 3, 5, 2, 3]);
    StatisticsController.graphicLearnedWords(this.learnedWordsDates, this.learnedWordsCounts);
    // ['01.09', '02.09', '03.09', '04.09', '05.09', '06.09'], [1, 2, 3, 5, 7, 9]);
  }

  getUserStatistics() {
    let totalCountSprint = 0;
    let totalCorrectSprint = 0;
    let totalCountAudio = 0;
    let totalCorrectAudio = 0;
    this.userWords.forEach((userWord) => {
      if (userWord.difficulty === 'learned') this.learnedWords += 1;
      if (userWord.optional.newWord && StatisticsController.chechDate(userWord.optional.dateNew)) {
        this.newWords += 1;
        if (userWord.optional.newInGame === 'audiocall') this.newAudio += 1;
        if (userWord.optional.newInGame === 'sprint') this.newSprint += 1;
      }

      if (userWord.optional.totalCountSprint) console.log(userWord);
      totalCountSprint += userWord.optional.totalCountSprint;
      totalCorrectSprint += userWord.optional.totalCorrectSprint;
      totalCountAudio += userWord.optional.totalCountAudiocall;
      totalCorrectAudio += userWord.optional.totalCorrectAudiocall;

      const dateNew = userWord.optional.dateNew
        ? StatisticsController.getDateFormat(userWord.optional.dateNew) : null;
      if (dateNew && !this.newWordsDates.includes(dateNew)) {
        this.newWordsDates.push(dateNew);
        this.newWordsCounts.push(1);
      } else if (dateNew && this.newWordsDates.includes(dateNew)) {
        const i = this.newWordsDates.indexOf(dateNew);
        if (this.newWordsDates[i] === dateNew) this.newWordsCounts[i] += 1;
      }

      const dateLearned = userWord.optional.dateLearned
        ? StatisticsController.getDateFormat(userWord.optional.dateLearned) : null;
      if (dateLearned && !this.learnedWordsDates.includes(dateLearned)) {
        this.learnedWordsDates.push(dateLearned);
        this.learnedWordsCounts.push(1);
      } else if (dateLearned && this.learnedWordsDates.includes(dateLearned)) {
        const i = this.learnedWordsDates.indexOf(dateLearned);
        if (this.learnedWordsDates[i] === dateLearned) this.learnedWordsCounts[i] += 1;
      }
    });

    this.correctTotal = (totalCorrectSprint + totalCorrectAudio)
      / (totalCountSprint + totalCountAudio);
    if (!this.correctTotal) this.correctTotal = 0;
    this.correctTotal *= 100;

    this.correctSprint = totalCorrectSprint / totalCountSprint * 100;
    this.correctAudio = totalCorrectAudio / totalCountAudio * 100;

    this.learnedWordsCounts = this.learnedWordsCounts.map((val, index, array) => {
      for (let i = 0; i < index; i += 1) {
        val += array[i];
      }
      return val;
    });
  }

  private static chechDate(date: number) {
    const checkDate = new Date(date);
    const now = new Date();
    return (
      checkDate.getFullYear() === now.getFullYear()
      && checkDate.getMonth() === now.getMonth()
      && checkDate.getDate() === now.getDate());
  }

  private static getDateFormat(d: number) {
    const date = new Date(d);
    const getDate = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate().toString();
    const getMonth = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : (date.getMonth() + 1).toString();
    return `${getDate}.${getMonth}.${date.getFullYear().toString().slice(2)}`;
  }

  static graphicNewWords(lab: string[] = [], newWords: number[] = []) {
    const graphic = new Chart(document.getElementById('graphicNewWords') as HTMLCanvasElement, {
      type: 'bar',
      data: {
        labels: lab,
        datasets: [{
          label: '',
          data: newWords,
          backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
          ],
        }],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: 'Количество новых слов за день',
            font: {
              family: 'Comfortaa',
              size: 30,
              lineHeight: 2,
            },
            color: '#181f4a',
          },
        },
      },
    });
  }

  static graphicLearnedWords(lab: string[] = [], learnedWords: number[] = []) {
    const graphic = new Chart(document.getElementById('graphicLearnedWords') as HTMLCanvasElement, {
      type: 'line',
      data: {
        labels: lab,
        datasets: [{
          label: '',
          data: learnedWords,
          backgroundColor: 'rgba(175, 139, 208, 0.6)',
          borderColor: 'rgba(175, 139, 208, 1)',
          fill: true,
        }],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: 'Количество изученных слов',
            font: {
              family: 'Comfortaa',
              size: 30,
              lineHeight: 2,
            },
            color: '#181f4a',
          },
        },
      },
    });
  }
}

export default StatisticsController;
