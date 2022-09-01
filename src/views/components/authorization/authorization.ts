// Add to the top of main container
// add class .no-scroll to body (don't forget to remove .no-scroll after closing popup)

import './authorization.css';

export function renderAuthorization() {
  return `<div class="blur"></div>
<div class="authorization-container">
  <img class="close-icon" src="../../assets/svg/cross.svg" alt="Close Icon" width="20">
  <h2>LogIn</h2>
  <form class="login-form" action="">
    <input class="authorization-email" type="email" placeholder="E-mail" autofocus>
    <input class="authorization-password" type="password" placeholder="Password">
  </form>
  <div class="authorization-btns">
    <button class="login-btn btn-like-link">Login</button>
    <button class="regestration-btn">Registration</button>
  </div>
</div>`;
}
