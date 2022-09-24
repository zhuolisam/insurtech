import React, { useState, useEffect } from "react";
import Info from "../../../utils/Info";
import RealtimeChart from "../../../charts/RealtimeChart";
import RetentionImage from "../../../images/retentionrate.png";
import FilterMoreButton from "../../actions/FilterButton";

// Import utilities
import { tailwindConfig, hexToRGB } from "../../../utils/Utils";

function RetentionRate() {
  // IMPORTANT:
  // Code below is for demo purpose only, and it's not covered by support.
  // If you need to replace dummy data with real data,
  // refer to Chart.js documentation: https://www.chartjs.org/docs/latest

  return (
    <div className="flex flex-col col-span-full sm:col-span-12 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
        <div className="flex items-center">
          <h2 className="font-semibold text-slate-800">How long do your referrees stay?</h2>
          <Info className="ml-2" containerClassName="min-w-44">
            <div className="text-xs text-center">Retention rate is the percentage of users who continue to use your product after a certain amount of time. It is a good indicator of how sticky your product is.</div>
          </Info>
        </div>
        <FilterMoreButton />
      </header>
      <div className="flex grow justify-center p-5">
        <img src={RetentionImage} className="w-[100%]" alt="Activity by Event Customer Count Chart" />
      </div>
      <div className="text-lg font-bold px-6 underline">Suggestions</div>
      <ul className="text-sm mt-2 pb-6 pr-6 pl-10 list-disc">
        <li>
          <p>
            Referees in <strong>2021 Q4</strong> has higher retention rate!
          </p>
        </li>
        <li>
          <p>
            Referees who participated in <strong>lucky draw</strong> has higher retention rate!
            {/* <strong>Mission</strong>-type Redemptions are a huge success! We suggest having more similar campaigns! */}
          </p>
        </li>
      </ul>
    </div>
  );
}

export default RetentionRate;
