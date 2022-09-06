import { findHtmlElement, showBurgerMenu } from '../common/utils/utils';
import SprintView from '../views/pages/sprint/sprint';
import { IDataSprint } from '../common/interfaces/IDataSprint';
import { renderDifficultyBar, setHardWordsVisible } from '../views/components/difficulty-bar/difficulty-bar';
import { IWord, IWords } from '../common/interfaces/IWord';
import Word from '../models/Word';
import App from '../models/App';
import { createPieChart } from '../views/components/pie-chart/pie-chart';
import { IUserWord } from '../common/interfaces/IUserWord';
import User from '../models/User';
import AudiocallController from './AudiocallController';
import { setWordPropsVisible } from '../views/components/word-card/word-card';

class SprintController {
  app: App;

  data: IDataSprint;

  timer: number | null;

  constructor(app: App) {
    this.app = app;
    this.timer = null;

    this.app.subscribeOnAuthChange(() => {
      setHardWordsVisible(this.app.isAuth);
      setWordPropsVisible(this.app.isAuth);
    });

    this.data = {
      textbookClick: false,
      curGroup: 0,
      curPage: 0,
      wordsArr: [],
      curWord: null,
      curTranslation: null,
      curAnswers: [],
      pointsPerAnswer: 10,
      curStreak: 0,
      multiplier: 1,
      totalScore: 0,
      answerMap: new Map(),
      maxStreak: 0,
    };
  }

  removeRandomListeners() {
    window.addEventListener('keyup', function (e) {
      if (e.key === '1' || e.key === '2' || e.key === '3' || e.key === '4' || e.key === '5' || e.key === 'Enter'){
        e.stopImmediatePropagation();
      }
    }, true);
  }

  actionIndex(page?: number, difficulty?: number, textBookClick?: boolean) {
    this.removeRandomListeners();
    const mainContainer = <HTMLElement>document.querySelector('main');
    mainContainer.innerHTML = '';

    if (page && difficulty && textBookClick) {
      this.data.curPage = page;
      this.data.curGroup = difficulty;
      this.data.textbookClick = textBookClick;
    }

    this.data.answerMap.clear();
    this.data.wordsArr = [];
    this.data.totalScore = 0;
    this.data.curStreak = 0;
    this.data.pointsPerAnswer = 10;
    this.data.multiplier = 1;

    mainContainer.insertAdjacentHTML('afterbegin', SprintView.renderSprintDescription());

    const gameContainer = <HTMLElement>document.querySelector('.main-container-sprint');

    if (this.data.textbookClick === true) {
      gameContainer.insertAdjacentHTML('beforeend', SprintView.renderStartBtn());
      (<HTMLButtonElement>document.querySelector('.start-btn')).disabled = false;
    } else {
      gameContainer.append(renderDifficultyBar());
      setHardWordsVisible(this.app.isAuth);
      gameContainer.insertAdjacentHTML('beforeend', SprintView.renderStartBtn());

      const difficultyContainer = document.querySelector('.difficulty-container');
      difficultyContainer?.addEventListener('click', (e) => {
        this.activateProp(e.target as HTMLElement, '.difficulty-btn');
      });
    }
    this.startGame();
  }

  startGame() {
    const startBtn = <HTMLButtonElement>document.querySelector('.start-btn');
    const mainContainer = findHtmlElement(document, 'main');

    startBtn.onclick = async () => {
      startBtn.disabled = true;
      await this.generateWords();
      if (this.data.wordsArr.length <= 2) {
        (<HTMLHeadingElement>document.querySelector('.insufficient-words-message')).style.visibility = 'visible';
      } else {
        this.wordsRandomizer();
        mainContainer.innerHTML = SprintView.renderGameContainer();
        const questionContainer = <HTMLDivElement>document.querySelector('.word-props');
        questionContainer.innerHTML = SprintView.renderQuestion(
        <IWord> this.data.curWord,
        <IWord> this.data.curTranslation,
        );
        questionContainer.insertAdjacentHTML('afterend', SprintView.renderAnswerCorrectIcon());
        const scoresContainer = <HTMLDivElement>document.querySelector('.answers');
        scoresContainer.innerHTML = SprintView.renderScores(
          this.data.totalScore,
          this.data.pointsPerAnswer,
        );
        this.checkAnswer();
        this.buttonPress();
        this.countdown(1);
        this.checkGameEndTimer();
      }
    };
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
            this.data.curPage,
            this.data.curGroup,
          );
          for (let i = 0; i < midRes.length; i += 1) {
            this.data.wordsArr.push(midRes[i]);
          }

          this.removeLearnedUserWords(this.data.wordsArr, userWords);
        }
      } else {
        const midRes = <IWord[]> await Word.getWords(
          this.data.curPage,
          this.data.curGroup,
        );
        for (let i = 0; i < midRes.length; i += 1) {
          this.data.wordsArr.push(midRes[i]);
        }
      }
    } else {
      for (let i = 0; i < 30; i += 1) {
        const midRes = <IWord[]> await Word.getWords(i, this.data.curGroup);
        temporaryResult.push(midRes.flat());
      }
      this.data.wordsArr = temporaryResult.flat();
    }
  }

  wordsRandomizer() {
    this.data.curWord = this.data.wordsArr[Math.floor(Math.random() * this.data.wordsArr.length)];
    const random = this.data.wordsArr.sort(() => 0.5 - Math.random()).slice(0, 2);
    if (random.includes(this.data.curWord) && random.length >= 2) {
      this.wordsRandomizer();
    } else {
      this.data.curAnswers = random;
      <IWords> this.data.curAnswers.splice(
        Math.floor(Math.random() * 2),
        1,
        this.data.curWord,
      );
      this.data.curTranslation = this.data.curAnswers[Math.round(Math.random())];
    }
  }

  countdown(minutes: number) {
    let seconds = 60;
    const mins = minutes;
    function tick() {
      const counter = document.getElementById('timer-container');
      if (!counter) { return; }
      const currentMinutes = mins - 1;
      seconds -= 1;
      (<HTMLDivElement>counter).innerHTML = `${currentMinutes.toString()}:${(seconds < 10 ? '0' : '')}${String(seconds)}`;
      if (seconds > 0) {
        setTimeout(tick, 1000);
      }
    }
    tick();
  }

  changeStreakColor(color: string) {
    document.querySelectorAll('.streak-mark').forEach((el) => el.setAttribute('style', `background:${color}`));
  }

  decreaseMultiplier() {
    this.data.curStreak = 0;
    this.showAnswerIcon('wrong');
    this.changeStreakColor('var(--color)');
    this.data.answerMap.set(<IWord> this.data.curWord, 'incorrect');
    this.data.pointsPerAnswer > 10
      ? this.data.pointsPerAnswer /= 2 : this.data.pointsPerAnswer = 10;

    if (this.data.multiplier === 1) {
      this.data.multiplier = 1;
    } else {
      (<HTMLElement>(document.getElementById(`level-${this.data.multiplier}`))).style.visibility = 'hidden';
      this.data.multiplier -= 1;
    }
  }

  increaseMultiplier() {
    this.showAnswerIcon('right');
    if (this.data.curStreak === 3 && this.data.multiplier === 4) {
      this.data.curStreak = 3;
    } else if (this.data.curStreak === 3 && this.data.multiplier < 4) {
      this.data.curStreak = 0;
      this.changeStreakColor('var(--color)');
      this.data.curStreak += 1;
    } else {
      this.data.curStreak += 1;
    }
    this.data.answerMap.set(<IWord> this.data.curWord, 'correct');
    this.data.totalScore += this.data.pointsPerAnswer;
    (<HTMLElement>document.getElementById(`${this.data.curStreak}-correct-answer`)).style.background = '#00a249';

    if (this.data.curStreak === 3) {
      this.data.pointsPerAnswer < 80
        ? this.data.pointsPerAnswer *= 2 : this.data.pointsPerAnswer = 80;
      this.changeStreakColor('#00a249');
      this.data.multiplier === 4 ? (this.data.multiplier = 4) : (this.data.multiplier += 1);
      (<HTMLElement>(document.getElementById(`level-${this.data.multiplier}`))).style.visibility = 'visible';
    }
  }

  async checkGameEndHandler() {
    const counter = document.getElementById('timer-container');
    if (counter?.innerHTML !== '0:00') {
      if (this.data.wordsArr.length <= 2) {
        if (this.data.curPage - 1 === -1) {
          if (this.timer) clearInterval(this.timer);
          this.finishGame();
        } else {
          this.data.curPage -= 1;
          await this.generateWords();
          this.nextQuestion();
        }
      }
    } else {
      if (this.timer) clearInterval(this.timer);
      this.finishGame();
    }
  }

  checkGameEndTimer() {
    const timerId: number = window.setInterval(() => this.checkGameEndHandler(), 1000);
    this.timer = timerId;
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
      SprintView.renderResults(
        mapCorrect.size,
        mapIncorrect.size,
        mapIncorrect.size === 0 ? 100 : +((mapCorrect.size / mapSort.size) * 100).toFixed(0),
      ),
    );
    createPieChart(mapIncorrect.size, mapCorrect.size, 'sprint');
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
      icon.addEventListener('click', (e) => this.playAudio(e.target as HTMLElement));
    });

    this.countBestStreak();
    this.prepareGameStatistics(
      this.data.answerMap.size,
      mapCorrect.size / mapSort.size,
      this.data.maxStreak,
    );
    this.updateUserWords();
  }

  showAnswerIcon(answer: string) {
    const answerImageIcon = (<HTMLImageElement>document.querySelector('.answer-icon-image'));
    answerImageIcon.src = `./assets/images/${answer}-icon.png`;
    answerImageIcon.style.visibility = 'visible';
  }

  checkAnswer() {
    const btnTrue = <HTMLButtonElement>document.getElementById('btn-true');
    const btnFalse = <HTMLButtonElement>document.getElementById('btn-false');

    btnTrue.onclick = () => {
      const currentWordIndex: number = this.data.wordsArr.indexOf(<IWord> this.data.curWord);
      this.data.wordsArr.splice(currentWordIndex, 1);
      if (this.data.curWord === this.data.curTranslation) {
        this.increaseMultiplier();
      } else {
        this.decreaseMultiplier();
      }
      if (this.data.wordsArr.length <= 2) {
        return;
      } else {
        this.nextQuestion();
      }
    };
    btnFalse.onclick = () => {
      const currentWordIndex: number = this.data.wordsArr.indexOf(<IWord> this.data.curWord);
      this.data.wordsArr.splice(currentWordIndex, 1);
      if (this.data.curWord !== this.data.curTranslation) {
        this.increaseMultiplier();
      } else {
        this.decreaseMultiplier();
      }
      if (this.data.wordsArr.length <= 2) {
        return;
      } else {
        this.nextQuestion();
      }
    };
  }

  hideAnswerImageIcon() {
    const answerImageIcon = (<HTMLImageElement>document.querySelector('.answer-icon-image'));
    answerImageIcon.style.visibility = 'hidden';
  }

  nextQuestion() {
    this.wordsRandomizer();
    const questionContainer = <HTMLDivElement>document.querySelector('.word-props');
    questionContainer.innerHTML = SprintView.renderQuestion(
      <IWord> this.data.curWord,
      <IWord> this.data.curTranslation,
    );
    const scoresContainer = <HTMLDivElement>document.querySelector('.answers');
    scoresContainer.innerHTML = SprintView.renderScores(
      this.data.totalScore,
      this.data.pointsPerAnswer,
    );
    this.checkAnswer();
  }

  async deleteUserWords() {
    const userWords = <IUserWord[]> await User.getUserWords();
    if (userWords) userWords.forEach((el: IUserWord) => User.deleteUserWord(<string>el.wordId));
  }

  async updateUserWords() {
    const userWords = <IUserWord[]> await User.getUserWords();
    function checkAnswerMap(array1: Map<IWord, string>, array2: IUserWord[]) {
      const array2Id = array2.map((el) => <string> el.wordId);
      let totalStreakSprint = 0;
      let tempStreakSprint = 0;
      array1.forEach((val, result) => {
        if (val === 'correct') {
          tempStreakSprint += 1;
        } else {
          tempStreakSprint = 0;
        }
        totalStreakSprint = tempStreakSprint > totalStreakSprint ? tempStreakSprint : totalStreakSprint;
        if (array2.length > 0) {
          if (array2Id.includes(result.id)) {
            const newIds = array2.filter((el) => el.wordId === result.id);
            let learnDate = 0;
            if (newIds[0].optional.streakSprint === 3) {
              learnDate = Date.now();
            }

            User.updateUserWord(<string>newIds[0].wordId, {
              difficulty: `${newIds[0].optional.streakSprint >= 3 ? 'learned' : newIds[0].difficulty}`,
              optional: {
                newWord: false,
                dateNew: newIds[0].optional.dateNew,
                dateLearned: learnDate ? learnDate : newIds[0].optional.dateLearned,
                newInGame: newIds[0].optional.newInGame,
                streakAudio: newIds[0].optional.streakAudio,
                streakSprint: +(`${val === 'correct' ? newIds[0].optional.streakSprint += 1 : 0}`),
                totalCountAudiocall: newIds[0].optional.totalCountAudiocall,
                totalCorrectAudiocall: newIds[0].optional.totalCorrectAudiocall,
                totalCountSprint: newIds[0].optional.totalCountSprint += 1,
                totalCorrectSprint: +(`${val === 'correct' ? newIds[0].optional.totalCorrectSprint += 1 : newIds[0].optional.totalCorrectSprint}`),
                totalStreakAudio: newIds[0].optional.totalStreakAudio,
                totalStreakSprint,
              },
            });
          } else {
            User.createUserWord(result.id, {
              difficulty: 'none',
              optional: {
                newWord: true,
                dateNew: Date.now(),
                dateLearned: 0,
                newInGame: 'sprint',
                streakAudio: 0,
                streakSprint: +(`${val === 'correct' ? 1 : 0}`),
                totalCountAudiocall: 0,
                totalCorrectAudiocall: 0,
                totalCountSprint: 1,
                totalCorrectSprint: +(`${val === 'correct' ? 1 : 0}`),
                totalStreakAudio: 0,
                totalStreakSprint,
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
              newInGame: 'sprint',
              streakAudio: 0,
              streakSprint: +(`${val === 'correct' ? 1 : 0}`),
              totalCountAudiocall: 0,
              totalCorrectAudiocall: 0,
              totalCountSprint: 1,
              totalCorrectSprint: +(`${val === 'correct' ? 1 : 0}`),
              totalStreakAudio: 0,
              totalStreakSprint,
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
    if (!localStorage.getItem('SprintGameTotal') && !localStorage.getItem('SprintCorrectPercentage') && !localStorage.getItem('SprintGameStreak')) {
      this.saveResults(total, percentage, streak);
    } else {
      const sprintTotal = <number> JSON.parse(<string>localStorage.getItem('SprintGameTotal'));
      const sprintCorrectPercentage = <number> JSON.parse(<string>localStorage.getItem('SprintCorrectPercentage'));
      const sprintStreak = <number> JSON.parse(<string>localStorage.getItem('SprintGameStreak'));

      localStorage.setItem('SprintGameTotal', JSON.stringify(sprintTotal + total));
      localStorage.setItem('SprintCorrectPercentage', JSON.stringify((sprintCorrectPercentage + percentage) / 2));
      localStorage.setItem('SprintGameStreak', JSON.stringify(sprintStreak > streak ? sprintStreak : streak));
    }
  }

  saveResults(total: number, percentage: number, streak: number) {
    localStorage.setItem('SprintGameTotal', JSON.stringify(total));
    localStorage.setItem('SprintCorrectPercentage', JSON.stringify(percentage));
    localStorage.setItem('SprintGameStreak', JSON.stringify(streak));
  }

  getResults() {
    const totalScore = <number> JSON.parse(<string>localStorage.getItem('SprintGameTotal'));
    const correctPercentage = <number> JSON.parse(<string>localStorage.getItem('SprintCorrectPercentage'));
    const gameStreak = <number> JSON.parse(<string>localStorage.getItem('SprintGameStreak'));
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

  playAudio(btn: HTMLElement) {
    if (btn) {
      const id = btn.id.split('-').reverse()[0];
      (<HTMLAudioElement>document.getElementById(`audio-word-${id}`)).play().then((res) => res).catch((e: Error) => e);
    }
  }

  buttonPress() {
    document.addEventListener('keydown', this.buttonDownHandler);
    document.addEventListener('keyup', this.buttonUpHandler);
  }

  buttonPressRemove() {
    document.removeEventListener('keydown', this.buttonDownHandler);
    document.removeEventListener('keyup', this.buttonUpHandler);
  }

  buttonDownHandler(event: KeyboardEvent) {
    const btnTrue = <HTMLDivElement>document.getElementById('btn-true');
    const btnFalse = <HTMLDivElement>document.getElementById('btn-false');
    if (event.key === 'ArrowLeft') {
      btnTrue.click();
      btnTrue.classList.add('sprint-active');
    } else if (event.key === 'ArrowRight') {
      btnFalse.click();
      btnFalse.classList.add('sprint-active');
    }
  }

  buttonUpHandler(event: KeyboardEvent) {
    const btnTrue = <HTMLDivElement>document.getElementById('btn-true');
    const btnFalse = <HTMLDivElement>document.getElementById('btn-false');
    if (event.key === '1') {
      btnTrue.classList.remove('sprint-active');
    } else if (event.key === '2') {
      btnFalse.classList.remove('sprint-active');
    }
  }
}

export default SprintController;
