import './authorization.css';

export default function renderAuthorization() {
  return `<div class="blur"></div>
  <div class="authorization-block">
    <img class="close-icon" src="./assets/svg/cross.svg" alt="Close Icon" width="20">
    <h2>Авторизация</h2>
    <form class="login-form auth-form" id="login-form">
      <p class="authorization-error error-msg">Неверный логин или пароль</p>
      <input class="authorization-email auth-input" name="email" type="email" placeholder="E-mail" autofocus>
      <input class="authorization-password auth-input" name="password" type="password" placeholder="Пароль" minlength="8">
    </form>
    <form class="registration-form auth-form" id="registration-form" style="display:none">
      <p class="registration-error error-msg"></p>
      <p class="registration-success success-msg">Пользователь успешно зарегистрирован!</p>
      <input class="registration-name auth-input" name="name" type="text" placeholder="Имя" autocomplete="off" autofocus>
      <input class="registration-email auth-input" name="email" type="email" placeholder="E-mail" autocomplete="off">
      <input class="registration-password auth-input" name="password" type="password" placeholder="Пароль" minlength="8" autocomplete="off">
    </form>
    <div class="authorization-btns">
        <button class="login-btn btn-like-link">Войти</button>
        <button class="registration-link-btn">Зарегистрироваться</button>
        <button class="registration-btn btn-like-link" style="display:none">Регистрация</button>
        <button class="login-link-btn" style="display:none">Уже есть аккаунт?</button>
      </div>
  </div>`;
}
