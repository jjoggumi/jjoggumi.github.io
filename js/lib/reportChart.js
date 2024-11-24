document.addEventListener("DOMContentLoaded", function () {
  // 첫 번째 차트 (바 차트)
  var ctx1 = document.getElementById("chart01").getContext("2d");

  var chart01 = new Chart(ctx1, {
    type: "bar",
    data: {
      labels: ["내 매장", "AAA", "BBB", "CCC", "DDD"],
      datasets: [
        {
          data: [1000, 1700, 1600, 600, 800],
          backgroundColor: [
            "#0B1D59", // 내 매장 색상
            "#d9d9d9",
            "#d9d9d9",
            "#d9d9d9",
            "#d9d9d9",
          ],
          borderRadius: {
            topLeft: 50,
            topRight: 50,
            bottomLeft: 0,
            bottomRight: 0,
          },
          borderSkipped: false,
          barThickness: 20,
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: false, // 라벨 표시 안함
        },
      },
      scales: {
        x: {
          beginAtZero: true,
          grid: {
            display: false, // x축 격자 비활성화
          },
          ticks: {
            font: {
              size: 11,
              weight: "bold",
            },
          },
        },
        y: {
          beginAtZero: true,
          grid: {
            display: false, // y축 격자 비활성화
          },
          ticks: {
            font: {
              size: 11,
              weight: "bold",
            },
          },
        },
      },
    },
  });

  // 성별 유입인구 수 (24.07)
  var ctx2 = document.getElementById("chart02").getContext("2d");

  var chart02 = new Chart(ctx2, {
    type: "pie",
    data: {
      labels: ["남자", "여자"],
      datasets: [
        {
          data: [39, 61],
          backgroundColor: ["#5BA7FF", "#FF7C7C"],
          borderWidth: 0, // 경계선 제거
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: false, // 라벨 표시
        },
      },
    },
    plugins: [
      {
        id: "customLabels",
        afterDatasetDraw(chart) {
          const { ctx, data } = chart;
          const dataset = data.datasets[0];
          const meta = chart.getDatasetMeta(0);
          meta.data.forEach((element, index) => {
            const { x, y } = element.tooltipPosition();
            const value = dataset.data[index];
            ctx.fillStyle = "#fff";
            ctx.font = "14px Arial";
            ctx.textAlign = "center";
            ctx.fillText(value + "%", x, y - 5);
          });
        },
      },
    ],
  });

  // 성별 유입인구 수 (24.09)
  var ctx3 = document.getElementById("chart03").getContext("2d");
  var chart03 = new Chart(ctx3, {
    type: "pie",
    data: {
      labels: ["남자", "여자"],
      datasets: [
        {
          data: [41, 59],
          backgroundColor: ["#5BA7FF", "#FF7C7C"],
          borderWidth: 0, // 경계선 제거
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: false, // 라벨 표시
        },
      },
    },
    plugins: [
      {
        id: "customLabels",
        afterDatasetDraw(chart) {
          const { ctx, data } = chart;
          const dataset = data.datasets[0];
          const meta = chart.getDatasetMeta(0);
          meta.data.forEach((element, index) => {
            const { x, y } = element.tooltipPosition();
            const value = dataset.data[index];
            ctx.fillStyle = "#fff";
            ctx.font = "14px Arial";
            ctx.textAlign = "center";
            ctx.fillText(value + "%", x, y - 5); // 값 표시 (섹션 위)
          });
        },
      },
    ],
  });

  // 연령별 유입인구 수 (24.07)
  var ctx4 = document.getElementById("chart04").getContext("2d");
  var chart04 = new Chart(ctx4, {
    type: "pie",
    data: {
      labels: ["10대", "20대", "30대", "40대", "50대", "60대 이상"],
      datasets: [
        {
          data: [12, 12, 12, 12, 22, 30],
          backgroundColor: [
            "#FF7C7C",
            "#FFAA5B",
            "#FFDC5F",
            "#6FD7B8",
            "#5BA7FF",
            "#B584FA",
          ],
          borderWidth: 0, // 경계선 제거
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: false, // 라벨 표시
        },
      },
    },
    plugins: [
      {
        id: "customLabels",
        afterDatasetDraw(chart) {
          const { ctx, data } = chart;
          const dataset = data.datasets[0];
          const meta = chart.getDatasetMeta(0);
          meta.data.forEach((element, index) => {
            const { x, y } = element.tooltipPosition();
            const value = dataset.data[index];
            ctx.fillStyle = "#fff";
            ctx.font = "14px Arial";
            ctx.textAlign = "center";
            ctx.fillText(value + "%", x, y + 5); // 값 표시 (섹션 위)
          });
        },
      },
    ],
  });
  // 연령별 유입인구 수 (24.09)
  var ctx5 = document.getElementById("chart05").getContext("2d");
  var chart05 = new Chart(ctx5, {
    type: "pie",
    data: {
      labels: ["10대", "20대", "30대", "40대", "50대", "60대 이상"],
      datasets: [
        {
          data: [12, 12, 12, 12, 22, 30],
          backgroundColor: [
            "#FF7C7C",
            "#FFAA5B",
            "#FFDC5F",
            "#6FD7B8",
            "#5BA7FF",
            "#B584FA",
          ],
          borderWidth: 0, // 경계선 제거
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: false, // 라벨 표시
        },
      },
    },
    plugins: [
      {
        id: "customLabels",
        afterDatasetDraw(chart) {
          const { ctx, data } = chart;
          const dataset = data.datasets[0];
          const meta = chart.getDatasetMeta(0);
          meta.data.forEach((element, index) => {
            const { x, y } = element.tooltipPosition();
            const value = dataset.data[index];
            ctx.fillStyle = "#fff";
            ctx.font = "14px Arial";
            ctx.textAlign = "center";
            ctx.fillText(value + "%", x, y + 5); // 값 표시 (섹션 위)
          });
        },
      },
    ],
  });
  // 차트가 렌더링된 후 라벨 값을 가져와서 div에 추가
  chart04.options.plugins.legend.onClick = function (e, legendItem) {
    var labelsDiv = document.getElementById("chart04-labels");
    labelsDiv.innerHTML = ""; // 기존 내용 지우기
    chart04.data.labels.forEach(function (label) {
      var labelElement = document.createElement("li");
      labelElement.textContent = label;
      labelsDiv.appendChild(labelElement);
    });
  };

  // 초기 라벨 값 설정
  var labelsDiv = document.getElementById("chart04-labels");
  chart04.data.labels.forEach(function (label) {
    var labelElement = document.createElement("li");
    labelElement.textContent = label;
    labelsDiv.appendChild(labelElement);
  });

  // 차트가 렌더링된 후 라벨 값을 가져와서 div에 추가
  chart02.options.plugins.legend.onClick = function (e, legendItem) {
    var labelsDiv = document.getElementById("chart02-labels");
    labelsDiv.innerHTML = ""; // 기존 내용 지우기
    chart02.data.labels.forEach(function (label) {
      var labelElement = document.createElement("li");
      labelElement.textContent = label;
      labelsDiv.appendChild(labelElement);
    });
  };

  // 초기 라벨 값 설정
  var labelsDiv = document.getElementById("chart02-labels");
  chart02.data.labels.forEach(function (label) {
    var labelElement = document.createElement("li");
    labelElement.textContent = label;
    labelsDiv.appendChild(labelElement);
  });
});
