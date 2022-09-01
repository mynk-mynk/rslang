export default function renderAuthorization() {
  return `<style>
  .authorization-block {
    position: fixed;
    width: 450px;
    height: 330px;
    top: calc(50% - 160px);
    left: calc(50% - 225px);
    z-index: 20;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    border: 2px solid var(--color);
    border-radius: 30px;
    background: rgba(246, 240, 153, 1);
    font-family: var(--font-secondary);
    transition: 0.1s;
  }
  
  .blur {
    position: absolute;
    z-index: 15;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 50%;
  }
  
  .close-icon {
    position: absolute;
    top: 20px;
    right: 20px;
    filter: var(--filter);
    transition: 0.1s;
  }
  
  .close-icon:hover {
    cursor: pointer;
    filter: var(--filter) drop-shadow(2px 2px 2px var(--ligth-color));
    transform: scale(1.05);
  }
  
  .close-icon:active {
    transform: scale(0.95);
  }
  
  .auth-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 80%;
  }
  
  .auth-input {
    height: 40px;
    display: block;
    padding: 5px 15px;
    font-family: var(--font-secondary);
    font-size: 1rem;
    border: 1px solid var(--color);
    border-radius: 10px;
    color: var(--color);
  }

  .auth-input:invalid {
    border: 2px solid red;
  }
  
  .authorization-btns {
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
  }
  
  .login-btn, .registration-btn {
    font-family: var(--font-secondary);
    font-size: 1rem;
    padding: 10px 15px;
    width: fit-content;
    background: transparent;
  }
  
  .login-btn:active, .registration-btn:active {
    transform: scale(0.95);
  }
  
  .registration-link-btn, .login-link-btn {
    background: transparent;
    border: none;
    color: var(--color);
    font-family: var(--font-secondary);
    font-weight: 600;
    transition: 0.1s;
  }
  
  .registration-link-btn:hover, .login-link-btn:hover {
    cursor: pointer;
    transform: scale(1.02);
    text-shadow: 2px 2px 3px var(--ligth-color);
  }
  
  .registration-link-btn:active, .login-link-btn:active {
    transform: scale(0.98);
  }

  .error-msg {
    color: red;
    display: none;
    text-align: center;
  }

  .success-msg {
    color: green;
    display: none;
    text-align: center;
  }
  </style>
  <div class="blur"></div>
  <div class="authorization-block">
    <img class="close-icon" src="../../assets/svg/cross.svg" alt="Close Icon" width="20">
    <h2>Авторизация</h2>
    <form class="login-form auth-form" id="login-form">
      <p class="authorization-error error-msg">Неверный логин или пароль</p>
      <input class="authorization-email auth-input" name="email" type="email" placeholder="E-mail" autofocus>
      <input class="authorization-password auth-input" name="password" type="password" placeholder="Пароль" minlength="8">
    </form>
    <form class="registration-form auth-form" id="registration-form" style="display:none">
      <p class="registration-error error-msg"></p>
      <p class="registration-success success-msg">Пользователь успешно зарегистрирован!</p>
      <input class="registration-name auth-input" name="name" type="text" placeholder="Имя" autofocus>
      <input class="registration-email auth-input" name="email" type="email" placeholder="E-mail">
      <input class="registration-password auth-input" name="password" type="password" placeholder="Пароль" minlength="8">
    </form>
    <div class="authorization-btns">
        <button class="login-btn btn-like-link">Войти</button>
        <button class="registration-link-btn">Зарегистрироваться</button>
        <button class="registration-btn btn-like-link" style="display:none">Регистрация</button>
        <button class="login-link-btn" style="display:none">Уже есть аккаунт?</button>
      </div>
  </div>`;
}
