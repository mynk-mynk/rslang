const burgerIcon = document.querySelector('.burger');
const navBar = document.querySelector('.nav-bar');

function toggleBurgerMenu() {
  burgerIcon?.classList.toggle('open');
  navBar?.classList.toggle('open');
}

burgerIcon?.addEventListener('click', toggleBurgerMenu);
