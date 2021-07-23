export const makeChartData = rawData => {
  const result = {
    datasets: [
      {
        labels: rawData.map(([name, value]) => name),
        data: rawData.map(([name, value]) => value),
        borderWidth: 0,
        backgroundColor: ['#6C3AD3', '#B0B0F5', '#DEDEF4', '#D2D2D2'],
        hoverBackgroundColor: ['#6C3AD3', '#B0B0F5', '#DEDEF4', '#D2D2D2'],
        hoverOffset: 0,
        cutout: '65%',
        tooltip: false,
        hover: null,
      },
    ],
  };

  return result;
};

export const CHART_OPTION = {
  plugins: {
    tooltip: {
      enabled: false,
    },
    offset: true,
  },
};
