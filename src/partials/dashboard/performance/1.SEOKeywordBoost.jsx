import React from "react";
import LineChart from "../../../charts/LineChart03";
import FilterCustomButton from "../../actions/FilterCustomButton";
import Info from "../../../utils/Info";

// Import utilities
import { tailwindConfig } from "../../../utils/Utils";

function SEOKeywordBoost() {
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
    <div className="flex flex-col col-span-full sm:col-span-12 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
        <div className="flex items-center">
          <h2 className="font-semibold text-slate-800">Your Top Performing Keywords</h2>
          <Info className="ml-2" containerClassName="min-w-72">
            <div className="text-xs text-center">Keyword Rankings tells how credible your website is. Higher website credibility leads to higher user's preference.</div>
          </Info>
        </div>

        <FilterCustomButton option={["day", "week", "month", "year"]} />
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <div className="flex ">
        <LineChart className="flex-1" data={chartData} width={595} height={248} format={false} title="51.1K" perctChange="-2.01%" />
        {/* Table */}
        <div className="overflow-x-auto flex-1">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">Keyword</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Position</div>
                </th>
                {/* <th className="p-2">
                  <div className="font-semibold text-center">Traffic</div>
                </th> */}
                <th className="p-2">
                  <div className="font-semibold text-center">Volume</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Visibility</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm font-medium divide-y divide-slate-100">
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-slate-800">fwd</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">
                    1<span className="text-slate-400"> 0</span>
                  </div>
                </td>
                {/* <td className="p-2">
                  <div className="text-center text-green-500">20.22%</div>
                </td> */}
                <td className="p-2">
                  <div className="text-center">18,100</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">6.52%</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-slate-800">omicron病徵</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">
                    2<span className="text-red-500"> &#8595;1</span>
                  </div>
                </td>
                {/* <td className="p-2">
                  <div className="text-center text-green-500">5.31%</div>
                </td> */}
                <td className="p-2">
                  <div className="text-center">8,100</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">2.61%</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-slate-800">omicron 病徵</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">
                    3<span className="text-red-500"> &#8595;1</span>
                  </div>
                </td>
                {/* <td className="p-2">
                  <div className="text-center text-green-500">5.09%</div>
                </td> */}
                <td className="p-2">
                  <div className="text-center">40,500</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">5.90%</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-slate-800">保險</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">
                    10
                    <span className="text-green-500"> &#8593;1</span>
                  </div>
                </td>
                {/* <td className="p-2">
                  <div className="text-center text-green-500">4.91%</div>
                </td> */}
                <td className="p-2">
                  <div className="text-center">4,400</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">1.51%</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SEOKeywordBoost;
