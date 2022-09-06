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
import { IUserWord } from '../common/interfaces/IUserWord';

class AudiocallController {

  app: App;

  data: IDataAudio;

  constructor(app: App) {
    this.app = app;
    // this.app.subscribeOnAuthChange(() => setHardWordsVisible(this.app.isAuth));

    this.data = {
      textbookClick: false,
      curGroup: 0,
      curPage: 0,
      data2: 'audiocall',
      wordsArr: [],
      curWord: null,
      curAnswers: [],
      answerMap: new Map(),
      maxStreak: 0,
    };
  }

  actionIndex(page?: number, difficulty?: number, textBookClick?: boolean) {
    const mainContainer = findHtmlElement(document, 'main');
    mainContainer.innerHTML = '';
    if (page && difficulty && textBookClick) {
      this.data.curPage = page;
      this.data.curGroup = difficulty;
      this.data.textbookClick = textBookClick;
    }
    this.data.answerMap.clear();

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
      this.data.curGroup = Number(el.innerText) - 1;
    }
  }

  buttonPress() {
    document.addEventListener('keypress', this.buttonPressHandler);
  }

  buttonPressRemove() {
    document.removeEventListener('keypress', this.buttonPressHandler);
  }

  buttonPressHandler(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      (<HTMLButtonElement>document.getElementById('btn-next')).click();
    } else {
      (<HTMLButtonElement>(
        document.querySelector(`.answer${event.key}`)
      )).click();
    }
  }

  removeLearnedUserWords(array1: IWord[], array2: IUserWord[]) {
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
        const userWords = <IUserWord[]> await User.getUserWords();
        if (this.data.curGroup === 6) {
          const userCustomWords: IWords = [];
          for (let i = 0; i < userWords.length; i += 1) {
            const userWordId = <string> userWords[i].wordId;
            const midRes = <IWord> await Word.getWord(userWordId);
            if (midRes) {
              userCustomWords.push(midRes);
            }
          }
          this.data.wordsArr = userCustomWords;
        } else {
          const midRes = <IWord[]> await Word.getWords(
            <number> this.data.curPage,
            <number> this.data.curGroup,
          );
          this.data.wordsArr = midRes.flat();
          this.removeLearnedUserWords(this.data.wordsArr, userWords);
        }
      } else {
        const midRes = <IWord[]> await Word.getWords(
          <number> this.data.curPage,
          <number> this.data.curGroup,
        );
        this.data.wordsArr = midRes.flat();
      }
    } else {
      for (let i = 0; i < 30; i += 1) {
        const midRes = <IWord[]> await Word.getWords(i, <number> this.data.curGroup);
        temporaryResult.push(midRes.flat());
      }
      this.data.wordsArr = temporaryResult.flat();
    }
  }

  wordsRandomizer() {
    this.data.curWord = this.data.wordsArr[Math.floor(Math.random() * this.data.wordsArr.length)];
    const random = this.data.wordsArr.sort(() => 0.5 - Math.random()).slice(0, 5);
    if (random.includes(<IWord> this.data.curWord)) {
      this.wordsRandomizer();
    } else {
      this.data.curAnswers = random;
      <IWords> this.data.curAnswers.splice(
        Math.floor(Math.random() * 5),
        1,
        <IWord> this.data.curWord,
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
        (<HTMLHeadingElement>document.querySelector('.insufficient-words-message')).style.visibility = 'visible';
      } else {
        this.wordsRandomizer();
        mainContainer.innerHTML = AudiocallView.renderQuestion(
          <IWord[]> this.data.curAnswers,
          <IWord> this.data.curWord,
        );
        (<HTMLAudioElement>(
            document.getElementById(`audio-word-${(<IWord> this.data.curWord).word}`)
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
      const answerItems = [
        ...document.getElementsByClassName('answer-item'),
      ];
      if ((<HTMLElement>e.target).classList.contains('answer-item')) {
        const answerImage = document.querySelector('.sound-icon');
        (<HTMLImageElement>answerImage).src = `${config.api.url}${
          (<IWord> this.data.curWord).image
        }`;
        (<HTMLParagraphElement>(
          document.querySelector('.current-word-answer')
        )).innerHTML = (<IWord> this.data.curWord).word;
        if ((<HTMLElement>e.target).innerText.slice(3) === (<IWord> this.data.curWord)
          .wordTranslate) {
          (<HTMLButtonElement[]>answerItems).forEach((el) => el.setAttribute('disabled', 'true'));
          (<HTMLElement>e.target).insertAdjacentHTML(
            'beforebegin',
            AudiocallView.rightIcon(),
          );
          (<HTMLElement>e.target).classList.add('correct-answer');
          (<HTMLButtonElement>document.getElementById('btn-next')).disabled = false;
          this.data.answerMap.set(<IWord> this.data.curWord, 'correct');
        } else {
          (<HTMLButtonElement[]>answerItems).forEach(
            (el) => el.setAttribute('disabled', 'true'),
          );
          (<HTMLButtonElement[]>answerItems).forEach((el) => {
            if (
              el.innerHTML.slice(3) === (<IWord> this.data.curWord).wordTranslate
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
          this.data.answerMap.set(<IWord> this.data.curWord, 'incorrect');
        }
      }
    };
  }

  questionHandler() {
    const mainContainer = findHtmlElement(document, 'main');
    this.wordsRandomizer();
    mainContainer.innerHTML = AudiocallView.renderQuestion(
      <IWord[]> this.data.curAnswers,
      <IWord> this.data.curWord,
    );

    (<HTMLAudioElement>(
      document.getElementById(`audio-word-${(<IWord> this.data.curWord).word}`)
    )).play();
    (<HTMLImageElement>(
      document.querySelector('.audio-btn-img')
    )).addEventListener('click', (e) => this.playAudio(e.target as HTMLImageElement));
    this.checkAnswer();
    this.buttonPress();
  }

  nextQuestion() {
    (<HTMLButtonElement>document.getElementById('btn-next')).onclick = async () => {
      if (this.data.answerMap.size < 20) {
        const currentWordIndex: number = this.data.wordsArr.indexOf(<IWord> this.data.curWord);
        this.data.wordsArr.splice(currentWordIndex, 1);
        if (this.data.wordsArr.length <= 5) {
          if (this.data.curPage - 1 === -1) {
            this.finishGame();
          } else {
            this.data.curPage -= 1;
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
    this.buttonPressRemove();
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
    this.countBestStreak();
    this.prepareGameStatistics(
      this.data.answerMap.size,
      mapCorrect.size / mapSort.size,
      <number> this.data.maxStreak,
    );
    this.updateUserWords();

    document.querySelectorAll('.audiocall-audio-icon').forEach((icon) => {
      icon.addEventListener('click', (e) => this.playAudio(e.target as HTMLElement));
    });
  }

  async deleteUserWords() {
    const userWords = <IUserWord[]> await User.getUserWords();
    userWords.forEach((el: IUserWord) => User.deleteUserWord(<string>el.wordId));
  }

  async updateUserWords() {
    const userWords = <IUserWord[]> await User.getUserWords();
    function checkAnswerMap(array1: Map<IWord, string>, array2: IUserWord[]) {
      const array2Id = array2.map((el) => <string> el.wordId);
      let totalStreakAudio = 0;
      let tempStreakAudio = 0;
      array1.forEach((val, result) => {
        if (val === 'correct') {
          tempStreakAudio += 1;
        } else {
          tempStreakAudio = 0;
        }
        totalStreakAudio = tempStreakAudio > totalStreakAudio ? tempStreakAudio : totalStreakAudio;
        if (array2.length > 0) {
          if (array2Id.includes(result.id)) {
            const newIds = array2.filter((el) => el.wordId === result.id);
            let learnDate = 0;
            if (newIds[0].optional.streakAudio === 3) {
              learnDate = Date.now();
            }

            User.updateUserWord(<string>newIds[0].wordId, {
              difficulty: `${newIds[0].optional.streakAudio >= 3 ? 'learned' : newIds[0].difficulty}`,
              optional: {
                newWord: false,
                dateNew: newIds[0].optional.dateNew,
                dateLearned: learnDate ? learnDate : newIds[0].optional.dateLearned,
                newInGame: newIds[0].optional.newInGame,
                streakAudio: +(`${val === 'correct' ? newIds[0].optional.streakAudio += 1 : 0}`),
                streakSprint: newIds[0].optional.streakSprint,
                totalCountAudiocall: newIds[0].optional.totalCountAudiocall += 1,
                totalCorrectAudiocall: +(`${val === 'correct' ? newIds[0].optional.totalCorrectAudiocall += 1 : newIds[0].optional.totalCorrectAudiocall}`),
                totalCountSprint: +(`${val === 'correct' ? newIds[0].optional.totalCorrectAudiocall += 1 : newIds[0].optional.totalCorrectAudiocall}`),
                totalCorrectSprint: newIds[0].optional.totalCorrectSprint,
                totalStreakAudio,
              },
            });
          } else {
            User.createUserWord(result.id, {
              difficulty: 'none',
              optional: {
                newWord: true,
                dateNew: Date.now(),
                dateLearned: 0,
                newInGame: 'audiocall',
                streakAudio: +(`${val === 'correct' ? 1 : 0}`),
                streakSprint: 0,
                totalCountAudiocall: 1,
                totalCorrectAudiocall: +(`${val === 'correct' ? 1 : 0}`),
                totalCountSprint: 0,
                totalCorrectSprint: 0,
                totalStreakAudio,
              },
            });
          }
        } else {
          User.createUserWord(result.id, {
            difficulty: 'none',
            optional: {
              newWord: true,
              dateNew: Date.now(),
              dateLearned: 0,
              newInGame: 'audiocall',
              streakAudio: +(`${val === 'correct' ? 1 : 0}`),
              streakSprint: 0,
              totalCountAudiocall: 1,
              totalCorrectAudiocall: +(`${val === 'correct' ? 1 : 0}`),
              totalCountSprint: 0,
              totalCorrectSprint: 0,
              totalStreakAudio,
            },
          });
        }
      });
    }
    checkAnswerMap(this.data.answerMap, userWords);
  }

  countBestStreak() {
    let counter = 0;
    let streak = 0;
    this.data.answerMap.forEach((k, _) => {
      k === 'correct' ? counter += 1 : counter = 0;
      if (counter > streak) streak = counter;
    });
    this.data.maxStreak = streak;
  }

  prepareGameStatistics(total: number, percentage: number, streak: number) {
    if (!localStorage.getItem('AudiocallGameTotal') && !localStorage.getItem('AudiocallCorrectPercentage') && !localStorage.getItem('AudiocallGameStreak')) {
      this.saveResults(total, percentage, streak);
    } else {
      const audiocallTotal = <number> JSON.parse(<string>localStorage.getItem('AudiocallGameTotal'));
      const audiocallCorrectPercentage = <number> JSON.parse(<string>localStorage.getItem('AudiocallCorrectPercentage'));
      const audiocallStreak = <number> JSON.parse(<string>localStorage.getItem('AudiocallGameStreak'));

      localStorage.setItem('AudiocallGameTotal', JSON.stringify(audiocallTotal + total));
      localStorage.setItem('AudiocallCorrectPercentage', JSON.stringify((audiocallCorrectPercentage + percentage) / 2));
      localStorage.setItem('AudiocallGameStreak', JSON.stringify(audiocallStreak > streak ? audiocallStreak : streak));
    }
  }

  saveResults(total: number, percentage: number, streak: number) {
    localStorage.setItem('AudiocallGameTotal', JSON.stringify(total));
    localStorage.setItem('AudiocallCorrectPercentage', JSON.stringify(percentage));
    localStorage.setItem('AudiocallGameStreak', JSON.stringify(streak));
  }

  getResults() {
    const totalScore = <number> JSON.parse(<string>localStorage.getItem('AudiocallGameTotal'));
    const correctPercentage = <number> JSON.parse(<string>localStorage.getItem('AudiocallCorrectPercentage'));
    const gameStreak = <number> JSON.parse(<string>localStorage.getItem('AudiocallGameStreak'));
  }
}

export default AudiocallController;
