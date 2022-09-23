import React, { useState, useEffect, useRef } from "react";
import LineChart from "../../../charts/LineChart04";
import Info from "../../../utils/Info";

// Import utilities
import { tailwindConfig } from "../../../utils/Utils";
import { GetCsvData } from "../../../utils/Utils";

function SEOImprovement() {
  // CURRENT_DATA
  const FINAL_CURRENT_DATA = [
    {
      keyword: "insurance",
      position: "89",
      volume: "10",
      chartData: {
        labels: ["03-01-2022", "04-01-2022", "05-01-2022", "06-01-2022", "07-01-2022", "08-01-2022", "09-01-2022"],
        datasets: [
          // Indigo line
          {
            label: "fwd",
            data: [7, 6, 7, 9, 10, 6, 1],
            borderColor: tailwindConfig().theme.colors.indigo[500],
            fill: false,
            borderWidth: 2,
            tension: 0,
            pointRadius: 0,
            pointHoverRadius: 3,
            pointBackgroundColor: tailwindConfig().theme.colors.indigo[500],
          },
          // Blue line
          {
            label: "aia",
            data: [3, 5, 4, 3, 4, 4, 5],
            borderColor: tailwindConfig().theme.colors.blue[400],
            fill: false,
            borderWidth: 2,
            tension: 0,
            pointRadius: 0,
            pointHoverRadius: 3,
            pointBackgroundColor: tailwindConfig().theme.colors.blue[400],
          },
          // Green line
          {
            label: "axa",
            data: [2, 4, 3, 4, 3, 2, 7],
            borderColor: tailwindConfig().theme.colors.green[500],
            fill: false,
            borderWidth: 2,
            tension: 0,
            pointRadius: 0,
            pointHoverRadius: 3,
            pointBackgroundColor: tailwindConfig().theme.colors.green[500],
          },
          {
            label: "great eastern",
            data: [11, 7, 1, 8, 10, 11, 20],
            borderColor: tailwindConfig().theme.colors.orange[500],
            fill: false,
            borderWidth: 2,
            tension: 0,
            pointRadius: 0,
            pointHoverRadius: 3,
            pointBackgroundColor: tailwindConfig().theme.colors.orange[500],
          },
          {
            label: "allianz",
            data: [10, 5, 3, 7, 10, 13, 16],
            borderColor: tailwindConfig().theme.colors.yellow[500],
            fill: false,
            borderWidth: 2,
            tension: 0,
            pointRadius: 0,
            pointHoverRadius: 3,
            pointBackgroundColor: tailwindConfig().theme.colors.yellow[500],
          },
        ],
      },
    },
    {
      keyword: "life insurance",
      position: "129",
      volume: "4",
      chartData: {
        labels: ["03-01-2022", "04-01-2022", "05-01-2022", "06-01-2022", "07-01-2022", "08-01-2022", "09-01-2022"],
        datasets: [
          // Indigo line
          {
            label: "fwd",
            data: [7, 6, 7, 9, 10, 10, 1],
            borderColor: tailwindConfig().theme.colors.indigo[500],
            fill: false,
            borderWidth: 2,
            tension: 0,
            pointRadius: 0,
            pointHoverRadius: 3,
            pointBackgroundColor: tailwindConfig().theme.colors.indigo[500],
          },
          // Blue line
          {
            label: "aia",
            data: [3, 5, 4, 3, 4, 4, 5],
            borderColor: tailwindConfig().theme.colors.blue[400],
            fill: false,
            borderWidth: 2,
            tension: 0,
            pointRadius: 0,
            pointHoverRadius: 3,
            pointBackgroundColor: tailwindConfig().theme.colors.blue[400],
          },
          // Green line
          {
            label: "axa",
            data: [2, 4, 3, 4, 3, 2, 3],
            borderColor: tailwindConfig().theme.colors.green[500],
            fill: false,
            borderWidth: 2,
            tension: 0,
            pointRadius: 0,
            pointHoverRadius: 3,
            pointBackgroundColor: tailwindConfig().theme.colors.green[500],
          },
          {
            label: "great eastern",
            data: [11, 7, 1, 8, 10, 11, 20],
            borderColor: tailwindConfig().theme.colors.orange[500],
            fill: false,
            borderWidth: 2,
            tension: 0,
            pointRadius: 0,
            pointHoverRadius: 3,
            pointBackgroundColor: tailwindConfig().theme.colors.orange[500],
          },
          {
            label: "allianz",
            data: [10, 5, 3, 7, 10, 13, 16],
            borderColor: tailwindConfig().theme.colors.yellow[500],
            fill: false,
            borderWidth: 2,
            tension: 0,
            pointRadius: 0,
            pointHoverRadius: 3,
            pointBackgroundColor: tailwindConfig().theme.colors.yellow[500],
          },
        ],
      },
    },
    {
      keyword: "medical protection",
      position: "354",
      volume: "68",
    },
    {
      keyword: "healthcare",
      position: "75",
      volume: "35",
    },
    {
      keyword: "covid",
      position: "20",
      volume: "40",
    },
  ];

  const [fwdposition, setFwdposition] = React.useState(FINAL_CURRENT_DATA.slice(0, 1));

  // IMPROVE_DATA
  const FINAL_IMPROVE_DATA = [
    {
      name: "insurance",
      suggest: [
        {
          suggestedKeyword: "policy of insurance",
          volume: "40",
          keywordDifficulty: "27",
          competitorPosition: "2",
          competitorUrl: "https://www.prudential.com.my/en/",
        },
        {
          suggestedKeyword: "what is insurance",
          volume: "60",
          keywordDifficulty: "35",
          competitorPosition: "1.5",
          competitorUrl: "https://www.investopedia.com/terms/i/insurance.asp",
        },
        {
          suggestedKeyword: "life term insurance",
          volume: "350",
          keywordDifficulty: "6",
          competitorPosition: "1",
          competitorUrl: "https://ringgitplus.com/en/term-life-insurance/",
        },
      ],
    },
    {
      name: "life insurance",
      suggest: [
        {
          suggestedKeyword: "insurance company",
          volume: "150",
          keywordDifficulty: "24",
          competitorPosition: "1",
          competitorUrl: "https://www.etiqa.com.my/v2/homepage",
        },
        {
          suggestedKeyword: "what is insurance",
          volume: "60",
          keywordDifficulty: "35",
          competitorPosition: "1.5",
          competitorUrl: "https://www.investopedia.com/terms/i/insurance.asp",
        },
        {
          suggestedKeyword: "life assurance",
          volume: "80",
          keywordDifficulty: "26",
          competitorPosition: "68",
          competitorUrl: "https://www.greateasternlife.com/my/en/index.html",
        },
      ],
    },
    {
      name: "medical protection",
      suggest: [
        {
          suggestedKeyword: "policy of insurance",
          volume: "40",
          keywordDifficulty: "27",
          competitorPosition: "2",
          competitorUrl: "https://www.prudential.com.my/en/",
        },
        {
          suggestedKeyword: "what is insurance",
          volume: "60",
          keywordDifficulty: "35",
          competitorPosition: "1.5",
          competitorUrl: "https://www.investopedia.com/terms/i/insurance.asp",
        },
        {
          suggestedKeyword: "life term insurance",
          volume: "350",
          keywordDifficulty: "6",
          competitorPosition: "1",
          competitorUrl: "https://ringgitplus.com/en/term-life-insurance/",
        },
      ],
    },
  ];

  const [suggestedKeyword, setSuggestedKeyword] = React.useState(FINAL_IMPROVE_DATA.slice(0, 0));

  // CHART_DATA
  const FINAL_CHART_DATA = {
    labels: ["03-01-2022", "04-01-2022", "05-01-2022", "06-01-2022", "07-01-2022", "08-01-2022", "09-01-2022"],
    datasets: [
      // Indigo line
      {
        label: "fwd",
        data: [7, 6, 7, 9, 10, 10, 1],
        borderColor: tailwindConfig().theme.colors.indigo[500],
        fill: false,
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.indigo[500],
      },
      // Blue line
      {
        label: "omicron病徵",
        data: [3, 5, 4, 3, 4, 4, 2],
        borderColor: tailwindConfig().theme.colors.blue[400],
        fill: false,
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.blue[400],
      },
      // Green line
      {
        label: "omicron 病徵",
        data: [2, 4, 3, 4, 3, 2, 3],
        borderColor: tailwindConfig().theme.colors.green[500],
        fill: false,
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.green[500],
      },
      {
        label: "保險",
        data: [11, 7, 1, 8, 10, 11, 10],
        borderColor: tailwindConfig().theme.colors.orange[500],
        fill: false,
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.orange[500],
      },
    ],
  };
  const [chartData, setChartData] = React.useState(FINAL_CURRENT_DATA[0].chartData);

  //OTHER STATES
  const [keyword, setKeyword] = React.useState("");
  const [titleKeyword, setTitleKeyword] = React.useState(FINAL_CURRENT_DATA[0].keyword);

  const [isLoading1, setIsLoading1] = React.useState(false);
  const [isLoading2, setIsLoading2] = React.useState(false);

  const timerRef = useRef(null);

  useEffect(() => {
    // Clear the interval when the component unmounts
    return () => clearTimeout(timerRef.current);
  }, []);

  // handleInputChange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setKeyword(value);
  };

  // HandleChartDataChange
  const handleChartDataChange = (e, itemName) => {
    e.preventDefault();
    const chartResult = FINAL_CURRENT_DATA.filter((item) => item.keyword === itemName);
    if (chartResult.length > 0) {
      setChartData(chartResult[0].chartData);
      setTitleKeyword(chartResult[0].keyword);
    }
  };

  // handleKeywordSearch
  const handleSearchKeyword = (e) => {
    e.preventDefault();
    if (fwdposition.filter((item) => item.keyword === keyword).length > 0) {
      return;
    }
    setIsLoading1(true);
    timerRef.current = setTimeout(() => {
      setIsLoading1(false);
    }, 1000);

    const result = FINAL_CURRENT_DATA.filter((item) => item.keyword === keyword)[0];

    if (result) {
      setFwdposition([...fwdposition, result]);
    }

    setKeyword("");
  };

  // handleBoost
  const handleBoost = (e, itemName) => {
    if (suggestedKeyword.filter((item) => item.name === itemName).length > 0) {
      return;
    }
    setIsLoading2(true);
    timerRef.current = setTimeout(() => {
      setIsLoading2(false);
    }, 1000);
    const result2 = FINAL_IMPROVE_DATA.filter((item) => item.name === itemName)[0];
    if (result2) {
      setSuggestedKeyword([...suggestedKeyword, result2]);
    }
  };

  return (
    <div className="col-span-full xl:col-span-12 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100 flex items-center gap-3 justify-between pr-16">
        <div className="flex flex-col justify-center">
          <h2 className="font-semibold text-slate-800">How to Improve Your SEO Rankings?</h2>
          <span className="text-[10px]">
            See how this works using &#32;{" "}
            <a className="underline" href="https://www.youtube.com/watch?v=l2k4eF6ufEQ" target="_blank" rel="noreferrer">
              web robots
            </a>
          </span>
          {/* <Info containerClassName="min-w-44">
            <p className="text-xs text-slate-600w-20">
              See how do we get these suggested keywords for you using &#32;{" "}
              <a className="underline" href="https://www.youtube.com/watch?v=l2k4eF6ufEQ" target="_blank" rel="noreferrer">
                web robots
              </a>
            </p>
          </Info> */}
        </div>
      </header>

      {/* Content */}
      <div className="p-3">
        <div className="w-full flex justify-end items-center pb-2">
          {/* <h2 className="ml-2 mb-4 text-slate-500">Check your position of your target keywords!</h2> */}
          <div className="flex">
            <input name="toSearch" type="text" placeholder="keyword" value={keyword} onChange={handleChange} className="rounded-tl-md rounded-bl-md border-2 border-indigo-500 font-normal text-sm leading-5 shadow-sm px-2 focus:border-indigo-600 max-w-[10rem]"/>
            <button className="btn rounded-tl-none rounded-bl-none bg-indigo-500 hover:bg-indigo-600 text-white" onClick={handleSearchKeyword}>
              <svg className="w-2 h-2 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
              </svg>
              <span className="hidden xs:block ml-2">Search</span>
            </button>
          </div>
        </div>

        {/*Chart and Table  */}
        {/* Chart */}
        <div className="flex flex-col md:flex-row">
          <LineChart className="flex-1" cdata={chartData} width={595} height={248} format={false} title={titleKeyword} perctChange="" />
          {/* Table */}
          <div className="overflow-x-auto flex-1">
            <table className="table-auto w-full">
              {/* Table header */}
              <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
                <tr>
                  <th className="p-2">
                    <div className="font-semibold text-left">Keyword</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-center">FWD's Position</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-center">Volume</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-center"></div>
                  </th>
                </tr>
              </thead>
              {isLoading1 ? (
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="p-2" colspan="3">
                      <div className="flex justify-center items-center h-20">Loading...</div>
                    </td>
                  </tr>
                </tbody>
              ) : (
                <tbody className="text-sm font-medium divide-y divide-slate-100">
                  {/* Row */}
                  {fwdposition.map((item, index) => (
                    <tr key={index} className=" cursor-pointer">
                      <td className="p-2">
                        <div className="text-slate-800 hover:pointer hover:text-indigo-600" onClick={(e) => handleChartDataChange(e, item.keyword)}>
                          {item.keyword}
                        </div>
                      </td>
                      <td className="p-2">
                        <div className="text-center">{item.position}</div>
                      </td>
                      <td className="p-2">
                        <div className="text-center">{item.volume}</div>
                      </td>
                      <td className="p-2 flex justify-center items-center">
                        <button className="btn-xs bg-indigo-500 hover:bg-indigo-600 text-white" onClick={(e) => handleBoost(e, item.keyword)}>
                          <span className="hidden xs:block">Boost</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              )}
            </table>
          </div>
        </div>

        <div className="flex justify-between pr-12">
          <h2 className="mt-10 ml-2 mb-4 ">Include the suggested keywords in your product pages!</h2>
        </div>

        {/* Table */}
        <div className="overflow-x-auto text-ellipsis px-2">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">Product Keyword</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold tesxt-slate-600 text-indigo-600 text-left ">Suggested Keyword</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-left">Volume</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-left">Keyword Difficulty</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-left">Competitor's Position</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-left">Competitor's URL</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            {isLoading2 ? (
              <tbody className=" divide-y divide-slate-100">
                <tr>
                  <td className="p-2" colspan="6">
                    <div className="flex justify-center items-center h-20">Loading...</div>
                  </td>
                </tr>
              </tbody>
            ) : (
              <tbody className="text-sm font-medium divide-y divide-slate-100">
                {/* Row */}
                {suggestedKeyword.map((keywordd, index) => {
                  return (
                    <>
                      <tr key={index}>
                        <td className="p-2" rowspan={keywordd.suggest.length + 1}>
                          <div className="text-slate-800">{keywordd.name}</div>
                        </td>
                        <td className="p-2"></td>
                        <td className="p-2"></td>
                        <td className="p-2"></td>
                        <td className="p-2"></td>
                        <td className="p-2"></td>
                      </tr>
                      {keywordd.suggest.map((item, index) => {
                        return (
                          <tr>
                            <td className="p-2">
                              <div className="">{item.suggestedKeyword}</div>
                            </td>
                            <td className="p-2">
                              <div className="">{item.volume}</div>
                            </td>
                            <td className="p-2">
                              <div className="">{item.keywordDifficulty}</div>
                            </td>
                            <td className="p-2">
                              <div className="">{item.competitorPosition}</div>
                            </td>
                            <td className="p-2 max-w-xs text-ellipsis">
                              <div className="">{item.competitorUrl}</div>
                            </td>
                          </tr>
                        );
                      })}
                    </>
                  );
                })}
              </tbody>
            )}
          </table>
        </div>
        {/* <div className="w-full flex justify-end pt-6 px-6">
          <div>watch how these keywords are extracted </div>
        </div> */}
      </div>
    </div>
  );
}

export default SEOImprovement;
