import Chart, { ChartType } from 'chart.js/auto';
import { findHtmlElement } from '../common/utils/utils';
import StatisticsView from '../views/pages/statistics/statistics';

class StatisticsController {
  static actionIndex() {
    // const data = {
    //   data1: '2',
    //   data2: 'statistics',
    // };
    const main = findHtmlElement(document, 'main');
    main.innerHTML = StatisticsView.draw(1, 2, 3, 4, 5, 6, 7, 8);
    StatisticsController.graph();
  }

  static graph() {
    const myChart = new Chart(document.getElementById('myChart') as HTMLCanvasElement, {
      type: 'bar',
      data: {
        labels: ['01.09', '02.09', '03.09', '04.09', '05.09', '06.09'],
        datasets: [{
          label: '',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
          ],
        }],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: 'Количество новых слов за день',
            font: {
              family: 'Comfortaa',
              size: 30,
              lineHeight: 2,
            },
            color: '#181f4a',
          },
        },
      },
    });
  }
}

export default StatisticsController;
