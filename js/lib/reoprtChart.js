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

  // 두 번째 차트 (파이 차트)
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

  // 세 번째 차트 (파이 차트)
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
});
