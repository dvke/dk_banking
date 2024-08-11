"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const data = {
    labels: ["Bank 1", "Bank 2", "Bank 3"],
    datasets: [
      {
        label: "Banks",
        data: [32000, 76450, 9900],
        backgroundColor: ["#0747b6", "#2265d8", "#2f91fa"],
      },
    ],
  };

  return (
    <Doughnut
      data={data}
      options={{
        cutout: "60%",
        plugins: {
          legend: { display: false },
        },
      }}
    />
  );
};

export default DoughnutChart;
