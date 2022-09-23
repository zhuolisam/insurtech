import React, { useState, useEffect, useRef } from "react";
import Info from "../../../utils/Info";

import { GetCsvData } from "../../../utils/Utils";

function SEOImprovement() {
  // const results = GetCsvData("./data/ahrefs.csv");
  // console.log(results);
  const FINAL_CURRENT_DATA = [
    {
      keyword: "insurance",
      position: "89",
      volume: "10",
    },
    {
      keyword: "life insurance",
      position: "129",
      volume: "4",
    },
    {
      keyword: "保健保險",
      position: "354",
      volume: "68",
    },
    {
      keyword: "人壽保險",
      position: "75",
      volume: "35",
    },
    {
      keyword: "保險",
      position: "10",
      volume: "40",
    },
  ];
  const currentData = [
    // Indigo line
    {
      keyword: "insurance",
      position: "89",
      volume: "10",
    },
  ];
  const [fwdposition, setFwdposition] = React.useState(currentData);

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
          suggestedKeyword: "policy of insurance",
          volume: "40",
          keywordDifficulty: "27",
          competitorPosition: "2",
          competitorUrl: "https://www.prudential.com.my/en/",
        },
        {
          suggestedKeyword: "policy of insurance",
          volume: "40",
          keywordDifficulty: "27",
          competitorPosition: "2",
          competitorUrl: "https://www.prudential.com.my/en/",
        },
      ],
    },
    {
      name: "life insurance",
      suggest: [
        {
          suggestedKeyword: "policy of insurance",
          volume: "40",
          keywordDifficulty: "27",
          competitorPosition: "2",
          competitorUrl: "https://www.prudential.com.my/en/",
        },
        {
          suggestedKeyword: "policy of insurance",
          volume: "40",
          keywordDifficulty: "27",
          competitorPosition: "2",
          competitorUrl: "https://www.prudential.com.my/en/",
        },
        {
          suggestedKeyword: "policy of insurance",
          volume: "40",
          keywordDifficulty: "27",
          competitorPosition: "2",
          competitorUrl: "https://www.prudential.com.my/en/",
        },
      ],
    },
  ];

  const improveData = [
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
          suggestedKeyword: "policy of insurance",
          volume: "40",
          keywordDifficulty: "27",
          competitorPosition: "2",
          competitorUrl: "https://www.prudential.com.my/en/",
        },
        {
          suggestedKeyword: "policy of insurance",
          volume: "40",
          keywordDifficulty: "27",
          competitorPosition: "2",
          competitorUrl: "https://www.prudential.com.my/en/",
        },
        {
          suggestedKeyword: "policy of insurance",
          volume: "40",
          keywordDifficulty: "27",
          competitorPosition: "2",
          competitorUrl: "https://www.prudential.com.my/en/",
        },
      ],
    },
  ];

  const [suggestedKeyword, setSuggestedKeyword] = React.useState(improveData);

  const [keyword, setKeyword] = React.useState("");

  const [isLoading, setIsLoading] = React.useState(false);
  const timerRef = useRef(null);
  
  useEffect(() => {
    // Clear the interval when the component unmounts
    return () => clearTimeout(timerRef.current);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setKeyword(value);
  };

  const handleSearchKeyword = (e) => {
    e.preventDefault();
    if (fwdposition.filter((item) => item.keyword === keyword).length > 0) {
      return;
    }
    setIsLoading(true);
    timerRef.current = setTimeout(() => {setIsLoading(false)}, 1000);

    const result = FINAL_CURRENT_DATA.filter((item) => item.keyword === keyword)[0];
    const result2 = FINAL_IMPROVE_DATA.filter((item) => item.name === keyword)[0];
    if (result) {
      setFwdposition([...fwdposition, result]);
    }
    if (result2) {
      setSuggestedKeyword([...suggestedKeyword, result2]);
    }
    setKeyword("");
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
        <div className="flex gap-3">
          <input name="toSearch" type="text" placeholder="keyword" value={keyword} onChange={handleChange} className="rounded-md border-2 border-indigo-500 font-normal text-sm leading-5 shadow-sm px-2 focus:border-indigo-600" />
          <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white" onClick={handleSearchKeyword}>
            <svg className="w-2 h-2 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
              <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
            </svg>
            <span className="hidden xs:block ml-2">Search keyword</span>
          </button>
        </div>
      </header>

      {/* Content */}
      <div className="p-3">
        <h2 className="ml-2 mb-4 text-slate-500">Check your position of your target keywords!</h2>
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
                  <div className="font-semibold text-center">FWD's Position</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Volume</div>
                </th>
                {/* <th className="p-2">
                  <div className="font-semibold text-center">Visibility</div>
                </th> */}
              </tr>
            </thead>
            {isLoading ? (
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
                  <tr key={index}>
                    <td className="p-2">
                      <div className="text-slate-800">{item.keyword}</div>
                    </td>
                    <td className="p-2">
                      <div className="text-center">{item.position}</div>
                    </td>
                    <td className="p-2">
                      <div className="text-center">{item.volume}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>

        <div className="flex justify-between pr-12">
          <h2 className="mt-10 ml-2 mb-4 ">Include the suggested keywords in your product pages!</h2>
          {/* <span className="text-[10px] mt-10 ml-2 mb-4 rounded-lg border-2 p-1  border-indigo-500">
            See how this works using &#32;{" "}
            <a className="underline text-indigo-500 " href="https://www.youtube.com/watch?v=l2k4eF6ufEQ" target="_blank" rel="noreferrer">
              web robots
            </a>  
          </span>  */}
        </div>

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
                  <div className="font-semibold tesxt-slate-600 text-indigo-600 text-left animate-bounce">Suggested Keyword</div>
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
            {isLoading ? (
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
