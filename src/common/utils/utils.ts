export function findHtmlElement<TElement extends Element = HTMLElement>(fragment: HTMLElement |
Document, selector: string): TElement {
  const el = fragment.querySelector<TElement>(selector);
  if (!el) throw new Error(`No element was found: ${selector}`);
  return el;
}

export function toggleBurgerMenu() {
  const burgerIcon = findHtmlElement(document, '.burger');
  const navBar = findHtmlElement(document, '.nav-bar');
  burgerIcon.classList.toggle('open');
  navBar.classList.toggle('open');
}

export function hideBurgerMenu() {
  const burger = findHtmlElement(document, '.burger');
  const navBar = findHtmlElement(document, '.nav-bar');
  burger.style.display = 'none';
  navBar.style.display = 'none';
}

export function showBurgerMenu() {
  const burger = findHtmlElement(document, '.burger');
  const navBar = findHtmlElement(document, '.nav-bar');
  burger.style.display = 'inline-block';
  navBar.style.display = 'block';
}

export function closeBurgerMenu() {
  const burger = findHtmlElement(document, '.burger');
  const navBar = findHtmlElement(document, '.nav-bar');
  burger.classList.remove('open');
  navBar.classList.remove('open');
}
