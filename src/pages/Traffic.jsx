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
import Session from "../partials/dashboard/traffic/Session";
import UserBehaviour from "../partials/dashboard/traffic/UserBehaviour";
import ActivityEvent from "../partials/dashboard/traffic/ActivityEvent";
import ActivityCategory from "../partials/dashboard/traffic/ActivityCategory";
import PremiumPoints from "../partials/dashboard/traffic/PremiumPoints";
import PopularRedemptions from "../partials/dashboard/traffic/PopularRedemptions";
import PopularActivity from "../partials/dashboard/traffic/PopularActivity";
import PaidVsPolicy from "../partials/dashboard/traffic/PaidVsPolicy";
import PageViewCountTable from "../partials/dashboard/traffic/PageViewCountTable";
import Goal from "../partials/dashboard/traffic/Goal";
import TopCountries from "../partials/dashboard/traffic/TopCountries";
import TopDevices from "../partials/dashboard/traffic/TopDevices";
import SalesFunnel from "../partials/dashboard/traffic/SalesFunnel";
import Heatmap from "../partials/dashboard/traffic/Heatmap";
import Footer from "../partials/Footer";

import Banner from "../partials/Banner";
import AvgEarned from "../partials/dashboard/traffic/AvgEarned";
import AvgCurrent from "../partials/dashboard/traffic/AvgCurrent";

function Traffic() {
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
              {/* <DashboardCard00 title={"Sessions"} subtitle={""} keyNumber={"56.3K"} perctChange={"10.3%"}/>
              <DashboardCard00 title={"Pageviews"} subtitle={""} keyNumber={"72.1K"} perctChange={"1.6%"}/>
              <DashboardCard00 title={"Session duration"} subtitle={""} keyNumber={"2m 41s"} perctChange={"5.6%"}/> */}
              <div className="col-span-12">Traffic Analytics</div>
              <Session title={"Sessions"} subtitle={""} keyNumber={"56.3K"} perctChange={"10.3%"} />
              <Session title={"Pageviews"} subtitle={""} keyNumber={"72.1K"} perctChange={"1.6%"} />
              <Session title={"Session duration"} subtitle={""} keyNumber={"2m 41s"} perctChange={"5.6%"} />
              <PageViewCountTable />
              <Goal />
              <TopCountries />
              <TopDevices />
              <SalesFunnel />
              <Heatmap />
              <div className="col-span-12 mt-4">FWD Max Data Analysis</div>
              <UserBehaviour title="Activity by Customer Count (Excluded FinishGame & Login)" />
              {/* Event Category Breakdown by Customers (Holistics) */}
              <ActivityCategory title="Event Category Breakdown by Customers" />
              {/* Activity Breakdown by Customers & Events (Holistics) */}
              <ActivityEvent title="Activity & Event by Customer Count" />
              {/* Total Premium Paid & Points by Age (Holistics) */}
              <PremiumPoints title="Total Premium Paid & Points by Age" />
              {/* Avg Gained Max Points */}
              <AvgEarned title="Avg Max Points Earned" />
              {/* Avg Current Max Points */}
              <AvgCurrent title="Avg CurrentMax Points" />
              {/* Popular Redemptions by Customer (Holistics) */}
              <PopularRedemptions title="Popular Redemptions" />
              {/* Popular Activities by Age (Holistics) */}
              <PopularActivity title="Popular Activities by Age" />
              {/* Total Premium Paid vs Policy Duration by Product Category & Age (Holistics) */}
              <PaidVsPolicy title="Total Premium Paid vs Policy Duration by Product Category & Age" />
            </div>
          </div>
        </main>
        <Footer />
        {/* <Banner /> */}
      </div>
    </div>
  );
}

export default Traffic;
