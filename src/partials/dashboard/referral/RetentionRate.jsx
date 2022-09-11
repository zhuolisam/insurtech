import React, { useState, useEffect } from 'react';
import Info from '../../../utils/Info';
import RealtimeChart from '../../../charts/RealtimeChart';
import RetentionImage from "../../../images/retentionrate.png";

// Import utilities
import { tailwindConfig, hexToRGB } from '../../../utils/Utils';

function RetentionRate() {

  // IMPORTANT:
  // Code below is for demo purpose only, and it's not covered by support.
  // If you need to replace dummy data with real data,
  // refer to Chart.js documentation: https://www.chartjs.org/docs/latest


  return (
    <div className="flex flex-col col-span-full sm:col-span-12 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100 flex items-center">
        <h2 className="font-semibold text-slate-800">How long do your referrees stay?</h2>
        <Info className="ml-2" containerClassName="min-w-44">
          <div className="text-sm text-center">Built with <a className="underline" href="https://www.chartjs.org/" target="_blank" rel="noreferrer">Chart.js</a></div>
        </Info>
      </header>
      <div className="flex grow justify-center p-5">
          <img src={RetentionImage} className="w-[100%]" alt="Activity by Event Customer Count Chart" />
        </div>
    </div>
  );
}

export default RetentionRate;
