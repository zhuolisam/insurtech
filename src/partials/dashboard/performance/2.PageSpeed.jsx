import React from "react";
import { Link } from "react-router-dom";
import LineChart from "../../../charts/LineChart01";
import Icon from "../../../images/icon-01.svg";
import EditMenu from "../../EditMenu";
import Info from "../../../utils/Info";

// Import utilities
import { tailwindConfig, hexToRGB } from "../../../utils/Utils";

function PageSpeed({ title, keyNumber, perctChange, Image, color, tooltip }) {
  const chartData = {
    labels: [
      "12-01-2020",
      "01-01-2021",
      "02-01-2021",
      "03-01-2021",
      "04-01-2021",
      "05-01-2021",
      "06-01-2021",
      "07-01-2021",
      "08-01-2021",
      "09-01-2021",
      "10-01-2021",
      "11-01-2021",
      "12-01-2021",
      "01-01-2022",
      "02-01-2022",
      "03-01-2022",
      "04-01-2022",
      "05-01-2022",
      "06-01-2022",
      "07-01-2022",
      "08-01-2022",
      "09-01-2022",
      "10-01-2022",
      "11-01-2022",
      "12-01-2022",
      "01-01-2023",
    ],
    datasets: [
      // Indigo line
      {
        data: [732, 610, 610, 504, 504, 504, 349, 349, 504, 342, 504, 610, 391, 192, 154, 273, 191, 191, 126, 263, 349, 252, 423, 622, 470, 532],
        fill: true,
        backgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.blue[500])}, 0.08)`,
        borderColor: tailwindConfig().theme.colors.indigo[500],
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.indigo[500],
        clip: 20,
      },
      // Gray line
      {
        data: [532, 532, 532, 404, 404, 314, 314, 314, 314, 314, 234, 314, 234, 234, 314, 314, 314, 388, 314, 202, 202, 202, 202, 314, 720, 642],
        borderColor: tailwindConfig().theme.colors.slate[300],
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.slate[300],
        clip: 20,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-sm rounded-md border border-slate-200">
      <div className="px-5 py-5">
        <header className="flex justify-start items-start mb-2">
          {/* Icon */}
          {/* <img src={Icon} width="32" height="32" alt="Icon 01" /> */}
          {/* Menu button */}
          <h2 className="text-base text-slate-500 mb-2">{title}</h2>
          <Info className="ml-2 mt-1" containerClassName="min-w-44">
            <div className="text-sm text-center">{tooltip}</div>
          </Info>
        </header>
        {/* <div className="text-xs font-semibold text-slate-400 uppercase mb-1">{subtitle}}</div> */}
        <div className="flex items-start">
          <div className="text-3xl font-bold text-slate-800 mr-2">{keyNumber}</div>
          <div className={`text-sm font-semibold text-${color}-500 px-1.5 rounded-full`}>{perctChange}</div>
        </div>
        <div className="">
          <img src={Image} alt="" className="max-w-[70%]" />
        </div>
      </div>
    </div>
  );
}

export default PageSpeed;
