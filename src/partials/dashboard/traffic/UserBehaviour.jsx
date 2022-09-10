import React from 'react';
import { Link } from 'react-router-dom';
import EditMenu from '../../EditMenu';

// Import utilities
import { tailwindConfig, hexToRGB } from '../../../utils/Utils';

function UserBehaviour({title,subtitle, keyNumber, perctChange}) {

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-12 bg-white shadow-sm rounded-md border border-slate-200">
      <div className="px-5 py-5">
        <header className="flex justify-between items-start mb-2">
          {/* Icon */}
          {/* <img src={Icon} width="32" height="32" alt="Icon 01" /> */}
          {/* Menu button */}
          <h2 className="text-base text-slate-500 mb-2">{title}</h2>
          
          <EditMenu className="relative inline-flex justify-self-end">
            <li>
              <Link className="font-medium text-sm text-slate-600 hover:text-slate-800 flex py-1 px-3" to="#0">Option 1</Link>
            </li>
            <li>
              <Link className="font-medium text-sm text-slate-600 hover:text-slate-800 flex py-1 px-3" to="#0">Option 2</Link>
            </li>
            <li>
              <Link className="font-medium text-sm text-rose-500 hover:text-rose-600 flex py-1 px-3" to="#0">Remove</Link>
            </li>
          </EditMenu>
        </header>
        {/* <div className="text-xs font-semibold text-slate-400 uppercase mb-1">{subtitle}}</div> */}
        
        
      </div>
      <div>
        <img src={"../../../images/activitybycustomercount.png"} className="w-full" alt="asd"/>
      </div>
      {/* Chart built with Chart.js 3 */}
      {/* <div className="grow"> */}
        {/* Change the height attribute to adjust the chart height */}
        {/* <LineChart data={chartData} width={389} height={128} /> */}
      {/* </div> */}
    </div>
  );
}

export default UserBehaviour;
