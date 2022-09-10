import React from "react";

import { GetCsvData } from "../../../utils/Utils";

function SEOImprovement() {
  const results = GetCsvData("./data/ahrefs.csv");
  console.log(results);

  return (
    <div className="col-span-full xl:col-span-12 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100 flex items-center">
        <h2 className="font-semibold text-slate-800">How to Improve Your SEO?</h2>
      </header>

      <div className="p-3">
        {/* <div className="font-semibold text-left">insurance</div> */}

        {/* Table */}
        <div className="overflow-x-auto text-ellipsis">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">Product Keyword</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-left">Suggested Keyword</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-left">Volume</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-left">Keyword Difficulty</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-left">Position</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-left">URL</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm font-medium divide-y divide-slate-100">
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="text-slate-800">insurance</div>
                </td>
                <td className="p-2">
                  <div className="">policy of insurance</div>
                </td>
                <td className="p-2">
                  <div className="">40</div>
                </td>
                <td className="p-2">
                  <div className="">27</div>
                </td>
                <td className="p-2">
                  <div className="">8</div>
                </td>
                <td className="p-2 max-w-xs text-ellipsis">
                  <div className="">https://www.investopedia.com/terms/i/insurance.asp</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="text-slate-800">insurance</div>
                </td>
                <td className="p-2">
                  <div className="">policy of insurance</div>
                </td>
                <td className="p-2">
                  <div className="">40</div>
                </td>
                <td className="p-2">
                  <div className="">27</div>
                </td>
                <td className="p-2">
                  <div className="">8</div>
                </td>
                <td className="p-2 max-w-xs text-ellipsis">
                  <div className="">https://www.investopedia.com/terms/i/insurance.asp</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="text-slate-800">insurance</div>
                </td>
                <td className="p-2">
                  <div className="">policy of insurance</div>
                </td>
                <td className="p-2">
                  <div className="">40</div>
                </td>
                <td className="p-2">
                  <div className="">27</div>
                </td>
                <td className="p-2">
                  <div className="">8</div>
                </td>
                <td className="p-2 max-w-xs text-ellipsis">
                  <div className="">https://www.investopedia.com/terms/i/insurance.asp</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="text-slate-800">insurance</div>
                </td>
                <td className="p-2">
                  <div className="">policy of insurance</div>
                </td>
                <td className="p-2">
                  <div className="">40</div>
                </td>
                <td className="p-2">
                  <div className="">27</div>
                </td>
                <td className="p-2">
                  <div className="">8</div>
                </td>
                <td className="p-2 max-w-xs text-ellipsis">
                  <div className="">https://www.investopedia.com/terms/i/insurance.asp</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="text-slate-800">insurance</div>
                </td>
                <td className="p-2">
                  <div className="">policy of insurance</div>
                </td>
                <td className="p-2">
                  <div className="">40</div>
                </td>
                <td className="p-2">
                  <div className="">27</div>
                </td>
                <td className="p-2">
                  <div className="">8</div>
                </td>
                <td className="p-2 max-w-xs text-ellipsis">
                  <div className="">https://www.investopedia.com/terms/i/insurance.asp</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SEOImprovement;
