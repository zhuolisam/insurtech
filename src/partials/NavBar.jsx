import React, { useState, useRouter } from "react";
import { NavLink, useLocation } from "react-router-dom";
import SearchModal from "./header/SearchModal";
import Notifications from "./header/Notifications";
import Help from "./header/Help";
import UserMenu from "./header/UserMenu";

function NavBar({ sidebarOpen, setSidebarOpen }) {
  const { pathname } = useLocation();

  return (
    <div className="w-full mb-3 text-lg text-slate-500 tracking-wide">
      <ul className="flex flex-row flex-wrap border-b-[1px] border-slate-300 list-none">
      <li
          className={`px-4 py-2  duration-200 ease-out -mb-[1px] hover:text-slate-700
          ${pathname === "/performance" && "border-b-[2px] border-b-indigo-500 text-slate-700"}`}
        >
          <NavLink end to="/performance">
            <span className="nav-link cursor-pointer font-semibold ">Performance</span>
          </NavLink>
        </li>
        <li
          className={`px-4 py-2  duration-200 ease-out -mb-[1px] hover:text-slate-700
          ${pathname === "/" && "border-b-[2px] border-b-indigo-500 text-slate-700"}`}
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <NavLink end to="/">
            <span className="nav-link cursor-pointer active font-semibold ">Traffic</span>
          </NavLink>
        </li>
 
        <li
          className={`px-4 py-2  duration-200 ease-out -mb-[1px] hover:text-slate-700
          ${pathname === "/referral" && "border-b-[2px] border-b-indigo-500 text-slate-700"}`}
        >
          <NavLink end to="/referral">
            <span className="nav-link cursor-pointer font-semibold ">Referrals</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
