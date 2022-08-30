// import { IObject } from '../../../common/interfaces/IObject';

class IndexView {
  // static draw(data: IObject<string>)
  static draw() {
    return `<style>
    .header-container {
      justify-content: space-between;
    }
    
    .authorization-link {
      display: inline-block;
      flex-grow: 0;
    }
    
    .main-container {
        justify-content: center;
        flex-wrap: wrap;
        gap: 50px;
    }
    
    .burger,
    .nav-bar {
      display: none;
    }
    
    .description {
        max-width: 60%;
        min-width: 375px;
        padding: 40px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    
    .description-img {
        max-width: 500px;
        border-radius: 30px;
        align-self: center;
    }
    
    .description-text {
        max-width: 500px;
        text-align: center;
        line-height: 1.5rem;
    }
    
    .description-text p {
        margin: 20px;
    }
    
    .description-text ul li {
        width: 80%;
        margin: 10px 20px;
        text-align: left;
    }
    
    .description-btns {
        text-align: center;
    }
    
    .start-menu {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 30px;
        padding: 100px 40px;
    }
    
    .menu-item {
        font-weight: 600;
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: 20px;
        padding: 25px 20px;
        border: 2px solid var(--color);
        border-radius: 30px;
        transition: 0.1s;
    }
    
    .menu-item:hover {
        cursor: pointer;
        transform: scale(1.01);
        box-shadow: 2px 2px 4px var(--color);
    }
    
    .menu-item:active {
        transform: scale(1);
    }
    
    @media screen and (max-width: 640px) {
    
      .main-container {
        max-width: 80%;
      }
    
    }
    </style>
    <div class="main-container">
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
            <a href="/team" class="btn-like-link">Команда</a>
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
