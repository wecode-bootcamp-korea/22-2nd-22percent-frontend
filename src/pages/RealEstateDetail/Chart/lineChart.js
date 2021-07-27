export const makeLineChartData = () => {
  return {
    labels: ['#1', '#2', '#3', '#4', '#5', '#6', '#7', '#8'],
    datasets: [
      {
        label: '신용자 등급 정보',
        data: [900, 920, 880, 890, 850, 870, 880, 890, 920, 920, 780, 800],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };
};
