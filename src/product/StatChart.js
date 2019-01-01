import React from "react";
import { Polar, defaults } from "react-chartjs-2";
import "chartjs-plugin-datalabels";

const options = {
  scale: {
    display: false
  },
  legend: {
    position: "left",
    labels: {
      fontSize: 15
    }
  },
  maintainAspectRatio: false,
  plugins: {
    datalabels: {
      display: true,
      color: "white",
      font: {
        size: "20"
      }
    }
  }
};

const StatChart = ({ stats }) => {
  const statsDAta = stats.map(stat => stat.value);
  const data = {
    datasets: [
      {
        data: statsDAta,
        backgroundColor: [
          "#1abc9c",
          "#f1c40f",
          "#3498db",
          "#e74c3c",
          "#9b59b6",
          "#34495e"
        ],
        label: "Stats" // for legend
      }
    ],
    labels: [
      "Speed",
      "Special Defense",
      "Special Attack",
      "Defense",
      "Attack",
      "HP"
    ]
  };

  return (
    <div className="product-stats">
      <Polar data={data} options={options} width={500} height={500} />
    </div>
  );
};

export default StatChart;
