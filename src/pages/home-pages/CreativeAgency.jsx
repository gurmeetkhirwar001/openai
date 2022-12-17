import React from "react";
import { Link } from "react-router-dom";
import shapeImg from "../../assets/images/shape/shape_12.svg";
import ContactMeta from "../../components/common/contact/ContactMeta";
import FromStyleOne from "../../components/common/contact/FromStyleOne";
import CopyrightFooter from "../../components/common/footer/CopyrightFooter";
import FooterMenuList from "../../components/common/footer/FooterMenuList";
import Seo from "../../components/common/seo/Seo";
import AddressBlock from "../../components/creative-agency/AddressBlock";
import CounterUp from "../../components/creative-agency/CounterUp";
import FeatureSection from "../../components/creative-agency/FeatureSection";
import NumberSection from "../../components/creative-agency/NumberSection";
import Faq from "../../components/creative-agency/Faq";

import FeatureSectionFour from "../../components/creative-agency/FeatureSectionFour";
import FeedbackSlider from "../../components/creative-agency/FeedbackSlider";
import FeedbackSliderFour from "../../components/creative-agency/FeedbackSliderFour";
import FooterSubscribe from "../../components/creative-agency/FooterSubscribe";
import Header from "../../components/creative-agency/Header";
import HeroBanner from "../../components/creative-agency/HeroBanner";
import PartnersLogo from "../../components/creative-agency/PartnersLogo";
import TextBlockOne from "../../components/creative-agency/TextBlockOne";
import Computer from "../../assets/images/icon/computer.png";
import Sit from "../../assets/images/icon/siting.png";
import Img3 from "../../assets/images/icon/img3.svg";
import Sqlimage from "../../assets/images/icon/sql.jfif";

const CreativeAgency = () => {
  return (
    <div className="main-page-wrapper light-bg">
      <Seo title="Creative Agency" />
      {/* End Seo Related data */}

      {/* <!-- 
        =============================================
        Theme Main Menu
        ============================================== 
        --> */}
      <Header />

      {/* <!-- 
        =============================================
        Theme Hero Banner
        ============================================== 
        --> */}
      <div className="hero-banner-two">
        <div className="container h-100">
          <div className="vcamp-feature-section-three mt-100 lg-mt-150 md-mt-120">
            <div className="container">
              <div className="row align-items-center mb-75 lg-mb-50 md-mb-20">
                <div className="col-xl-6 col-lg-5" data-aos="fade-right">
                  <div className="title-style-one ">
                    <h4 className="title mb-60">Write SQL in seconds</h4>
                    <p className="mb-40 mt-20">
                      With AI2sql, engineers and non-engineers can easily write
                      efficient, error-free SQL queries without knowing SQL.
                      It's time to take back your time!
                    </p>
                    <Link to="about-v2" className="theme-btn-one ripple-btn">
                      Get Started its Free
                    </Link>
                  </div>
                </div>
                {/* End .col */}

                <div className="col-lg-5 ms-auto" data-aos="fade-left">
                  <img src={Computer} />
                </div>
                {/* End .col */}
              </div>
              {/* End .row */}
            </div>
            <div className="mt-70">
              <div className="row align-items-center mb-75 lg-mb-50 md-mb-20">
                <div className="col-lg-5" data-aos="fade-left">
                  <img src={Sit} />
                </div>
                <div className="col-xl-6 col-lg-5" data-aos="fade-left">
                  <div className="title-style-one ">
                    <h4 className="title mb-60">
                      Writing complex SQL queries is hard for non-engineers.
                    </h4>
                    <p className="mb-40 mt-20">
                      Writing queries from scratch is time consuming, especially
                      for non-developers.
                    </p>
                  </div>
                </div>
                {/* End .col */}

                {/* End .col */}
              </div>
              {/* End .row */}
            </div>
            <div className="container">
              <div className="row align-items-center mb-75 lg-mb-50 md-mb-20">
                <div className="col-xl-6 col-lg-5" data-aos="fade-right">
                  <div className="title-style-one ">
                    <h4 className="title mb-60">
                      Use AI2sql to create fast, efficient, and error-free SQL
                      queries - instantly.
                    </h4>
                    <p className="mb-40 mt-20">
                      All you need to do is enter a few keywords about your data
                      - AI2sql automatically builds an optimized SQL query for
                      your data resulting in extremely fast performance.
                    </p>
                    <Link to="about-v2" className="theme-btn-one ripple-btn">
                      Get Started its Free
                    </Link>
                  </div>
                </div>
                {/* End .col */}

                <div className="col-lg-5 ms-auto" data-aos="fade-left">
                  <img src={Img3} />
                </div>
                {/* End .col */}
              </div>
              {/* End .row */}
            </div>
          </div>
        </div>
      </div>
      <div className="container sql-section mt-80">
        <div className="d-flex justify-content-center align-items-center flex-column">
          <h3 className="fw-bold mb-40">
            AI2sql* writes SQL in seconds, so you don't have to.
          </h3>
          <p>
            Ask whatever questions you need in plain-English, our program will
            return the answer as SQL code.
          </p>
        </div>
        <div className="row align-items-center mb-75 lg-mb-50 md-mb-20 mt-40">
          <div className="col-xl-9 col-lg-9">
            <img src={Sqlimage} />
          </div>
          {/* End .col */}

          <div className="col-lg-3 ms-auto">
            <ul className="skills">
              <li>SQL</li>
              <li>NOSQL</li>
              <li>JOINS</li>
              <li>AGGREGATE</li>
              <li>STORED PROCEDURE</li>
              <li>VIEW</li>
            </ul>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          {" "}
          <Link to="about-v2" className="theme-btn-one ripple-btn">
            Start your free trial
          </Link>
        </div>
      </div>
      <div className="engine-section mt-120">
        <h3 className="text-center fw-bold">Supported DB Engines</h3>
        <p className="text-center mt-30">
          AI2sql helps you efficiently generate SQL code for different
          databases.
        </p>{" "}
        <div className="row mt-40">
          <FeatureSection />
        </div>
      </div>
      <div className="engine-section mt-80 container">
        <h3 className="text-center fw-bold">Lets share some numbers</h3>
        <p className="text-center mt-30">
          We wanted to share some exciting numbers with you about how many
          people have tried out AI2sql, and what they've been able to accomplish
          with it.
        </p>{" "}
        <div className="row mt-40">
          <NumberSection />
        </div>
      </div>

      {/* <!-- /.hero-banner-two --> */}

      {/* <!--
			=====================================================
				Counter Section One
			=====================================================
			--> */}
      <div className="faq mt-80 container">
        <h3 className="text-center fw-bold">Frequently Asked Questions</h3>
        <p className="text-center mt-40 f-24">
          Got a question? We've got answers.
        </p>
        <div className="">
          <Faq />
        </div>
      </div>
      {/* 
      <!--
			=====================================================
				Feedback Slider Three
			=====================================================
			--> */}

      {/* <!-- /.vcamp-feature-section-four --> */}

      {/* <!-- /.contact-section-two --> */}

      {/* <!--
			=====================================================
				Partner Section Two
			=====================================================
			--> */}

      {/* <!-- /.address-section-two --> */}

      {/* <!--
			=====================================================
				Footer
			=====================================================
			--> */}
      <div className="vcamp-footer-one">
        <div className="clearfix">
          <div className="container">
            <div className="row">
              <div className="col-xxl-11 m-auto">
                {/* <!-- /.subscribe-area --> */}

                <div className="top-footer mt-90 md-mt-70">
                  <div className="row">
                    <div className="col-lg-4 col-md-2 d-flex flex-column">
                      <h5 className="mb-30">Copyright AI2sql 2022</h5>
                      <p>13553 Atlantic Blvd, Suite 201<br/> FL 32225</p>
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
      {/* <!-- /.vcamp-footer-one --> */}
    </div>
    // {/* // End .main-page-wrapper */}
  );
};

export default CreativeAgency;
