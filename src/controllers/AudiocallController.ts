import { IWord, IWords } from '../common/interfaces/IWord';
import config from '../config';
import Word from '../models/Word';
import AudiocallView from '../views/pages/audiocall';

type IData = {
  data1: string;
  data2: string;
  wordsArr: IWord[];
  currentWord: IWord | null;
  currentAnswers: string[];
  answerMap: Map<IWord, string>;
};

class AudiocallController {
  static actionIndex() {
    const data: IData = {
      data1: '0',
      data2: 'audiocall',
      wordsArr: [],
      currentWord: null,
      currentAnswers: [],
      answerMap: new Map(),
    };
    (document.querySelector('main') as HTMLElement).innerHTML =
      AudiocallView.renderDifficulty();

    const startBtn = <HTMLButtonElement>document.querySelector('.start-btn');

    //!GENERATING ARRAY WITH CURRENT GROUP WORDS
    async function getWords() {
      const temporaryResult: IWord[] = [];

      for (let i = 0; i < 30; i += 1) {
        const midRes = await Word.getWords()
          .then((words) => {
            return words;
          })
          .catch((e) => console.log(e));
        temporaryResult.push(midRes.flat());
      }
      data.wordsArr = temporaryResult.flat();
    }
    //!GENERATING RANDOM ARRAY AND INSERTING 1 CORRECT ANSWER
    function wordsRandomizer() {
      data.currentWord = data.wordsArr[Math.floor(Math.random() * 601)];
      const randomWord = function () {
        return data.wordsArr[Math.floor(Math.random() * 601)];
      };
      const randomArray: () => string[] = function () {
        let arr = [];
        for (let i = 0; i < 5; i++) {
          arr.push(randomWord().wordTranslate);
        }
        return arr;
      };

      data.currentAnswers = randomArray();
      data.currentAnswers.splice(
        Math.floor(Math.random() * 5),
        1,
        data.currentWord.wordTranslate
      );
    }

    startBtn.onclick = async () => {
      await getWords();
      wordsRandomizer();

      (document.querySelector('main') as HTMLElement).innerHTML =
        AudiocallView.renderQuestion(data.currentAnswers);
      checkAnswer();
      nextQuestion();
    };

    //! TRACKING ANSWER
    function checkAnswer() {
      (<HTMLDivElement>document.querySelector('.btns-container')).onclick = (
        e: Event
      ) => {
        nextQuestion();
        console.log('ne rabotaet');
        if ((<HTMLElement>e.target).classList.contains('answer-item')) {
          //! CHANGING THE IMAGE OF THE ANSWER
          const answerImage = document.querySelector('.sound-icon');
          (<HTMLImageElement>(
            answerImage
          )).src = `${config.api.url}${data.currentWord.image}`;
          //! CHANGING DEFAULT WORD TO ANSWER
          (<HTMLParagraphElement>(
            document.querySelector('.current-word-answer')
          )).innerHTML = data.currentWord.word;
          //! CHECKING IF ANSWER IS CORRECT AND ADDING CORRECT ICON
          if (
            (<HTMLElement>e.target).innerText.slice(3) ===
            data.currentWord.wordTranslate
          ) {
            const answerItems = [
              ...document.getElementsByClassName('answer-item'),
            ];
            //!DISABLING ALL ANSWER BUTTONS
            (<HTMLButtonElement[]>answerItems).forEach(
              (el) => (el.disabled = true)
            );
            (<HTMLElement>e.target).insertAdjacentHTML(
              'beforebegin',
              AudiocallView.rightIcon()
            );
            //!ACTIVATING NEXT BUTTON
            (<HTMLButtonElement>document.getElementById('btn-next')).disabled =
              false;

            data.answerMap.set(data.currentWord, 'correct');
            console.log(data.answerMap);
          }
          //! CONDITIONS WHEN WRONG BUTTON IS CLICKED
          else {
            const answerItems = [
              ...document.getElementsByClassName('answer-item'),
            ];
            (<HTMLButtonElement[]>answerItems).forEach(
              (el) => (el.disabled = true)
            );
            (<HTMLButtonElement[]>answerItems).forEach((el) => {
              if (el.innerHTML.slice(3) === data.currentWord.wordTranslate) {
                el.insertAdjacentHTML('beforebegin', AudiocallView.rightIcon());
              }
            });
            (<HTMLElement>e.target).insertAdjacentHTML(
              'beforebegin',
              AudiocallView.wrongIcon()
            );
            (<HTMLButtonElement>document.getElementById('btn-next')).disabled =
              false;
            data.answerMap.set(data.currentWord, 'incorrect');
          }
        }
      };
    }

    //! NEXT BUTTON
    function nextQuestion() {
      (<HTMLButtonElement>document.getElementById('btn-next')).onclick = () => {
        if (data.answerMap.size < 4) {
          (document.querySelector('main') as HTMLElement).innerHTML =
            AudiocallView.renderQuestion(data.currentAnswers);
          checkAnswer();
          wordsRandomizer();
          console.log(data.currentWord);
        }
      };
    }
  }
}

export default AudiocallController;
