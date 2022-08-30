import { findHtmlElement } from "../common/utils/utils";

const burgerIcon = findHtmlElement(document, '.burger');
const navBar = findHtmlElement(document, '.nav-bar');

function toggleBurgerMenu() {
  burgerIcon?.classList.toggle('open');
  navBar?.classList.toggle('open');
}

burgerIcon?.addEventListener('click', toggleBurgerMenu);
