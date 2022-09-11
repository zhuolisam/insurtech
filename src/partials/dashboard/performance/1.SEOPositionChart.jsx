import React from "react";
import LineChart from "../../../charts/LineChart03";
import FilterCustomButton from "../../actions/FilterCustomButton";
import Info from "../../../utils/Info";

// Import utilities
import { tailwindConfig } from "../../../utils/Utils";

function SEOPositionChart() {
  const chartData = {
    labels: ["03-01-2022", "04-01-2022", "05-01-2022", "06-01-2022", "07-01-2022", "08-01-2022", "09-01-2022"],
    datasets: [
      // Indigo line
      {
        label: "fwd",
        data: [7, 6, 7, 9, 10, 10, 1],
        borderColor: tailwindConfig().theme.colors.indigo[500],
        fill: false,
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.indigo[500],
      },
      // Blue line
      {
        label: "omicron病徵",
        data: [3, 5, 4, 3, 4, 4, 2],
        borderColor: tailwindConfig().theme.colors.blue[400],
        fill: false,
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.blue[400],
      },
      // Green line
      {
        label: "omicron 病徵",
        data: [2, 4, 3, 4, 3, 2, 3],
        borderColor: tailwindConfig().theme.colors.green[500],
        fill: false,
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.green[500],
      },
      {
        label: "保險",
        data: [11, 7, 1, 8, 10, 11, 10],
        borderColor: tailwindConfig().theme.colors.orange[500],
        fill: false,
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.orange[500],
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
        <div className="flex items-center">
        <h2 className="font-semibold text-slate-800">Your Top Performing Keywords</h2>
          <Info className="ml-2" containerClassName="min-w-72">
            <div className="text-xs text-center">
              Keyword Rankings tells how credible your website is. Higher website credibility leads to higher user's preference.
            </div>
          </Info>
        </div>

        <FilterCustomButton option={["day", "week", "month", "year"]} />
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <LineChart data={chartData} width={595} height={248} format={false} title="51.1K" perctChange="-2.01%" />
    </div>
  );
}

export default SEOPositionChart;
