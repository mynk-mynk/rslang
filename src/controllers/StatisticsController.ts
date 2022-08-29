import StatisticsView from '../views/pages/statistics';

class StatisticsController {
  static actionIndex() {
    const data = {
      data1: '2',
      data2: 'statistics',
    };
    (document.querySelector('main') as HTMLElement).innerHTML = StatisticsView.draw(data);
  }
}

export default StatisticsController;
