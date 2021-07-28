export const makeLineChartData = creditScore => {
  const line = {
    labels: ['#1', '#2', '#3', '#4', '#5', '#6', '#7', '#8'],
    datasets: [
      {
        label: '신용자 등급 정보',
        data: creditScore,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };
  return line;
};
