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
import TotalReferral from "../partials/dashboard/referral/TotalReferral";
import CustomerReferrerRatio from "../partials/dashboard/referral/CustomerReferrerRatio";
import ReferrerRefereerRatio from "../partials/dashboard/referral/ReferrerRefereerRatio";
import RetentionRate from "../partials/dashboard/referral/RetentionRate";
import Banner from "../partials/Banner";
import Footer from "../partials/Footer";

function Referral() {
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
              <div className="col-span-12">Referral Program Performance</div>
              {/* <DashboardCard00 title={"Sessions"} subtitle={""} keyNumber={"56.3K"} perctChange={"10.3%"}/>
              <DashboardCard00 title={"Pageviews"} subtitle={""} keyNumber={"72.1K"} perctChange={"1.6%"}/>
              <DashboardCard00 title={"Session duration"} subtitle={""} keyNumber={"2m 41s"} perctChange={"5.6%"}/> */}
              <TotalReferral title={"Total Referral"} subtitle={""} keyNumber={"4.3K"} perctChange={"10.4%"} />
              <CustomerReferrerRatio title={"Customer to Referrer ratio"} subtitle={""} keyNumber={"0.6"} perctChange={"5.6%"} />
              <ReferrerRefereerRatio title={"Referrer to Referee ratio"} subtitle={""} keyNumber={"6.43"} perctChange={"8.9%"} />
              <RetentionRate />
            </div>
          </div>
        </main>
        <Footer />
        {/* <Banner /> */}
      </div>
    </div>
  );
}

export default Referral;
