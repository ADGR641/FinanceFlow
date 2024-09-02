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
  const option = {};
  return (
    <>
      <div>
        <Line options={option} data={AnalysisData} />
      </div>
    </>
  );
}

export default LineChart;
