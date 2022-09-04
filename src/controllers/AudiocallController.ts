import { findHtmlElement } from '../common/utils/utils';
import { IWord, IWords } from '../common/interfaces/IWord';
import { IDataAudio } from '../common/interfaces/IDataAudio';
import config from '../config';
import Word from '../models/Word';
import AudiocallView from '../views/pages/audiocall/audiocall';
import { renderDifficultyBar } from '../views/components/difficulty-bar/difficulty-bar';
import App from '../models/App';
import { createPieChart } from '../views/components/pie-chart/pie-chart';
import User from '../models/User';

interface IUserWordtest {
  wordId: string
  id: string
  difficulty: 'learned';
    optional: {
    streak: 0
    newWord: true
    totalCount: 1
    totalCorrect: 2
}
}

class AudiocallController {

  app: App;
  data: IDataAudio
  testForTextbookClick: boolean
  testPage: number
  testGroup: number

  constructor(app: App) {
    this.app = app;
    this.testForTextbookClick = true;
    this.testPage = 0;
    this.testGroup = 5;
    // this.app.subscribeOnAuthChange(() => setHardWordsVisible(this.app.isAuth));

    this.data = {
      currentDifficulty: 0,
      data2: 'audiocall',
      wordsArr: [],
      currentWord: null,
      currentAnswers: [],
      answerMap: new Map(),
    };
  }

  // static mainContainer = findHtmlElement(document, 'main');
  // static startBtn = <HTMLButtonElement>document.querySelector('.start-btn');
  // static gameContainer = <HTMLElement>document.querySelector('.main-container-audiocall');
  // static difficultyContainer = document.querySelector('.difficulty-container');

  
  async actionIndex(page?: number, difficulty?: number, textBookClick?: boolean) {
    const mainContainer = findHtmlElement(document, 'main');
    mainContainer.innerHTML = '';

    //! this.textbookPage = page;   
    //! this.difficulty = 

  //   await User.updateUserWord('5e9f5ee35eb9e72bc21af4a1', {
  //     difficulty: 'learned',
  //     optional: {
  //     streak: 0,
  //     newWord: true,
  //     totalCount: 1,
  //     totalCorrect: 2,
  //   }
  // })

  mainContainer.insertAdjacentHTML('afterbegin', AudiocallView.renderAudiocallDescription());
  const gameContainer = <HTMLElement>document.querySelector('.main-container-audiocall');

    if(this.testForTextbookClick === true) {
      gameContainer.insertAdjacentHTML('beforeend', AudiocallView.renderStartBtn());
      (<HTMLButtonElement>document.querySelector('.start-btn')).disabled = false;
    }
    else {
      gameContainer.append(renderDifficultyBar());
      gameContainer.insertAdjacentHTML('beforeend', AudiocallView.renderStartBtn());

      const difficultyContainer = document.querySelector('.difficulty-container');
      difficultyContainer?.addEventListener('click', (e) => {
        this.activateProp(e.target as HTMLElement, '.difficulty-btn');
      });
    }
    
    this.startGame()
    // setHardWordsVisible(this.app.isAuth);
  }

   activateProp(el: HTMLElement, selector: string) {
    if (el) {
      const elements = document.querySelectorAll(selector);
      (<HTMLButtonElement>document.querySelector('.start-btn')).disabled = false;
      elements?.forEach((element) => element.classList.remove('active'));
      el.classList.add('active');
      
       //! btn
      this.data.currentDifficulty = Number(el.innerText) - 1;
    }
  }

   buttonPress() {
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

  removeLearnedUserWords(array1: IWord[], array2: IUserWordtest[]) {
    for(let i = 0; i < array1.length; i++) {
        for(let j = 0; j < array2.length; j++) {
            if(array1[i].id === array2[j].wordId && array2[j].difficulty === 'learned') {
              array1.splice(i, 1)
            }
        }
    }
    return false;
  }
  

   async generateWords() {

    const temporaryResult: IWords[] = [];
    if(this.testForTextbookClick === true) {  //! ПРОВЕРКА СДЕЛАН КЛИК С УЧЕБНИКА ИЛИ ПРОСТО
      if(this.app.isAuth === true) { //! ПРОВЕРКА НА ЛОГИН
          const userWords: IUserWordtest[] = await User.getUserWords()
        if(this.testGroup === 6) { //! ПРОВЕРКА ЕСЛИ КЛИК БЫЛ СДЕЛАН НА ГРУППЕ СО СЛОВАМИ ЮЗЕРА
          const userCustomWords: IWords = []
          for (let i = 0; i < userWords.length; i += 1) {
                const userWordId = userWords[i].wordId
                  const midRes: void | IWord = await Word.getWord(userWordId);
                if(midRes) {
                  userCustomWords.push(midRes);
                }
              }
          this.data.wordsArr = userCustomWords;
          this.removeLearnedUserWords(this.data.wordsArr, userWords)
        } else { //! ЕСЛИ НЕ 6 ГРУППА, ТО БЕРУТСЯ СЛОВА СО СТРАНИЦЫ И УДАЛЯЮТСЯ ИЗУЧЕННЫЕ
          const midRes: IWord[] = await Word.getWords(this.testPage, this.testGroup)
          this.data.wordsArr = midRes.flat();
          this.removeLearnedUserWords(this.data.wordsArr, userWords)
        } 
      } 
    } else { //! ЕСЛИ НЕ С УЧЕБНИКА, ТО БЕРУТСЯ ВСЕ СЛОВА 
        for (let i = 0; i < 30; i += 1) {
          const midRes: IWord[] = await Word.getWords(i, this.data.currentDifficulty)
          temporaryResult.push(midRes.flat());
        }
        this.data.wordsArr = temporaryResult.flat();
    }
  }

   wordsRandomizer() {
    this.data.currentWord = this.data.wordsArr[Math.floor(Math.random() * this.data.wordsArr.length)];
    const randomWord = () => this.data.wordsArr[Math.floor(Math.random() * this.data.wordsArr.length)];
    const randomArray: () => IWord[] = () => {
      const arr = [];
      for (let i = 0; i < 5; i += 1) {
        arr.push(randomWord());
      }
      return arr;
    };

    this.data.currentAnswers = randomArray();
    this.data.currentAnswers.splice(
      Math.floor(Math.random() * 5),
      1,
      this.data.currentWord,
    );
  }

  startGame() {
    const startBtn = <HTMLButtonElement>document.querySelector('.start-btn');
    const mainContainer = findHtmlElement(document, 'main');

  startBtn.onclick = async () => {
    startBtn.disabled = true;
    await this.generateWords();
    if(this.data.wordsArr.length < 5) {
      alert('Извините, у вас слишком мало слов')
    } else {
      this.wordsRandomizer();
      mainContainer.innerHTML = AudiocallView.renderQuestion(
      this.data.currentAnswers,
      this.data.currentWord,
    );
    (<HTMLAudioElement>(
      document.getElementById(`audio-word-${(<IWord>this.data.currentWord).word}`)
    )).play();
    this.checkAnswer();
    this.nextQuestion();
    this.buttonPress();
    (<HTMLImageElement>(
      document.querySelector('.audio-btn-img')
    )).addEventListener('click', (e) => this.playAudio(e.target as HTMLImageElement));
    }
    
  };
  }

 checkAnswer() {
  (<HTMLDivElement>document.querySelector('.btns-container-audiocall')).onclick = (
    e: Event,
  ) => {
    this.nextQuestion();
    this.buttonPress();
    const answerItems = [
      ...document.getElementsByClassName('answer-item'),
    ];
    if ((<HTMLElement>e.target).classList.contains('answer-item')) {
      const answerImage = document.querySelector('.sound-icon');
      (<HTMLImageElement>answerImage).src = `${config.api.url}${
        (<IWord>this.data.currentWord).image
      }`;
      (<HTMLParagraphElement>(
        document.querySelector('.current-word-answer')
      )).innerHTML = (<IWord>this.data.currentWord).word;
      if ((<HTMLElement>e.target).innerText.slice(3) === (<IWord>this.data.currentWord).wordTranslate) {
        (<HTMLButtonElement[]>answerItems).forEach((el) => el.setAttribute('disabled', 'true'));
        (<HTMLElement>e.target).insertAdjacentHTML(
          'beforebegin',
          AudiocallView.rightIcon(),
        );
        (<HTMLElement>e.target).classList.add('correct-answer');
        (<HTMLButtonElement>document.getElementById('btn-next')).disabled = false;
        this.data.answerMap.set(<IWord>this.data.currentWord, 'correct');
      } else {
        (<HTMLButtonElement[]>answerItems).forEach(
          (el) => el.setAttribute('disabled', 'true'),
        );
        (<HTMLButtonElement[]>answerItems).forEach((el) => {
          if (
            el.innerHTML.slice(3) === (<IWord>this.data.currentWord).wordTranslate
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
        this.data.answerMap.set(<IWord>this.data.currentWord, 'incorrect');
      }
    }
  };
  }

 nextQuestion() {
  const mainContainer = findHtmlElement(document, 'main');
  
  (<HTMLButtonElement>document.getElementById('btn-next')).onclick = () => {
    if (this.data.answerMap.size < 4) {
      this.wordsRandomizer();
      mainContainer.innerHTML = AudiocallView.renderQuestion(
        this.data.currentAnswers,
        this.data.currentWord,
      );

      (<HTMLAudioElement>(
        document.getElementById(`audio-word-${(<IWord>this.data.currentWord).word}`)
      )).play();
      (<HTMLImageElement>(
        document.querySelector('.audio-btn-img')
      )).addEventListener('click', (e) => this.playAudio(e.target as HTMLImageElement));
      this.checkAnswer();
      this.buttonPress();
    } else {
      mainContainer.innerHTML = '';
      const mapSort = new Map([...this.data.answerMap.entries()].sort());
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
      createPieChart(mapIncorrect.size, mapCorrect.size),
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
        icon.addEventListener('click', (e) => this.playAudio(e.target as HTMLElement));
      });
    }
  };
  }

 playAudio(btn: HTMLElement) {
    if (btn) {
      const id = btn.id.split('-').reverse()[0];
      (<HTMLAudioElement>document.getElementById(`audio-word-${id}`)).play();
    }
  }

}

export default AudiocallController;
