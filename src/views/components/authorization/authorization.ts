export default function renderAuthorization() {
  return `<style>
  .authorization-block {
    position: fixed;
    width: 450px;
    height: 320px;
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
  
  .authorization-btns {
    display: flex;
    flex-direction: column;
    gap: 15px;
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

  .authorization-error {
    color: red;
    display: none;
    text-align: center;
  }
  </style>
  <div class="blur"></div>
  <div class="authorization-block">
    <img class="close-icon" src="../../assets/svg/cross.svg" alt="Close Icon" width="20">
    <h2>LogIn</h2>
    <form class="login-form auth-form" id="login-form">
    <p class="authorization-error">Error</p>
      <input class="authorization-email auth-input" name="email" type="email" placeholder="E-mail" autofocus>
      <input class="authorization-password auth-input" name="password" type="password" placeholder="Password">
    </form>
    <form class="registration-form auth-form" id="registration-form" style="display:none">
      <input class="authorization-name auth-input" name="name" type="text" placeholder="Name" autofocus>
      <input class="authorization-email auth-input" name="email" type="email" placeholder="E-mail">
      <input class="authorization-password auth-input" name="password" type="password" placeholder="Password">
    </form>
    <div class="authorization-btns">
        <button class="login-btn btn-like-link">Login</button>
        <button class="registration-link-btn">Registration</button>
        <button class="registration-btn btn-like-link" style="display:none">Registration</button>
        <button class="login-link-btn" style="display:none">Login</button>
      </div>
  </div>`;
}
