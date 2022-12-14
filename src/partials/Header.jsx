import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SearchModal from "./header/SearchModal";
import Notifications from "./header/Notifications";
import Help from "./header/Help";
import UserMenu from "./header/UserMenu";
import { NavLink } from "react-router-dom";

function Header({ sidebarOpen, setSidebarOpen }) {
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  const { pathname } = useLocation();

  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header className={`sticky top-0 md:bg-opacity-90 bg-white border-b border-slate-200 z-30 transition duration-300 ease-in-out ${!(pathname === "/") && "md:bg-opacity-100"} ${!top && pathname == "/" && "blur shadow-lg "}`}>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px">
          {/* Header: Left side */}
          <div className="flex pl-2 lg:pl-4 items-center">
            {/* Hamburger button */}
            <button
              className="text-slate-500 hover:text-slate-600 lg:hidden"
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
              onClick={(e) => {
                e.stopPropagation();
                setSidebarOpen(!sidebarOpen);
              }}
            >
              <span className="sr-only">Open sidebar</span>
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="5" width="16" height="2" />
                <rect x="4" y="11" width="16" height="2" />
                <rect x="4" y="17" width="16" height="2" />
              </svg>
            </button>
            {/* Logo */}
            <div className="font-extrabold text-xl cursor-pointer">
              <NavLink end to="/">
                All<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Sight</span>
              </NavLink>
            </div>
          </div>

          {/* Header: Right side */}
          <div className="flex items-center">
            <div className="ml-3 bg-gray-200 bg-opacity-30 rounded-full px-4 py-1 cursor-pointer hover:bg-opacity-50">fwd.com.hk</div>
            {!(pathname === "/") && (
              <React.Fragment>
                <button
                  className={`w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 transition duration-150 rounded-full ml-3 ${searchModalOpen && "bg-slate-200"}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSearchModalOpen(true);
                  }}
                  aria-controls="search-modal"
                >
                  <span className="sr-only">Search</span>
                  <svg className="w-4 h-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path className="fill-current text-slate-500" d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                    <path className="fill-current text-slate-400" d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
                  </svg>
                </button>
                <SearchModal id="search-modal" searchId="search" modalOpen={searchModalOpen} setModalOpen={setSearchModalOpen} />
                <Notifications />
              </React.Fragment>
            )}

            {/* <Help /> */}
            {/* Divider */}
            {/* <hr className="w-px h-6 bg-slate-200 mx-3" /> */}
            {/* <UserMenu /> */}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
