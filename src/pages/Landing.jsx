import React, { useState, useEffect } from "react";

import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import Banner from "../partials/Banner";

function Landing() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");

    script.src = "/main.min.js";
    // script.src = "../utils/landing.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      // document.body.removeChild(script);
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

        <main>
          <section className="hero">
            <div className="container">
              <div className="hero-inner">
                <div className="hero-copy">
                  <h1 className="hero-title mt-0">Landing template for startups</h1>
                  <p className="hero-paragraph">Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</p>
                  <div className="hero-cta">
                    <a className="button button-primary" href="#">
                      Buy it now
                    </a>
                    <div className="lights-toggle">
                      <input id="lights-toggle" type="checkbox" name="lights-toggle" className="switch" defaultChecked="checked" />
                      <label htmlFor="lights-toggle" className="text-xs">
                        <span>
                          Turn me <span className="label-text">dark</span>
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="hero-media">
                  <div className="header-illustration">
                    <img className="header-illustration-image asset-light" src="/images/header-illustration-light.svg" alt="Header illustration" />
                    <img className="header-illustration-image asset-dark" src="/images/header-illustration-dark.svg" alt="Header illustration" />
                  </div>
                  <div className="hero-media-illustration">
                    <img className="hero-media-illustration-image asset-light" src="/images/hero-media-illustration-light.svg" alt="Hero media illustration" />
                    <img className="hero-media-illustration-image asset-dark" src="/images/hero-media-illustration-dark.svg" alt="Hero media illustration" />
                  </div>
                  <div className="hero-media-container">
                    <img className="hero-media-image asset-light" src="/images/hero-media-light.svg" alt="Hero media" />
                    {/* <img class="hero-media-image asset-dark" src="/images/hero-media-dark.svg" alt="Hero media"> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="features section">
            <div className="container">
              <div className="features-inner section-inner has-bottom-divider">
                <div className="features-header text-center">
                  <div className="container-sm">
                    <h2 className="section-title mt-0">The Product</h2>
                    <p className="section-paragraph">Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.</p>
                    <div className="features-image">
                      <img className="features-illustration asset-dark" src="/images/features-illustration-dark.svg" alt="Feature illustration" />
                      <img className="features-box asset-dark" src="/images/features-box-dark.svg" alt="Feature box" />
                      <img className="features-illustration asset-dark" src="/images/features-illustration-top-dark.svg" alt="Feature illustration top" />
                      <img className="features-illustration asset-light" src="/images/features-illustration-light.svg" alt="Feature illustration" />
                      <img className="features-box asset-light" src="/images/features-box-light.svg" alt="Feature box" />
                      <img className="features-illustration asset-light" src="/images/features-illustration-top-light.svg" alt="Feature illustration top" />
                    </div>
                  </div>
                </div>
                <div className="features-wrap">
                  <div className="feature is-revealing">
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
