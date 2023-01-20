import React, { useState } from "react";
import Header from "../../components/creative-agency/Header";
import Seo from "../../components/common/seo/Seo";

import FooterLogo from "../../assets/images/icon/toplogo.png";

import CopyrightFooter from "../../components/common/footer/CopyrightFooter";
import FooterMenuList from "../../components/common/footer/FooterMenuList";

function ContactUs() {
  return (
    <div className="main-page-wrapper light-bg" id="home">
      <Seo title="Home" />
      <Header />
      <div className="contact mt-160 container">
        <h3 className="fw-bold">Contact Us</h3>
        <p className="mt-30">
          Email: <a>hello@answergenie.co</a>
        </p>
        <p>Number: +917207285097</p>
      </div>
      <div className="vcamp-footer-one">
        <div className="clearfix">
          <div className="container">
            <div className="row">
              <div className="col-xxl-11 m-auto">
                {/* <!-- /.subscribe-area --> */}

                <div className="top-footer mt-90 md-mt-70">
                  <div className="row">
                    <div className="col-lg-4 col-md-2 d-flex justify-content-center align-items-center">
                      <img src={FooterLogo} />
                    </div>
                    {/* End .col */}

                    <FooterMenuList />
                    {/* End Footer Menu list */}
                  </div>
                </div>
                {/* <!-- /.top-footer --> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /.bg-wrapper --> */}

        <div className="container">
          <div className="row">
            <div className="col-xxl-11 m-auto">
              <div className="bottom-footer">
                <CopyrightFooter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
