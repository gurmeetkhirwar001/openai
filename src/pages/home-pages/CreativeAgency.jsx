import React from "react";
import { Link } from "react-router-dom";
import shapeImg from "../../assets/images/shape/shape_12.svg";
import ContactMeta from "../../components/common/contact/ContactMeta";
import FromStyleOne from "../../components/common/contact/FromStyleOne";
import CopyrightFooter from "../../components/common/footer/CopyrightFooter";
import FooterMenuList from "../../components/common/footer/FooterMenuList";
import Seo from "../../components/common/seo/Seo";
import FeatureSection from "../../components/creative-agency/FeatureSection";
import NumberSection from "../../components/creative-agency/NumberSection";
import Faq from "../../components/creative-agency/Faq";
import FooterLogo from "../../assets/images/icon/toplogo.png";

import Header from "../../components/creative-agency/Header";
import Computer from "../../assets/images/icon/computer.png";
import Sit from "../../assets/images/icon/siting.png";
import Img3 from "../../assets/images/icon/img3.svg";
import Img1 from "../../assets/images/question/JavaScript.png";
import Img6 from "../../assets/images/question/pandaspark.png";
import Img2 from "../../assets/images/question/ExplainCode.png";
import Img4 from "../../assets/images/question/Java.png";
import Img5 from "../../assets/images/question/JavaScripttoPython.png";
import Img17 from "../../assets/images/question/PandastoPySpark.png";
import Img7 from "../../assets/images/question/ParseUnstructuredData.png";
import Img8 from "../../assets/images/question/Playground.png";
import Img9 from "../../assets/images/question/PythonBugfixer.png";
import Img10 from "../../assets/images/question/PythonDocstring.png";
import Img11 from "../../assets/images/question/Python.png";
import Img12 from "../../assets/images/question/Scala.png";
import Img13 from "../../assets/images/question/SQL.png";
import Img14 from "../../assets/images/question/Summarizer.png";
import Img15 from "../../assets/images/question/timecomplex.png";
import Img16 from "../../assets/images/question/language.png";

const CreativeAgency = () => {
  return (
    <div className="main-page-wrapper light-bg">
      <Seo title="Home" />
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
                    <h4 className="title mb-60">
                      Write code and generate content in seconds
                    </h4>
                    <p className="mb-40 mt-20">
                      Answergenie is a platform that enables engineers and
                      non-engineers to unlock the potential of AI. Our platform
                      does code generation, content creation, marketing
                      analysis, text summarization, removes plagiarism and
                      question & answer, etc., allowing businesses to save time,
                      money, and resources. Our AI technology is intended to
                      streamline processes, improve the customer experience, and
                      provide insights that facilitate better decision-making.
                    </p>
                    <Link to="/sign" className="theme-btn-one ripple-btn">
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
                      Content creation, text summarization, generating questions
                      and coding are time-consuming tasks
                    </h4>
                    <p className="mb-40 mt-20">
                      Why not complete the task with a single click?
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
                      Use Answergenie to quickly and precisely generate content,
                      code, questions, essays, removes plagiarism etc.
                    </h4>
                    <p className="mb-40 mt-20">
                      Enter a few words about your data and your question, and
                      you're one click away from the solvent. Why spend
                      considerable time? Begin without cost immediately.
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
            Answergenie generates academic content, essays, questions, removes
            plagiarism, and code in short time, leaving you with no work to do.
          </h3>
          <p>
            Enter your text in simple English or layman terms, and the AI will
            return the desired result.
          </p>
        </div>
        <div className="row align-items-center mb-75 lg-mb-50 md-mb-20 mt-40">
          <div className="col-xl-9 col-lg-9">
            <img src={Img1} />
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
        <div className="row align-items-center mb-75 lg-mb-50 md-mb-20 mt-40">
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
          <div className="col-xl-9 col-lg-9">
            <img src={Img2} />
          </div>
        </div>
        <div className="row align-items-center mb-75 lg-mb-50 md-mb-20 mt-40">
          <div className="col-xl-9 col-lg-9">
            <img src={Img4} />
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
        <div className="row align-items-center mb-75 lg-mb-50 md-mb-20 mt-40">
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
          <div className="col-xl-9 col-lg-9">
            <img src={Img5} />
          </div>
        </div>
        <div className="row align-items-center mb-75 lg-mb-50 md-mb-20 mt-40">
          <div className="col-xl-9 col-lg-9">
            <img src={Img6} />
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
        <div className="row align-items-center mb-75 lg-mb-50 md-mb-20 mt-40">
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
          <div className="col-xl-9 col-lg-9">
            <img src={Img7} />
          </div>
        </div>
        <div className="row align-items-center mb-75 lg-mb-50 md-mb-20 mt-40">
          <div className="col-xl-9 col-lg-9">
            <img src={Img8} />
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
        <div className="row align-items-center mb-75 lg-mb-50 md-mb-20 mt-40">
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
          <div className="col-xl-9 col-lg-9">
            <img src={Img9} />
          </div>
        </div>
        <div className="row align-items-center mb-75 lg-mb-50 md-mb-20 mt-40">
          <div className="col-xl-9 col-lg-9">
            <img src={Img10} />
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
        <div className="row align-items-center mb-75 lg-mb-50 md-mb-20 mt-40">
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
          <div className="col-xl-9 col-lg-9">
            <img src={Img11} />
          </div>
        </div>
        <div className="row align-items-center mb-75 lg-mb-50 md-mb-20 mt-40">
          <div className="col-xl-9 col-lg-9">
            <img src={Img12} />
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
        <div className="row align-items-center mb-75 lg-mb-50 md-mb-20 mt-40">
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
          <div className="col-xl-9 col-lg-9">
            <img src={Img13} />
          </div>
        </div>
        <div className="row align-items-center mb-75 lg-mb-50 md-mb-20 mt-40">
          <div className="col-xl-9 col-lg-9">
            <img src={Img14} />
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
        <div className="row align-items-center mb-75 lg-mb-50 md-mb-20 mt-40">
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
          <div className="col-xl-9 col-lg-9">
            <img src={Img15} />
          </div>
        </div>
        <div className="row align-items-center mb-75 lg-mb-50 md-mb-20 mt-40">
          <div className="col-xl-9 col-lg-9">
            <img src={Img16} />
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
        <div className="row align-items-center mb-75 lg-mb-50 md-mb-20 mt-40">
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
          <div className="col-xl-9 col-lg-9">
            <img src={Img17} />
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          {" "}
          <Link to="/sign" className="theme-btn-one ripple-btn">
            Start your free trial
          </Link>
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
                    <div className="col-lg-4 col-md-2 d-flex justify-content-center align-items-center">
                      <img src={FooterLogo}/>
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
