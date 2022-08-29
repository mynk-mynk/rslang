import { IObject } from '../../common/interfaces/IObject';

class StatisticsView {
  static draw(data: IObject<string>) {
    return `<div>Statistics content with data: ${Object.values(data).join(' , ')}</div>`;
  }
}

export default StatisticsView;
