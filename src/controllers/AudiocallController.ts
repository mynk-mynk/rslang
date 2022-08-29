import { IWord, IWords } from '../common/interfaces/IWord';
import config from '../config';
import Word from '../models/Word';
import AudiocallView from '../views/pages/audiocall';

type IData = {
  data1: string;
  data2: string;
  data3: IWord[];
  data4: IWord | null;
};

class AudiocallController {
  static actionIndex() {
    const data: IData = {
      data1: '0',
      data2: 'audiocall',
      data3: [],
      data4: null,
    };
    (document.querySelector('main') as HTMLElement).innerHTML =
      AudiocallView.renderDifficulty();

    const startBtn = <HTMLButtonElement>document.querySelector('.start-btn');

    startBtn.onclick = async () => {
      const temporaryResult: IWord[] = [];

      for (let i = 0; i < 30; i += 1) {
        const midRes = await Word.getWords()
          .then((words) => {
            return words;
          })
          .catch((e) => console.log(e));
        temporaryResult.push(midRes.flat());
      }

      data.data3 = temporaryResult.flat();
      const curWord = data.data3[Math.floor(Math.random() * 601)];
      data.data4 = curWord;

      const randomWord = function () {
        return data.data3[Math.floor(Math.random() * 601)];
      };

      const answers = [
        randomWord().wordTranslate,
        randomWord().wordTranslate,
        randomWord().wordTranslate,
        randomWord().wordTranslate,
        randomWord().wordTranslate,
      ];
      answers.splice(
        Math.floor(Math.random() * 5),
        1,
        data.data4.wordTranslate
      );
      (document.querySelector('main') as HTMLElement).innerHTML =
        AudiocallView.renderQuestion(answers);

      (<HTMLDivElement>(
        document.querySelector('.btns-container')
      )).addEventListener('click', (e: Event) => {
        if ((<HTMLElement>e.target).classList.contains('answer-item')) {
          const answerImage = document.querySelector('.sound-icon');
          (<HTMLImageElement>(
            answerImage
          )).src = `${config.api.url}${data.data4.image}`;
          (<HTMLParagraphElement>(
            document.querySelector('.current-word-answer')
          )).innerHTML = data.data4.word;
        }
      });
    };
  }
}

export default AudiocallController;
