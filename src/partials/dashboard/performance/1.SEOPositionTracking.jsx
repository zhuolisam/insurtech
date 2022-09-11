import React from "react";

function SEOPositionTracking() {
  return (
    <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Your Top Performing Keywords</h2>
      </header>
      <div className="p-3">
        <h2 className="ml-2 mb-4 text-slate-500">Customers find you with these keywords!</h2>

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
                {/* <th className="p-2">
                  <div className="font-semibold text-center">Traffic</div>
                </th> */}
                <th className="p-2">
                  <div className="font-semibold text-center">Volume</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Visibility</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm font-medium divide-y divide-slate-100">
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-slate-800">fwd</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">
                    1<span className="text-slate-400"> 0</span>
                  </div>
                </td>
                {/* <td className="p-2">
                  <div className="text-center text-green-500">20.22%</div>
                </td> */}
                <td className="p-2">
                  <div className="text-center">18,100</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">6.52%</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-slate-800">omicron病徵</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">
                    2<span className="text-red-500"> &#8595;1</span>
                  </div>
                </td>
                {/* <td className="p-2">
                  <div className="text-center text-green-500">5.31%</div>
                </td> */}
                <td className="p-2">
                  <div className="text-center">8,100</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">2.61%</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-slate-800">omicron 病徵</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">
                    3<span className="text-red-500"> &#8595;1</span>
                  </div>
                </td>
                {/* <td className="p-2">
                  <div className="text-center text-green-500">5.09%</div>
                </td> */}
                <td className="p-2">
                  <div className="text-center">40,500</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">5.90%</div>
                </td>
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
                    10
                    <span className="text-green-500"> &#8593;1</span>
                  </div>
                </td>
                {/* <td className="p-2">
                  <div className="text-center text-green-500">4.91%</div>
                </td> */}
                <td className="p-2">
                  <div className="text-center">4,400</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">1.51%</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SEOPositionTracking;
