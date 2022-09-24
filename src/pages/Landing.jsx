import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import Banner from "../partials/Banner";
import { tailwindConfig } from "../utils/Utils";

function Landing() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");

    script.src = "/main.min.js";
    // script.src = "../utils/landing.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      {/* <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="mt-16 flex flex-col flex-1 items-center">
          {/* Section 1 */}
          <section className="hero section">
            <div className="hero-inner mx-20">
              <div className="hero-copy">
                {/* <h1 className="hero-title mt-0">Landing template for startups</h1> */}
                <h1 className="font-extrabold text-8xl mb-4 mt-0">
                  All<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Sight</span>
                </h1>
                <p className="hero-paragraph">Drive your sales by taking data analytics into action.</p>
                <div className="hero-cta">
                  <div className="font-extrabold text-xl cursor-pointer">
                    <NavLink end to="/performance">
                      <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                        <span className="hidden xs:block px-4">Get Started</span>
                      </button>
                    </NavLink>
                  </div>

                  {/* <a className="button button-primary" href="#">
                      Get Started
                    </a> */}
                  {/* <div className="lights-toggle">
                      <input id="lights-toggle" type="checkbox" name="lights-toggle" className="switch" defaultChecked="checked" />
                      <label htmlFor="lights-toggle" className="text-xs">
                        <span>
                          Turn me <span className="label-text">dark</span>
                        </span>
                      </label>
                    </div> */}
                </div>
              </div>
              <div className="hero-media">
                <div className="header-illustration">
                  <img className="header-illustration-image asset-light" src="/images/header-illustration-light.svg" alt="Header illustration" />
                  {/* <img className="header-illustration-image asset-dark" src="/images/header-illustration-dark.svg" alt="Header illustration" /> */}
                </div>
                <div className="hero-media-illustration">
                  <img className="hero-media-illustration-image asset-light" src="/images/hero-media-illustration-light.svg" alt="Hero media illustration" />
                  {/* <img className="hero-media-illustration-image asset-dark" src="/images/hero-media-illustration-dark.svg" alt="Hero media illustration" /> */}
                </div>
                <div className="hero-media-container">
                  <img className="hero-media-image" src="/images/performance_new.png" alt="Hero media" />
                  {/* <img class="hero-media-image asset-dark" src="/images/hero-media-dark.svg" alt="Hero media"> */}
                </div>
              </div>
            </div>
          </section>
          {/* Section 2 */}
          <section className="features section w-full mt-20">
            <div className="container">
              <div className="features-inner section-inner has-bottom-divider">
                <div className="text-center">
                  <div className="container-sm">
                    <h2 className="text-slate-600 font-semibold text-3xl mt-0 mb-2 w-full">Customer Marketing Funnel</h2>
                    <p className="section-paragraph px-10">The customer marketing funnel is your customers journey with you, from learning your business, converting, and referring.</p>
                    <div className="features-image">
                      {/* <img className="features-illustration asset-dark" src="/images/features-illustration-dark.svg" alt="Feature illustration" /> */}
                      {/* <img className="features-box asset-dark" src="/images/features-box-dark.svg" alt="Feature box" /> */}
                      {/* <img className="features-illustration asset-dark" src="/images/features-illustration-top-dark.svg" alt="Feature illustration top" /> */}
                      <img className="features-illustration asset-light" src="/images/features-illustration-light.svg" alt="Feature illustration" />
                      <img className="features-box asset-light" src="/images/second-pic.png" alt="Feature box" />
                      {/* <div className="flex features-wrap pt-10 relative items-center -mt-10">
                        <img className="w-[90rem] " src="/images/funnel_transparent.png" alt="" />
                        <div className=" w-[14rem] absolute top-20 -right-40 flex flex-col items-end group">
                          <NavLink end to="/performance">
                            <div className="text-lg group-hover:scale-[108%] duration-200 cursor-pointer">Acquire Customers </div>
                          </NavLink>
                          <img className="group-hover:scale-[108%] duration-200" src="/images/Line 1.png" alt="" />
                        </div>
                        <div className=" w-[18rem] absolute top-[11.5rem] -right-40 flex flex-col items-end group ">
                          <NavLink end to="/traffic">
                            <div className="text-lg group-hover:scale-[108%] duration-200 cursor-pointer">Convert Customers </div>
                          </NavLink>
                          <img className="group-hover:scale-[108%] duration-200" src="/images/Line 1.png" alt="" />
                        </div>
                        <div className=" w-[22rem] absolute top-[17rem] -right-40 flex flex-col items-end group ">
                          <NavLink end to="/referrals">
                            <div className="text-lg group-hover:scale-[108%] duration-200 cursor-pointer">Generate Referrals </div>
                          </NavLink>
                          <img className="group-hover:scale-[108%] duration-200" src="/images/Line 1.png" alt="" />
                        </div>
                      </div> */}
                      <img className="features-illustration asset-light" src="/images/features-illustration-top-light.svg" alt="Feature illustration top" />
                    </div>
                  </div>

                  {/* X Factors */}
                  <div>
                    <h2 className="text-slate-600 font-semibold text-3xl mt-40 mb-6 w-full">X-Factors</h2>
                    <div class="mt-8 max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
                      <div class="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                        <svg class="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                          <g fill="none" fill-rule="evenodd">
                            <rect class="fill-current text-blue-600" width="64" height="64" rx="32"></rect>
                            <g stroke-width="2">
                              <path class="stroke-current text-blue-300" d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285"></path>
                              <path class="stroke-current text-white" d="M20.571 37.714h5.715L36.57 26.286h8"></path>
                              <path class="stroke-current text-blue-300" stroke-linecap="square" d="M41.143 34.286l3.428 3.428-3.428 3.429"></path>
                              <path class="stroke-current text-white" stroke-linecap="square" d="M41.143 29.714l3.428-3.428-3.428-3.429"></path>
                            </g>
                          </g>
                        </svg>
                        <h4 class="text-xl font-bold leading-snug tracking-tight mb-1">Acquire Customers</h4>
                        <p class="text-gray-600 text-center text-sm">Automated SEO ranking, comparison & keyword suggestions.</p>
                      </div>
                      <div class="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                        <svg class="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                          <g fill="none" fill-rule="evenodd">
                            <rect class="fill-current text-blue-600" width="64" height="64" rx="32"></rect>
                            <g stroke-width="2" transform="translate(19.429 20.571)">
                              <circle class="stroke-current text-white" stroke-linecap="square" cx="12.571" cy="12.571" r="1.143"></circle>
                              <path class="stroke-current text-white" d="M19.153 23.267c3.59-2.213 5.99-6.169 5.99-10.696C25.143 5.63 19.514 0 12.57 0 5.63 0 0 5.629 0 12.571c0 4.527 2.4 8.483 5.99 10.696"></path>
                              <path class="stroke-current text-blue-300" d="M16.161 18.406a6.848 6.848 0 003.268-5.835 6.857 6.857 0 00-6.858-6.857 6.857 6.857 0 00-6.857 6.857 6.848 6.848 0 003.268 5.835"></path>
                            </g>
                          </g>
                        </svg>
                        <h4 class="text-xl font-bold leading-snug tracking-tight mb-1">Convert Customers</h4>
                        <p class="text-gray-600 text-center text-sm">Robust user behaviour monitoring & correlation analyses.</p>
                      </div>
                      <div class="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                        <svg class="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                          <g fill="none" fill-rule="evenodd">
                            <rect class="fill-current text-blue-600" width="64" height="64" rx="32"></rect>
                            <g stroke-linecap="square" stroke-width="2">
                              <path class="stroke-current text-blue-300" d="M38.826 22.504a9.128 9.128 0 00-13.291-.398M35.403 25.546a4.543 4.543 0 00-6.635-.207"></path>
                              <path class="stroke-current text-white" d="M19.429 25.143A6.857 6.857 0 0126.286 32v1.189L28 37.143l-1.714.571V40A2.286 2.286 0 0124 42.286h-2.286v2.285M44.571 25.143A6.857 6.857 0 0037.714 32v1.189L36 37.143l1.714.571V40A2.286 2.286 0 0040 42.286h2.286v2.285"></path>
                            </g>
                          </g>
                        </svg>
                        <h4 class="text-xl font-bold leading-snug tracking-tight mb-1">Generate Referrals</h4>
                        <p class="text-gray-600 text-center text-sm">User referral analysis & recommendations.</p>
                      </div>
                      {/* <div class="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                        <svg class="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                          <g fill="none" fill-rule="evenodd">
                            <rect class="fill-current text-blue-600" width="64" height="64" rx="32"></rect>
                            <g transform="translate(22.857 19.429)" stroke-width="2">
                              <path class="stroke-current text-white" stroke-linecap="square" d="M12.571 4.571V0H0v25.143h12.571V20.57"></path>
                              <path class="stroke-current text-white" d="M16 12.571h8"></path>
                              <path class="stroke-current text-white" stroke-linecap="square" d="M19.429 8L24 12.571l-4.571 4.572"></path>
                              <circle class="stroke-current text-blue-300" stroke-linecap="square" cx="12.571" cy="12.571" r="3.429"></circle>
                            </g>
                          </g>
                        </svg>
                        <h4 class="text-xl font-bold leading-snug tracking-tight mb-1">Fast Prototyping</h4>
                        <p class="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </div>
                      <div class="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                        <svg class="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                          <g fill="none" fill-rule="evenodd">
                            <rect class="fill-current text-blue-600" width="64" height="64" rx="32"></rect>
                            <g stroke-linecap="square" stroke-width="2">
                              <path class="stroke-current text-white" d="M20.571 20.571h13.714v17.143H20.571z"></path>
                              <path class="stroke-current text-blue-300" d="M38.858 26.993l6.397 1.73-4.473 16.549-13.24-3.58"></path>
                            </g>
                          </g>
                        </svg>
                        <h4 class="text-xl font-bold leading-snug tracking-tight mb-1">Design Phase</h4>
                        <p class="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </div>
                      <div class="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                        <svg class="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                          <g fill="none" fill-rule="evenodd">
                            <rect class="fill-current text-blue-600" width="64" height="64" rx="32"></rect>
                            <g stroke-width="2">
                              <path class="stroke-current text-white" d="M32 37.714A5.714 5.714 0 0037.714 32a5.714 5.714 0 005.715 5.714"></path>
                              <path class="stroke-current text-white" d="M32 37.714a5.714 5.714 0 015.714 5.715 5.714 5.714 0 015.715-5.715M20.571 26.286a5.714 5.714 0 005.715-5.715A5.714 5.714 0 0032 26.286"></path>
                              <path class="stroke-current text-white" d="M20.571 26.286A5.714 5.714 0 0126.286 32 5.714 5.714 0 0132 26.286"></path>
                              <path class="stroke-current text-blue-300" d="M21.714 40h4.572M24 37.714v4.572M37.714 24h4.572M40 21.714v4.572" stroke-linecap="square"></path>
                            </g>
                          </g>
                        </svg>
                        <h4 class="text-xl font-bold leading-snug tracking-tight mb-1">Develop &amp; Launch</h4>
                        <p class="text-gray-600 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </div> */}
                    </div>
                  </div>
                  <h2 className="text-slate-600 font-semibold text-3xl mt-20 mb-2 w-full">Visualize the Funnel</h2>
                  {/* Funnel */}
                  <div className="flex features-wrap pt-10 relative items-center -mt-4">
                    <img className="w-[90rem] " src="/images/funnel_transparent.png" alt="" />
                    <div className=" w-[14rem] absolute top-20 -right-40 flex flex-col items-end group">
                      <NavLink end to="/performance">
                        <div className="text-lg group-hover:scale-[108%] duration-200 cursor-pointer">Acquire Customers</div>
                      </NavLink>
                      <img className="group-hover:scale-[108%] duration-200" src="/images/Line 1.png" alt="" />
                      <span className="text-[0.5rem]">Get more customers into your site</span>
                    </div>
                    <div className=" w-[18rem] absolute top-[11.5rem] -right-40 flex flex-col items-end group ">
                      <NavLink end to="/behaviour">
                        <div className="text-lg group-hover:scale-[108%] duration-200 cursor-pointer">Convert Customers</div>
                      </NavLink>
                      <img className="group-hover:scale-[108%] duration-200" src="/images/Line 1.png" alt="" />
                      <span className="text-[0.5rem]">Get more customers to buy</span>
                    </div>
                    <div className=" w-[21rem] absolute top-[17rem] -right-40 flex flex-col items-end group ">
                      <NavLink end to="/referral">
                        <div className="text-lg group-hover:scale-[108%] duration-200 cursor-pointer">Generate Referrals</div>
                      </NavLink>
                      <img className="group-hover:scale-[108%] duration-200" src="/images/Line 1.png" alt="" />
                      <span className="text-[0.5rem]">Get more customers to refer</span>
                    </div>

                    {/* <div className="feature is-revealing">
                      <div className="feature-inner">
                        <div className="feature-icon">
                          <img className="asset-light" src="/images/feature-01-light.svg" alt="Feature 01" />
                          <img className="asset-dark" src="/images/feature-01-dark.svg" alt="Feature 01" />
                        </div>
                        <div className="feature-content">
                          <h3 className="feature-title mt-0">Discover</h3>
                          <p className="text-sm mb-0">Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua dui.</p>
                        </div>
                      </div>
                    </div>
                    <div className="feature is-revealing">
                      <div className="feature-inner">
                        <div className="feature-icon">
                          <img className="asset-light" src="/images/feature-02-light.svg" alt="Feature 02" />
                          <img className="asset-dark" src="/images/feature-02-dark.svg" alt="Feature 02" />
                        </div>
                        <div className="feature-content">
                          <h3 className="feature-title mt-0">Discover</h3>
                          <p className="text-sm mb-0">Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua dui.</p>
                        </div>
                      </div>
                    </div>
                    <div className="feature is-revealing">
                      <div className="feature-inner">
                        <div className="feature-icon">
                          <img className="asset-light" src="/images/feature-03-light.svg" alt="Feature 03" />
                          <img className="asset-dark" src="/images/feature-03-dark.svg" alt="Feature 03" />
                        </div>
                        <div className="feature-content">
                          <h3 className="feature-title mt-0">Discover</h3>
                          <p className="text-sm mb-0">Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua dui.</p>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <section class="cta section">
          <div class="container-sm">
              <div class="cta-inner section-inner">
                  <div class="cta-header text-center">
                      <h2 class="section-title mt-0">Get it and Switch</h2>
                      <p class="section-paragraph">Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.</p>
							<div class="cta-cta">
								<a class="button button-primary" href="#">Buy it now</a>
							</div>
					    </div>
              </div>
          </div>
      </section>  */}
        </main>

        {/* <Banner /> */}
      </div>
    </div>
  );
}

export default Landing;
