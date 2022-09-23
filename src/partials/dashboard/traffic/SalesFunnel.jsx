import React, { useState, useEffect } from "react";
import Info from "../../../utils/Info";
import RealtimeChart from "../../../charts/RealtimeChart";
import FunnelImage from "../../../images/salesfunnel.png";

// Import utilities
import { tailwindConfig, hexToRGB } from "../../../utils/Utils";

function SalesFunnel() {
  // IMPORTANT:
  // Code below is for demo purpose only, and it's not covered by support.
  // If you need to replace dummy data with real data,
  // refer to Chart.js documentation: https://www.chartjs.org/docs/latest

  return (
    <div className="flex flex-col col-span-full sm:col-span-6  bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100 flex items-center">
        <h2 className="font-semibold text-slate-800">Sales Funnel</h2>
        <Info className="ml-2" containerClassName="min-w-44">
          <div className="text-xs text-center">
            The sales funnel is a representation of the sales process. It helps you understand customer's preference to your products and room for improvement. 
          </div>
        </Info>
      </header>
      <div className="flex p-5">See where your customers drop off</div>
      <div className="flex justify-center p-5">
        <img src={FunnelImage} className="" alt="Activity by Event Customer Count Chart" />
      </div>
    </div>
  );
}

export default SalesFunnel;
