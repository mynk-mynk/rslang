import './index.css';
// import { IObject } from '../../../common/interfaces/IObject';

class IndexView {
  // static draw(data: IObject<string>)
  static draw() {
    return `<div class="main-container-index">
    <div class="description">
        <img class="description-img" src="../../assets/images/main/bus.png" alt="Bus">
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
            <span data-path="/team" class="btn-like-link">Команда</span>
        </div>
    </div>
    <ul class="start-menu">
        <li data-path="/textbook">
            <div class="menu-item">
                <img src="../../assets/images/textbook.png" alt="Textbook image" class="menu-item-img"
                    width="80">
                <span class="menu-item-name">Учебник</span>
            </div>
        </li>
        <li data-path="/sprint">
            <div class="menu-item">
                <img src="../../assets/images/sprint.png" alt="Sprint image" class="menu-item-img" width="70">
                <span class="menu-item-name">Игра "Спринт"</span>
            </div>
        </li>
        <li data-path="/audiocall">
            <div class="menu-item">
                <img src="../../assets/images/audiocall.png" alt="Audiogame image" class="menu-item-img"
                    width="70">
                <span class="menu-item-name">Игра "Аудиовызов"</span>
            </div>
        </li>
        <li data-path="/statistics">
            <div class="menu-item">
                <img src="../../assets/images/statistics.png" alt="Statistics image" class="menu-item-img"
                    width="70">
                <span class="menu-item-name">Статистика</span>
            </div>
        </li>
    </ul>
</div>`;
  }
}

export default IndexView;
