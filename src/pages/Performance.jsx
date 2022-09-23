import React, { useState } from "react";

import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import NavBar from "../partials/NavBar";
import WelcomeBanner from "../partials/dashboard/WelcomeBanner";
import DashboardAvatars from "../partials/dashboard/DashboardAvatars";
import FilterMoreButton from "../partials/actions/FilterMoreButton";
import Datepicker from "../partials/actions/Datepicker";
import DashboardCard00 from "../partials/dashboard/DashboardCard00";
import DashboardCard01 from "../partials/dashboard/DashboardCard01";
import DashboardCard02 from "../partials/dashboard/DashboardCard02";
import DashboardCard03 from "../partials/dashboard/DashboardCard03";
import DashboardCard04 from "../partials/dashboard/DashboardCard04";
import DashboardCard05 from "../partials/dashboard/DashboardCard05";
import DashboardCard06 from "../partials/dashboard/DashboardCard06";
import DashboardCard07 from "../partials/dashboard/DashboardCard07";
import DashboardCard08 from "../partials/dashboard/DashboardCard08";
import DashboardCard09 from "../partials/dashboard/DashboardCard09";
import DashboardCard10 from "../partials/dashboard/DashboardCard10";
import DashboardCard11 from "../partials/dashboard/DashboardCard11";
import DashboardCard12 from "../partials/dashboard/DashboardCard12";
import DashboardCard13 from "../partials/dashboard/DashboardCard13";
import SEOPositionChart from "../partials/dashboard/performance/1.SEOPositionChart";
import SEOPositionTracking from "../partials/dashboard/performance/1.SEOPositionTracking";
import SEOTargetKeyword from "../partials/dashboard/performance/1.SEOTargetKeyword";
import SEOKeywordBoost from "../partials/dashboard/performance/1.SEOKeywordBoost";
import SEOImprovement from "../partials/dashboard/performance/1.SEOImprovement";
import PageSpeed from "../partials/dashboard/performance/2.PageSpeed";
import PageSpeedOverall from "../partials/dashboard/performance/2.PageSpeedOverall";
import PageSpeedImprovement from "../partials/dashboard/performance/2.PageSpeedImprovement";
import Footer from "../partials/Footer";

import Banner from "../partials/Banner";

import ImageTTFB from "../images/ttfb.png";
import ImageLCP from "../images/lcp.png";

function Performance() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      {/* <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Welcome banner */}
            {/* <WelcomeBanner /> */}
            {/* navBar */}
            <NavBar />
            {/* Dashboard actions */}
            <div className="sm:flex sm:justify-end sm:items-center mb-8">
              {/* Left: Avatars */}
              {/* <DashboardAvatars /> */}
              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                {/* Filter button */}
                <FilterMoreButton />
                {/* Datepicker built with flatpickr */}
                <Datepicker />
                {/* Add view button */}
                <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                  <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                    <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                  </svg>
                  <span className="hidden xs:block ml-2">Add view</span>
                </button>
              </div>
            </div>
            {/* Cards */}
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12">SEO Keyword Performance</div>
              <SEOPositionChart />
              {/* fwd self SEO ranking */}
              <SEOPositionTracking />

              {/* fwd self SEO improvement */}
              <SEOImprovement />

              {/* fwd and other competitor */}
              <SEOKeywordBoost />

              {/* <SEOTargetKeyword /> */}
              <div className="col-span-12">Page Speed Performance</div>
              <PageSpeedOverall title="Overall score" keyNumber="270ms" perctChange="&#8595;19.1%" color="green" />
              <PageSpeed title="Frontend" keyNumber="510ms" Image={ImageLCP} perctChange="&#8595;1.4%" color="green" tooltip="User perceived load speed when main content is loaded, also known as Largest Contentful Paint (LCP)" />
              <PageSpeed title="Backend" keyNumber="600ms" Image={ImageTTFB} perctChange="&#8593;0.1%" color="red" tooltip="Page load time attributed to the backend, also known as Time To First Byte(TTFB)" />
              <PageSpeedImprovement />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Performance;
