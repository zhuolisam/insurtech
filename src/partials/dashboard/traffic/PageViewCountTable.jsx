import React from "react";

function PageViewCountTable() {
  const pages = [
    { pageName: "/online-insurance/", pageview: '27,384,723' },
    { pageName: "/online-insurance/online-promotions/", pageview: '350,034' },
    { pageName: "/online-insurance/term-critical-illness", pageview: '32,354' },
    { pageName: "/", pageview: '78,955' },
    { pageName: "fwdmax.fwd.com.hk/", pageview: '54,350' },
    { pageName: "/blog/", pageview: '35,000' },
    { pageName: "/claims/", pageview: '4,600' },
    { pageName: "/claims/", pageview: '4,489' },
    { pageName: "/claims/", pageview: '4,390' },
    { pageName: "/claims/", pageview: '4,240' },
  ];

  return (
    <div className="col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">What pages do your users visit?</h2>
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">Page</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Pageviews</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm font-medium divide-y divide-slate-100">
              {pages.map((page, index) => (
                <tr key={index}>
                  <td className="p-2">
                    <div className="flex items-center">
                      <div >{page.pageName}</div>
                    </div>
                  </td>
                  <td className="p-2">
                    <div className="text-center">
                      {page.pageview}
                    </div>
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

export default PageViewCountTable;
