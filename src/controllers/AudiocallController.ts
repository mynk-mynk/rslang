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
  difficulty: string;
    optional: {
    streak: number
    newWord: boolean
    totalCountAudiocall: number
    totalCorrectAudiocall: number
}
}

class AudiocallController {

  app: App;

  data: IDataAudio;

  constructor(app: App) {
    this.app = app;
    // this.app.subscribeOnAuthChange(() => setHardWordsVisible(this.app.isAuth));

    this.data = {
      textbookClick: true,
      currentDifficulty: 0,
      currentPage: 1,
      data2: 'audiocall',
      wordsArr: [],
      currentWord: null,
      currentAnswers: [],
      answerMap: new Map(),
      maxStreak: 0,
    };
  }

  async actionIndex(page?: number, difficulty?: number, textBookClick?: boolean) {
    const mainContainer = findHtmlElement(document, 'main');
    mainContainer.innerHTML = '';

    if (page && difficulty && textBookClick) {
      this.data.currentPage = page;
      this.data.currentDifficulty = difficulty;
      this.data.textbookClick = textBookClick;
    }
    //   await User.updateUserWord('5e9f5ee35eb9e72bc21af4ba', {
    //     difficulty: 'hard',
    //     optional: {
    //     streak: 0,
    //     newWord: true,
    //     totalCount: 0,
    //     totalCorrect: 0,
    //   }
    // })

    mainContainer.insertAdjacentHTML('afterbegin', AudiocallView.renderAudiocallDescription());
    const gameContainer = <HTMLElement>document.querySelector('.main-container-audiocall');

    if (this.data.textbookClick === true) {
      gameContainer.insertAdjacentHTML('beforeend', AudiocallView.renderStartBtn());
      (<HTMLButtonElement>document.querySelector('.start-btn')).disabled = false;
    } else {
      gameContainer.append(renderDifficultyBar());
      gameContainer.insertAdjacentHTML('beforeend', AudiocallView.renderStartBtn());

      const difficultyContainer = document.querySelector('.difficulty-container');
      difficultyContainer?.addEventListener('click', (e) => {
        this.activateProp(e.target as HTMLElement, '.difficulty-btn');
      });
    }

    this.startGame();
    // setHardWordsVisible(this.app.isAuth);
  }

  activateProp(el: HTMLElement, selector: string) {
    if (el) {
      const elements = document.querySelectorAll(selector);
      (<HTMLButtonElement>document.querySelector('.start-btn')).disabled = false;
      elements?.forEach((element) => element.classList.remove('active'));
      el.classList.add('active');
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
    for (let i = 0; i < array1.length; i += 1) {
      for (let j = 0; j < array2.length; j += 1) {
        if (array1[i].id === array2[j].wordId && array2[j].difficulty === 'learned') {
          array1.splice(i, 1);
        }
      }
    }
    return false;
  }

  async generateWords() {
    const temporaryResult: IWords[] = [];
    if (this.data.textbookClick === true) {
      if (this.app.isAuth === true) {
        const userWords: IUserWordtest[] = await User.getUserWords();
        if (this.data.currentPage === 6) {
          const userCustomWords: IWords = [];
          for (let i = 0; i < userWords.length; i += 1) {
            const userWordId = userWords[i].wordId;
            const midRes: void | IWord = await Word.getWord(userWordId);
            if (midRes) {
              userCustomWords.push(midRes);
            }
          }
          this.data.wordsArr = userCustomWords;
          // this.removeLearnedUserWords(this.data.wordsArr, userWords);
        } else {
          const midRes: IWord[] = await Word.getWords(this.data.currentPage, this.data.currentDifficulty);
          this.data.wordsArr = midRes.flat();
          this.removeLearnedUserWords(this.data.wordsArr, userWords);
        }
      }
    } else {
      for (let i = 0; i < 30; i += 1) {
        const midRes: IWord[] = await Word.getWords(i, this.data.currentDifficulty);
        temporaryResult.push(midRes.flat());
      }
      this.data.wordsArr = temporaryResult.flat();
      
    }
  }

  wordsRandomizer() {
    this.data.currentWord = this.data.wordsArr[Math.floor(Math.random() * this.data.wordsArr.length)];
    const random = this.data.wordsArr.sort(() => .5 - Math.random()).slice(0, 5);
    if (random.includes(this.data.currentWord)) {
      this.wordsRandomizer();
    } else {
      this.data.currentAnswers = random;
      this.data.currentAnswers.splice(
        Math.floor(Math.random() * 5),
        1,
        this.data.currentWord,
      );
    }
  }

  startGame() {
    const startBtn = <HTMLButtonElement>document.querySelector('.start-btn');
    const mainContainer = findHtmlElement(document, 'main');

    startBtn.onclick = async () => {
      startBtn.disabled = true;
      await this.generateWords();
      if (this.data.wordsArr.length <= 5) {
        alert('Извините, у вас слишком мало слов');
      } else {
        this.wordsRandomizer();
        mainContainer.innerHTML = AudiocallView.renderQuestion(
          this.data.currentAnswers,
          this.data.currentWord,
        );
        (<HTMLAudioElement>(
            document.getElementById(`audio-word-${(<IWord> this.data.currentWord).word}`)
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
          (<IWord> this.data.currentWord).image
        }`;
        (<HTMLParagraphElement>(
          document.querySelector('.current-word-answer')
        )).innerHTML = (<IWord>this.data.currentWord).word;
        if ((<HTMLElement>e.target).innerText.slice(3) === (<IWord> this.data.currentWord).wordTranslate) {
          (<HTMLButtonElement[]>answerItems).forEach((el) => el.setAttribute('disabled', 'true'));
          (<HTMLElement>e.target).insertAdjacentHTML(
            'beforebegin',
            AudiocallView.rightIcon(),
          );
          (<HTMLElement>e.target).classList.add('correct-answer');
          (<HTMLButtonElement>document.getElementById('btn-next')).disabled = false;
          this.data.answerMap.set(<IWord> this.data.currentWord, 'correct');
        } else {
          (<HTMLButtonElement[]>answerItems).forEach(
            (el) => el.setAttribute('disabled', 'true'),
          );
          (<HTMLButtonElement[]>answerItems).forEach((el) => {
            if (
              el.innerHTML.slice(3) === (<IWord> this.data.currentWord).wordTranslate
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
          this.data.answerMap.set(<IWord> this.data.currentWord, 'incorrect');
        }
      }
    };
  }

  questionHandler() {
    const mainContainer = findHtmlElement(document, 'main');
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
  }

  nextQuestion() {
    (<HTMLButtonElement>document.getElementById('btn-next')).onclick = async () => {
      if (this.data.answerMap.size < 10) {
        const currentWordIndex: number = this.data.wordsArr.indexOf(<IWord> this.data.currentWord);
        this.data.wordsArr.splice(currentWordIndex, 1);

        if (this.data.wordsArr.length <= 5) {
          if (this.data.currentPage - 1 === -1) {
            this.finishGame();
          } else {
            this.data.currentPage -= 1;
            await this.generateWords();
            this.questionHandler();
          }
        } else {
          this.questionHandler();
        }
      } else {
        this.finishGame();
      }
    };
  }

  playAudio(btn: HTMLElement) {
    if (btn) {
      const id = btn.id.split('-').reverse()[0];
      (<HTMLAudioElement>document.getElementById(`audio-word-${id}`)).play();
    }
  }

  finishGame() {
    const mainContainer = findHtmlElement(document, 'main');

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
    createPieChart(mapIncorrect.size, mapCorrect.size);
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

   console.log(this.data.answerMap);  

    this.countBestStreak()
    this.prepareGameStatistics(this.data.answerMap.size, mapCorrect.size / mapSort.size, this.data.maxStreak)
    this.updateUserWords()

    document.querySelectorAll('.audiocall-audio-icon').forEach((icon) => {
      icon.addEventListener('click', (e) => this.playAudio(e.target as HTMLElement));
    });
  }

  async updateUserWords() {
    const userWords = await User.getUserWords()
    console.log(userWords);

    function checkAnswerMap(array1: Map<IWord, string>, array2: IUserWordtest[]) {
      array1.forEach((val, result) => {
        for (let j = 0; j < array2.length; j += 1) {
          if (result.id === array2[j].wordId) {
            User.updateUserWord(array2[j].wordId, {
              difficulty: `${array2[j].optional.streak >= 3 ? array2[j].difficulty = 'learned' : array2[j].difficulty = 'hard'}`,
              optional: {
                streak: +(`${val === 'correct' ? array2[j].optional.streak += 1 : array2[j].optional.streak = 0}`),
                newWord: false,
                totalCountAudiocall: array2[j].optional.totalCountAudiocall += 1,
                totalCorrectAudiocall: +(`${val === 'correct' ? array2[j].optional.totalCorrectAudiocall += 1 : array2[j].optional.totalCorrectAudiocall += 0}`),
            }
          })
          } 
          else {
              User.createUserWord(result.id, {
                difficulty: 'okay',
                optional: {
                  streak: 1,
                  newWord: false,
                  totalCountAudiocall: 1,
                  totalCorrectAudiocall: 1,
                }
              })
              // User.createUserWord(result.id, {
              //   difficulty: ``,
              //   optional: {
              //     streak: +(`${val === 'correct' ? 1 : 0}`),
              //     newWord: false,
              //     totalCountAudiocall: 1,
              //     totalCorrectAudiocall: +(`${val === 'correct' ? 1 : 0}`),
              //   }
              // })
            }
          }
        }
      
      )
      return false;
    }

    checkAnswerMap(this.data.answerMap, userWords)

  }

  countBestStreak() {
    let counter = 0;
    let streak = 0;
    this.data.answerMap.forEach((k, _) => { k === 'correct' ? counter += 1 : counter = 0;
    if (counter > streak) streak = counter;
  }) 
    this.data.maxStreak = streak;
  }

  prepareGameStatistics(total: number, percentage: number, streak: number) {
    if(!localStorage.getItem('AudiocallGameTotal') && !localStorage.getItem('AudiocallCorrectPercentage') && !localStorage.getItem('AudiocallGameStreak')) {
      this.saveResults(total, percentage, streak)
    } else {
      const audiocallTotal = JSON.parse(<string>localStorage.getItem('AudiocallGameTotal'));
      const audiocallCorrectPercentage = JSON.parse(<string>localStorage.getItem('AudiocallCorrectPercentage'));
      const audiocallStreak = JSON.parse(<string>localStorage.getItem('AudiocallGameStreak'));

      localStorage.setItem('AudiocallGameTotal', JSON.stringify(audiocallTotal + total));
      localStorage.setItem('AudiocallCorrectPercentage', JSON.stringify((audiocallCorrectPercentage + percentage) / 2))
      localStorage.setItem('AudiocallGameStreak', JSON.stringify(audiocallStreak > streak ? audiocallStreak : streak));
    }
  }

  saveResults(total: number, percentage: number, streak: number) {
    localStorage.setItem('AudiocallGameTotal', JSON.stringify(total))
    localStorage.setItem('AudiocallCorrectPercentage', JSON.stringify(percentage))
    localStorage.setItem('AudiocallGameStreak', JSON.stringify(streak))
  }

  getResults() {
    const totalScore = JSON.parse(<string>localStorage.getItem('AudiocallGameTotal')); 
    const correctPercentage = JSON.parse(<string>localStorage.getItem('AudiocallCorrectPercentage')); 
    const gameStreak = (JSON.parse(<string>localStorage.getItem('AudiocallGameStreak'))); 
  }
}

export default AudiocallController;
