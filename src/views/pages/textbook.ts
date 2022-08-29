import { IObject } from '../../common/interfaces/IObject';

class TextbookView {
  static draw(data: IObject<string>) {
    return `<div>Textbook content with data: ${Object.values(data).join(' , ')}</div>`;
  }
}

export default TextbookView;
