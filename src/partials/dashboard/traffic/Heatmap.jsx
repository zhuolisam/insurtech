import React, { useState, useEffect } from "react";
import Info from "../../../utils/Info";
import RealtimeChart from "../../../charts/RealtimeChart";
import HeatmapImage from "../../../images/hotjarheatmap.jpg";

// Import utilities
import { tailwindConfig, hexToRGB } from "../../../utils/Utils";

function Heatmap() {
  // IMPORTANT:
  // Code below is for demo purpose only, and it's not covered by support.
  // If you need to replace dummy data with real data,
  // refer to Chart.js documentation: https://www.chartjs.org/docs/latest

  return (
    <div className="flex flex-col col-span-full sm:col-span-6  bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100 flex items-center">
        <h2 className="font-semibold text-slate-800">User behaviour heatmap</h2>
        <Info className="ml-2" containerClassName="min-w-44">
          <div className="text-sm text-center">
            Built with{" "}
            <a className="underline" href="https://www.chartjs.org/" target="_blank" rel="noreferrer">
              Chart.js
            </a>
          </div>
        </Info>
      </header>

      <div className="pl-2">
        {/* desc */}
        <div className="flex p-5">See where your customers are clicking on a page</div>
        {/* img */}
        <div className="flex justify-center px-4">
          <img src={HeatmapImage} className="" alt="Activity by Event Customer Count Chart" />
        </div>
        {/* suggest */}
        <div className="text-lg font-bold mt-4 px-6 underline">Suggestions</div>
        <ul className="text-sm mt-2 pb-6 px-6">
          <li className="flex list-disc">1. Low traffic to Corporate tab - consider repositioning it.</li>
          <li className="flex list-disc">2. Consider reducing length of product typewriting.</li>
          <li className="flex list-disc">3. Increase size of input boxes.</li>
        </ul>
      </div>
    </div>
  );
}

export default Heatmap;
