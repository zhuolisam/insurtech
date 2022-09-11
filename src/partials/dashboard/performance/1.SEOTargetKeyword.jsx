import React from "react";
import Info from "../../../utils/Info";

function SEOTargetKeyword() {
  return (
    <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100 flex justify-between items-center">
        <div className="flex gap-3 items-center">
        <h2 className="font-semibold text-slate-800">Keywords You Want to Boost</h2>
        <Info>
          <p className="text-xs text-slate-600w-20">Add the keywords you want to boost in search results.</p>
        </Info>
        </div>
        <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
          <svg className="w-2 h-2 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
            <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
          </svg>
          <span className="hidden xs:block ml-2">Add keyword</span>
        </button>
      </header>

      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">Keyword</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Position</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Volume</div>
                </th>
                {/* <th className="p-2">
                  <div className="font-semibold text-center">Visibility</div>
                </th> */}
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm font-medium divide-y divide-slate-100">
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-slate-800">insurance</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">89</div>
                </td>

                <td className="p-2">
                  <div className="text-center">10</div>
                </td>
                {/* <td className="p-2">
                  <div className="text-center text-sky-500">6.52%</div>
                </td> */}
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-slate-800">life insurance</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">129</div>
                </td>

                <td className="p-2">
                  <div className="text-center">4</div>
                </td>
                {/* <td className="p-2">
                  <div className="text-center text-sky-500">2.61%</div>
                </td> */}
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-slate-800">保健保險</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">354</div>
                </td>

                <td className="p-2">
                  <div className="text-center">68</div>
                </td>
                {/* <td className="p-2">
                  <div className="text-center text-sky-500">5.90%</div>
                </td> */}
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-slate-800">人壽保險</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">
                    75
                  </div>
                </td>

                <td className="p-2">
                  <div className="text-center">35</div>
                </td>
                {/* <td className="p-2">
                  <div className="text-center text-sky-500">1.51%</div>
                </td> */}
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-slate-800">保險</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">
                    183
                  </div>
                </td>

                <td className="p-2">
                  <div className="text-center">40</div>
                </td>
                {/* <td className="p-2">
                  <div className="text-center text-sky-500">1.51%</div>
                </td> */}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SEOTargetKeyword;
