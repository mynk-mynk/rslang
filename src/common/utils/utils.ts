export function findHtmlElement<TElement extends Element = HTMLElement>(fragment: HTMLElement |
Document, selector: string): TElement {
  const el = fragment.querySelector<TElement>(selector);
  if (!el) throw new Error(`No element was found: ${selector}`);
  return el;
}

// Add this because of linter import/prefer-default-export
export function capitalizeFirstLetter(str: string) {
  return str[0].toUpperCase() + str.slice(1);
}
