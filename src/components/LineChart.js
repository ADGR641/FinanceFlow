import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { AnalysisData } from "../data/AnalysisData.js";

// Make it render on website
Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function LineChart() {
  const option = {
    plugins: {
      title: {
        display: true,
        text: "Analysis",
        position: "top",
        align: "start",
        color: "black",
        font: {
          size: 28,
          weight: "normal",
          family: "Arial",
          style: "normal",
        },
        padding: {
          top: 10,
          bottom: 10,
          left: 10,
          right: 10,
        },
      },
    },
  };
  return (
    <>
      <div>
        <Line options={option} data={AnalysisData} />
      </div>
    </>
  );
}

export default LineChart;
