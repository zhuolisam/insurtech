import React, { useState, useEffect } from "react";
import Info from "../../../utils/Info";
import RealtimeChart from "../../../charts/RealtimeChart";
import Image01 from "../../../images/activitybycustomercount.png";

// Import utilities
import { tailwindConfig, hexToRGB } from "../../../utils/Utils";

function UserBehaviour() {
  // IMPORTANT:
  // Code below is for demo purpose only, and it's not covered by support.
  // If you need to replace dummy data with real data,
  // refer to Chart.js documentation: https://www.chartjs.org/docs/latest

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100 flex items-center">
        <h2 className="font-semibold text-slate-800">Activity by Customer Count</h2>
        {/* <Info className="ml-2" containerClassName="min-w-44">
          <div className="text-sm text-center">
            Built with{" "}
            <a className="underline" href="https://www.chartjs.org/" target="_blank" rel="noreferrer">
              Chart.js
            </a>
          </div>
        </Info> */}
      </header>

      <div className="mt-6 pl-2">
        {/* img */}
        <div className="flex justify-center px-5">
          <img src={Image01} className="" alt="Activity by Event Customer Count Chart" />
        </div>
        {/* suggest */}
        <div className="text-lg font-bold mt-4 px-6 underline">Suggestions</div>
        <ul className="text-sm mt-2 pb-6 pr-6 pl-10 list-disc">
          <li className="">
            <p>
              <strong> RegisterLuckyDraws</strong> are an effective way to boost user activity, followed by MemberRatedContent and MemberSharedArticle.
            </p>
          </li>
          <li className="">Consider reducing length of product typewriting.</li>
          <li className="">Increase size of input boxes.</li>
        </ul>
      </div>
    </div>
  );
}

export default UserBehaviour;
