import { findHtmlElement } from '../common/utils/utils';
import User from '../models/User';
import StatisticsView from '../views/pages/statistics/statistics';

class StatisticsController {
  static actionIndex() {
    // const data = {
    //   data1: '2',
    //   data2: 'statistics',
    // };
    const main = findHtmlElement(document, 'main');
    main.innerHTML = StatisticsView.draw();
  }
}

export default StatisticsController;
