import './statistics.css';
// import { IObject } from '../../../common/interfaces/IObject';

class StatisticsView {
  // static draw(data: IObject<string>)
  static draw(
    learnedSprint: number,
    correctSprint: number,
    streakSprint: number,
    learnedAudio: number,
    correctAudio: number,
    streakAudio: number,
  ) {
    return `
    <div class="main-container-statistics">
      <h1>Статистика за сегодня</h1>
      <div class="general-statistics-container">
        <div class="new-words-stats">
          <h2>0</h2>
          <p>новых слов</p>
        </div>
        <div class="learned-words-stats">
          <h2>0</h2>
          <p>изученных слов</p>
        </div>
        <div class="learned-words-stats">
          <h2>0%</h2>
          <p>правильных ответов</p>
        </div>
        </div>
    <div class="statistics-games-container">
        <div class="sprint-statistics statistics-container">
          <h2>Игра "Спринт"</h2>
          <div class="statistics-content">               
              <div class="statistics-content-item"><img src="../../assets/images/statistics/learned-icon.png" alt="Learned words"><p>Изучено слов: ${learnedSprint}</p></div>
              <div class="statistics-content-item"><img src="../../assets/images/right-icon.png" alt="Correct words"><p>Правильных ответов: ${correctSprint}</p></div>
              <div class="statistics-content-item"><img src="../../assets/images/statistics/streak-icon.png" alt="Streak words"><p>Самая длинная серия ответов: ${streakSprint}</p></div>
          </div>
        </div>
        <div class="audiocall-statistics statistics-container">
          <h2>Игра "Аудиозвонок"</h2>
          <div class="statistics-content">
              <div class="statistics-content-item"><img src="../../assets/images/statistics/learned-icon.png" alt="Learned words"><p>Изучено слов: ${learnedAudio}</p></div>
              <div class="statistics-content-item"><img src="../../assets/images/right-icon.png" alt="Correct words"><p>Правильных ответов: ${correctAudio}</p></div>
              <div class="statistics-content-item"><img src="../../assets/images/statistics/streak-icon.png" alt="Streak words"><p>Самая длинная серия ответов: ${streakAudio}</p></div>
          </div>
        </div>
    </div>`;
  }
}

export default StatisticsView;
