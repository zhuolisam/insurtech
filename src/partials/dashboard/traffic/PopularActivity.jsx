import React, { useState, useEffect } from "react";
import Info from "../../../utils/Info";
import RealtimeChart from "../../../charts/RealtimeChart";
import Image06 from "../../../images/topactivitybyage.png";

// Import utilities
import { tailwindConfig, hexToRGB } from "../../../utils/Utils";

function PopularActivity() {
  // IMPORTANT:
  // Code below is for demo purpose only, and it's not covered by support.
  // If you need to replace dummy data with real data,
  // refer to Chart.js documentation: https://www.chartjs.org/docs/latest

  return (
    <div className="flex flex-col col-span-full sm:col-span-12 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100 flex items-center">
        <h2 className="font-semibold text-slate-800">Popular Activities by Age</h2>
        {/* <Info className="ml-2" containerClassName="min-w-44">
          <div className="text-sm text-center">
            Built with{" "}
            <a className="underline" href="https://www.chartjs.org/" target="_blank" rel="noreferrer">
              Chart.js
            </a>
          </div>
        </Info> */}
      </header>

      <div className="mt-2 pl-2">
        {/* img */}
        <div className="flex justify-center p-5">
          <img src={Image06} className="" alt="Popular Activities by Age" />
        </div>
        {/* suggest */}
        <div className="text-lg font-bold px-6 underline">Suggestions</div>
        <ul className="text-sm mt-2 pb-6 pr-6 pl-10 list-disc">
          <li className="">Xmas Gifting mission, Lucky Draws are top activity count by users of all ages!</li>
          {/* <li>Link these activities to product buying!</li> */}
          <li>Recommend products in those pages.</li>
          {/* <li>Buy/Redeem these affordable products to unlock different tiers of gifting/mission.</li> */}
          <li>Buy product to have more entries in lucky draw.</li>
        </ul>
      </div>
    </div>
  );
}

export default PopularActivity;
