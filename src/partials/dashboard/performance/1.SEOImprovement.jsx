import React from "react";

function SEOImprovement() {
  return (
    <div className="col-span-full xl:col-span-12 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100 flex items-center">
        <h2 className="font-semibold text-slate-800">How to Improve?</h2>
      </header>

      <div className="p-3">
        <div className="font-semibold text-left">insurance</div>

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
                  <div className="font-semibold text-center">URL</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Suggested Keyword</div>
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
                  <div className="flex">
                    <div className="text-slate-800">insurance</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="">https://my.clevelandclinic.org/health/diagnostics/21462-covid-19-and-pcr-testing</div>
                </td>
                <td className="p-2">
                  <div className="">pcr test, pcr, pcr covid test, pcr test meaning, pcr swab test, rt pcr test, pcr meaning, what is pcr test, swab test result, swab test</div>
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
                  <div className="text-center">75</div>
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
                  <div className="text-center">183</div>
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

export default SEOImprovement;
