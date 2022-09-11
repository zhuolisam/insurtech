import React from 'react';
import DoughnutChart from '../../../charts/DoughnutChart';

// Import utilities
import { tailwindConfig } from '../../../utils/Utils';

function TopCountries() {

  const chartData = {
    labels: ['Hong Kong', 'China', 'Malaysia'],
    datasets: [
      {
        label: 'Top Countries',
        data: [
          70, 25, 5,
        ],
        backgroundColor: [
          tailwindConfig().theme.colors.amber[500],
          tailwindConfig().theme.colors.lime[300],
          tailwindConfig().theme.colors.rose[400],
        ],
        hoverBackgroundColor: [
            tailwindConfig().theme.colors.amber[600],
            tailwindConfig().theme.colors.lime[500],
            tailwindConfig().theme.colors.rose[600],
        ],
        hoverBorderColor: tailwindConfig().theme.colors.white,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Top Countries</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <DoughnutChart data={chartData} width={389} height={200} />
    </div>
  );
}

export default TopCountries;
