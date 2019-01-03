import React from "react";
import { Radar, defaults } from "react-chartjs-2";
import "chartjs-plugin-datalabels";

const options = {
  scale: {
    ticks: {
      beginAtZero: true,
      min: 0,
      max: 150,
      stepSize: 30
    },
    pointLabels: {
      fontSize: 15
    }
  },
  legend: {
    labels: {
      fontSize: 15
    }
  },
  tooltips: {
    enabled: false
  },
  maintainAspectRatio: false,
  plugins: {
    datalabels: {
      display: false,
      color: "#34495e",
      font: {
        size: "20"
      }
    }
  }
};

// "#1abc9c",
//           "#f1c40f",
//           "#3498db",
//           "#e74c3c",
//           "#9b59b6",
//           "#34495e"

const StatChart = ({ stats, name }) => {
  console.log(stats);
  const statsDAta = stats.map(stat => stat.value);
  const averageStatsData = [67, 70, 70, 72, 77, 69];
  const data = {
    datasets: [
      {
        data: statsDAta,
        borderColor: "#1abc9c",
        borderWidth: 2,
        backgroundColor: "rgba(26,188,156,.3)",
        label: `${name}'s Stats`
      },
      {
        data: averageStatsData,
        borderColor: "rgba(75,75,75,.4)",
        backgroundColor: "rgba(75,75,75,.1)",
        borderWidth: 1.5,
        label: "Average Pokemon Stats"
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
      <Radar data={data} options={options} width={500} height={500} />
    </div>
  );
};

export default StatChart;
