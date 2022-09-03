import '../pages.css';
import './index.css';

class MainPage {
  static draw() {
    return `<div class="main-container">
    <div class="description">
        <img class="description-img" src="./assets/images/main/bus.png" alt="Bus">
        <div class="description-text">
            <p><b>SyllaBus</b> - интерактивное приложение для изучения английского языка.
            <p>Здесь ты найдешь:</p>
            <ul>
                <li>Электронный учебник, который поможет узнать новые слова.</li>
                <li>Мини-игры для повторения изученного материала.</li>
                <li>Краткосрочная и долгосрочная статистика твоего прогресса.</li>
            </ul>
        </div>
        <div class="description-btns">
            <a href="./team.html" class="btn-like-link">Команда</a>
        </div>
    </div>
    <div class="start-menu">
        <a href="./textbook.html">
            <div class="menu-item">
                <img src="./assets/images/textbook.png" alt="Textbook image" class="menu-item-img"
                    width="80">
                <span class="menu-item-name">Учебник</span>
            </div>
        </a>
        <a href="./sprint.html">
            <div class="menu-item">
                <img src="./assets/images/sprint.png" alt="Sprint image" class="menu-item-img" width="70">
                <span class="menu-item-name">Игра "Спринт"</span>
            </div>
        </a>
        <a href="./audiocall.html">
            <div class="menu-item">
                <img src="./assets/images/audiocall.png" alt="Audiogame image" class="menu-item-img"
                    width="70">
                <span class="menu-item-name">Игра "Аудиовызов"</span>
            </div>
        </a>
        <a href="./statistics.html">
            <div class="menu-item">
                <img src="./assets/images/statistics.png" alt="Statistics image" class="menu-item-img"
                    width="70">
                <span class="menu-item-name">Статистика</span>
            </div>
        </a>
    </div>
</div>`;
  }
}

const main: HTMLElement | null = document.querySelector<HTMLElement>('main');
if (main) main.innerHTML = MainPage.draw();
