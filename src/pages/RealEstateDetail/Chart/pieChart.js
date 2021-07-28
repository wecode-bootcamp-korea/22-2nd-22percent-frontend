export const makePieChartData = () => {
  const pieChart = {
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
        borderWidth: '0',
        weight: '.5',
        responsive: false,
        tooltip: false,
        text: '23%',
        cutout: '60%',
      },
    ],
  };
  return pieChart;
};

export const CHART_OPTION = {
  plugins: {
    tooltip: {
      enabled: false,
    },
    offset: true,
  },
};
