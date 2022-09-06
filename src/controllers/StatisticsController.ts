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

  // private correctTotal: number;

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
  }

  // async actionIndex() {
  //   this.userWords = await User.getUserWords();
  //   this.getUserStatistics();

  actionIndex() {
    const main = findHtmlElement(document, 'main');
    main.innerHTML = StatisticsView.draw(1, 2, 3, 4, 5, 6, 7, 8, this.learnedWords);
    StatisticsController.graphicNewWords(['01.09', '02.09', '03.09', '04.09', '05.09', '06.09'], [12, 19, 3, 5, 2, 3]);
    StatisticsController.graphicLearnedWords(['01.09', '02.09', '03.09', '04.09', '05.09', '06.09'], [1, 2, 3, 5, 7, 9]);
  }

  getUserStatistics() {
    const totalCountSprint = 0;
    const totalCorrectSprint = 0;
    this.userWords.forEach((userWord) => {
      if (userWord.difficulty === 'learned') this.learnedWords += 1;
      if (userWord.optional.newWord && StatisticsController.chechDate(userWord.optional.dateNew)) {
        this.newWords += 1;
      }
    });
    /*
    export interface IUserWord {
      difficulty: string;
      optional: {
        newWord: boolean,
        dateNew: number,
        dateLearned: number,
        streakAudio: number,
        streakSprint: number,
        totalCountAudiocall: number,
        totalCorrectAudiocall: number,
        totalCountSprint: number,
        totalCorrectSprint: number,
      },
      wordId?: string,
      id?: string,
    }
    */
  }

  static chechDate(date: number) {
    const checkDate = new Date(date);
    const now = new Date();
    return (
      checkDate.getFullYear() === now.getFullYear()
      && checkDate.getMonth() === now.getMonth()
      && checkDate.getDate() === now.getDate());
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
