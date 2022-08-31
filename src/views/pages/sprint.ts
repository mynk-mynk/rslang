import { IObject } from '../../common/interfaces/IObject';

class SprintView {
  static draw(data: IObject<string>) {
    return `<div>Sprint content with data: ${Object.values(data).join(
      ' , '
    )}</div>`;
  }
}

export default SprintView;
