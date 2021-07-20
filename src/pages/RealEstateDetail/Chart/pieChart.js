export const makePieChartData = () => {
  return {
    legend: {
      display: false,
    },
    labels: { display: false },
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(222, 226, 230)',
          'rgb(173, 181, 189)',
          'rgb(50, 130, 240)',
        ],
        hoverBackgroundColor: [
          'rgb(222, 226, 230)',
          'rgb(173, 181, 189)',
          'rgb(50, 130, 240)',
        ],
        borderWidth: '.5',
        weight: '.5',
        options: {
          responsive: false,
        },
      },
    ],
    text: '23%',
  };
};
