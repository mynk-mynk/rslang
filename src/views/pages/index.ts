import { IObject } from '../../common/interfaces/IObject';

class IndexView {
  static draw(data: IObject<string>) {
    return `<div>Index content with data: ${Object.values(data).join(' , ')}</div>`;
  }
}

export default IndexView;
