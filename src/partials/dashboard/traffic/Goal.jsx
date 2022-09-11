import React from "react";

function Goal() {
  const pages = [
    { pageName: "/online-insurance/", conversionRate: "22%", conversion: "122,024",bounceRate:"80.9%" },
    { pageName: "/online-insurance/online-promotions/", conversionRate: "19.6%", conversion: "122,024",bounceRate:"45.3%" },
    { pageName: "/online-insurance/term-critical-illness", conversionRate: "22%", conversion: "111,891",bounceRate:"50.5%" },
    { pageName: "/", conversionRate: "13.2%", conversion: "80,543",bounceRate:"38.9%" },
    { pageName: "fwdmax.fwd.com.hk/", conversionRate: "3.2%", conversion: "70,891",bounceRate:"34.7%" },
    { pageName: "/blog/", conversionRate: "5.2%", conversion: "50,891",bounceRate:"30.5%" },
    { pageName: "/claims/", conversionRate: "2.1%", conversion: "43,234",bounceRate:"70.5%" },
  ];

  return (
    <div className="col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="flex justify-between px-5 py-4 border-b border-slate-100 ">
        <h2 className="font-semibold text-slate-800">How are you performing against your goals?</h2>
        
        <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white px-3 py-1">
          <svg className="w-2 h-2 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
            <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
          </svg>
          <span className="hidden xs:block ml-2">Add goal</span>
        </button>
      </header>

      <div className="p-3">
        <div className="flex pb-6 mx-32 gap-x-2 justify-between">
          {/* Chart */}
          <div className="flex flex-col justify-center items-center gap-y-2">
            <h1 className="text-xs  font-medium ">Goals Completed</h1>
            <h2 className="text-3xl font-bold text-slate-800">12,374,956</h2>
          </div>

          <div className="flex flex-col justify-center gap-y-2">
            <h1 className="text-xs text-slate-800 font-medium">Goal Conversion Rate</h1>
              <h2 className="text-3xl relative text-center font-bold text-slate-800">
                77.2%<span className="absolute text-green-500 text-xs jusityf-center"> &#8593;2.4%</span>
              </h2>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">Goals</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Conversion Rate</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Completion</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Bounce Rate</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm font-medium divide-y divide-slate-100">
              {pages.map((page, index) => (
                <tr key={index}>
                  <td className="p-2">
                    <div className="flex items-center">
                      <div>{page.pageName}</div>
                    </div>
                  </td>
                  <td className="p-2 items-center">
                    <div className="text-green-500 text-center">{page.conversionRate}</div>
                  </td>
                  <td className="p-2 items-center">
                    <div className="text-center">{page.conversion}</div>
                  </td>
                  <td className="p-2 items-center">
                    <div className="text-red-400 text-center">{page.bounceRate}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Goal;
