import React from "react";
import DoughnutChart from "../../../charts/DoughnutChart";

// Import utilities
import { tailwindConfig } from "../../../utils/Utils";

function TopDevices() {
  const chartData = {
    labels: ["Mobile", "Tablet", "Desktop", "Other", "bot"],
    datasets: [
      {
        label: "Top Devices",
        data: [50, 35, 10, 4, 1],
        // data: ['35%', '45%', '20%'],
        backgroundColor: [tailwindConfig().theme.colors.indigo[500], tailwindConfig().theme.colors.blue[400], tailwindConfig().theme.colors.indigo[800]],
        hoverBackgroundColor: [tailwindConfig().theme.colors.indigo[600], tailwindConfig().theme.colors.blue[500], tailwindConfig().theme.colors.indigo[900]],
        hoverBorderColor: tailwindConfig().theme.colors.white,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Top Devices</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <DoughnutChart data={chartData} width={389} height={200} />

      <div></div>
    </div>
  );
}

export default TopDevices;
