import Chart, { ChartType } from 'chart.js/auto';

export function createPieChart(incorrect: number, correct: number) {
  const labels = [
    'Ошибка',
    'Правильно',
  ];

  const pieColors = ['#ff6969', '#00a249'];

  const pieResultsData = {
    labels,
    datasets: [{
      label: 'Результаты игры',
      backgroundColor: pieColors,
      borderColor: '#000',
      data: [incorrect, correct],
      borderAlign: 'inner',
      borderWidth: 1,
    }],
  };

  const chartConfig = {
    type: 'pie' as ChartType,
    data: pieResultsData,
    options: {
      responsive: true,
      responsiveAnimationDuration: 3000,
      plugins: {
        legend: {
          position: 'top' as const,
        },
        title: {
          display: true,
          text: 'Результаты игры',
        },
      },
    },
  };
  const myChart = new Chart(
        <HTMLCanvasElement>document.getElementById('audiocall-results-chart'),
        chartConfig,
  );
}
