import React, { useState, useEffect } from 'react';
import Info from '../../../utils/Info';
import RealtimeChart from '../../../charts/RealtimeChart';
import Image07 from "../../../images/paidvspolicyduration.png";

// Import utilities
import { tailwindConfig, hexToRGB } from '../../../utils/Utils';

function ActivityCategory() {

  // IMPORTANT:
  // Code below is for demo purpose only, and it's not covered by support.
  // If you need to replace dummy data with real data,
  // refer to Chart.js documentation: https://www.chartjs.org/docs/latest


  return (
    <div className="flex flex-col col-span-full sm:col-span-12 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100 flex items-center">
        <h2 className="font-semibold text-slate-800">Total Premium Paid vs Policy Duration by Product Category & Age</h2>
        {/* <Info className="ml-2" containerClassName="min-w-44">
          <div className="text-sm text-center">Built with <a className="underline" href="https://www.chartjs.org/" target="_blank" rel="noreferrer">Chart.js</a></div>
        </Info> */}
      </header>
      <div className="mt-2 pl-2">
        {/* img */}
        <div className="flex justify-center p-7">
          <img src={Image07} className="" alt="Total Premium Paid vs Policy Duration by Product Category & Age" />
        </div>
        {/* suggest */}
        <div className="text-lg font-bold mt-4 px-6 underline">Suggestions</div>
        <ul className="text-sm mt-2 pb-6 pr-6 pl-10 list-disc">
          <li className="">
            <p>
            Customers of Age 46-60 and &gt;60 contribute to majority of Premium Paid across all Products.
            </p>
          </li>
          <li>
            <p>
            <strong>ECI</strong>, <strong>PA</strong>, <strong>ENG</strong> Products showed a dip in Avg Customer Policy Duration.
            </p>
          </li>
          <li>
            <p>
            <strong>Lifetime</strong> Policy Duration products have consistently higher Total Premium Paid!
            </p>
          </li>
        </ul>
      </div>

    </div>
  );
}

export default ActivityCategory;