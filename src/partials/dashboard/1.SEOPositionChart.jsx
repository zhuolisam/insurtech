import React from 'react';
import LineChart from '../../charts/LineChart03';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function SEOPositionChart() {

  const chartData = {
    labels: [
      '12-01-2020', '01-01-2021', '02-01-2021',
      '03-01-2021', '04-01-2021', '05-01-2021',
      '06-01-2021', '07-01-2021', '08-01-2021',
      '09-01-2021', '10-01-2021', '11-01-2021',
      '12-01-2021', '01-01-2022', '02-01-2022',
      '03-01-2022', '04-01-2022', '05-01-2022',
      '06-01-2022', '07-01-2022', '08-01-2022',
      '09-01-2022', '10-01-2022', '11-01-2022',
      '12-01-2022', '01-01-2023',
    ],
    datasets: [
      // Indigo line
      {
        label: 'fwd',
        data: [
          73, 64, 73, 69, 10, 10, 16,
          16, 12, 12, 12, 18, 14, 14,
          12, 11, 10, 15, 16, 23, 26,
          25, 28, 28, 33, 33,
        ],
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
        label: 'omicron病徵',
        data: [
          18, 86, 42, 37, 42, 24, 38,
          12, 1, 1, 4, 1, 84, 0,
          27, 1, 12, 42, 12, 88, 88,
          21, 16, 88, 12, 64,
        ],
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
        label: 'omicron 病徵',
        data: [
          12, 17, 19, 86, 10, 14, 1,
          11, 56, 14, 0, 72, 28, 1,
          22, 18, 14, 12, 2, 15, 1,
          11, 76, 12, 20, 2,
        ],
        borderColor: tailwindConfig().theme.colors.green[500],
        fill: false,
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.green[500],
      },
      {
        label: '保險',
        data: [
          12, 7, 1, 8, 10, 1, 1,
          1, 56, 14, 0, 72, 8, 18,
          2, 18, 14, 12, 20, 15, 11,
          1, 76, 12, 20, 28,
        ],
        borderColor: tailwindConfig().theme.colors.green[500],
        fill: false,
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.green[500],
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100 flex items-center">
        <h2 className="font-semibold text-slate-800">Position Tracking</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <LineChart data={chartData} width={595} height={248} format={false} title = '51.1K' perctChange='-2.01%'/>
    </div>
  );
}

export default SEOPositionChart;
