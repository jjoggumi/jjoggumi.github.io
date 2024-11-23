var chartsData = [
  {
    name: "chart02",
    type: [["line"], ["bar"]],
    data: [
      [2300, 2100, 2500, 2800, 1900, 1800, 2100, 2250, 2305, 2280, 2300, 2750],
      [-10, 10, 12, 18, 30, 15, 20, 15, 0, 25, -15, 10],
    ],
    labels: [
      "23년3월",
      "23년4월",
      "23년5월",
      "23년6월",
      "23년7월",
      "23년8월",
      "23년9월",
      "23년10월",
      "23년11월",
      "23년12월",
      "24년1월",
      "24년2월",
    ],
    datasetLabels: [["점포수"], ["전년대비 증감률"]],
    datasetColor: [["#2C68D1"], ["#FF7D25"]],
    yAxisID: [["yA"], ["yB"]],
  },
  {
    name: "smrChart01",
    type: [["pie"]],
    data: [[75.4, 24.6]],
    labels: ["남성", "여성"],
    datasetLabels: [["성별 / 배후지 거주인구 비율"]],
    datasetColor: [["#2C68D1", "#FF7D25"]],
  },
];

chartsData.forEach((chartData) => {
  var chartCanvas = document.getElementById(chartData.name);
  if (chartCanvas) {
    var chartCtx = chartCanvas.getContext("2d");

    // 축 설정
    var scales = {};
    if (chartData.yAxisID) {
      scales.yA = { position: "left", type: "linear", display: true };
      scales.yB = {
        position: "right",
        beginAtZero: true,
        grid: { drawOnChartArea: false },
      };
    }
    if (chartData.stacked) {
      scales.x = { stacked: true };
      scales.y = { stacked: true };
    }

    new Chart(chartCtx, {
      type: chartData.type ? chartData.type[0][0] : "line",
      data: {
        labels: chartData.labels,
        datasets: chartData.data.map((data, index) => ({
          type: chartData.type ? chartData.type[index][0] : "line",
          label: chartData.datasetLabels[index][0],
          data: data,
          backgroundColor: chartData.datasetColor[index][0],
          borderColor: chartData.datasetColor[index][0],
          borderWidth:
            chartData.type && chartData.type[index][0] === "bar" ? 0 : 1.5,
          pointStyle: "circle",
          pointRadius: 3,
          pointHoverRadius: 7,
          tension: 0.3,
          barThickness: 16,
          yAxisID: chartData.yAxisID ? chartData.yAxisID[index][0] : undefined,
        })),
      },
      options: {
        responsive: true,
        interaction: {
          mode: "index",
          intersect: false,
        },
        plugins: {
          legend: {
            labels: {
              usePointStyle: true,
              boxWidth: 5,
            },
          },
        },
        scales: scales,
      },
    });
  }
});
