/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-fallthrough */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import shapeImg from "../../assets/images/shape/shape_12.svg";
import ContactMeta from "../../components/common/contact/ContactMeta";
import FromStyleOne from "../../components/common/contact/FromStyleOne";
import CopyrightFooter from "../../components/common/footer/CopyrightFooter";
import FooterMenuList from "../../components/common/footer/FooterMenuList";
import Seo from "../../components/common/seo/Seo";
import "react-responsive-modal/styles.css";
import FeatureSection from "../../components/creative-agency/FeatureSection";
import NumberSection from "../../components/creative-agency/NumberSection";
import Faq from "../../components/creative-agency/Faq";
import FooterLogo from "../../assets/images/icon/toplogo.png";
import Modal from "react-responsive-modal";
import Header from "../../components/creative-agency/Header";
import Computer from "../../assets/images/icon/computer.png";
import Sit from "../../assets/images/icon/siting.png";
import Img3 from "../../assets/images/icon/img3.svg";
import Img17 from "../../assets/images/question/PandastoPySpark.png";
import Img1 from "../../assets/images/question/JavaScript.png";
import Img6 from "../../assets/images/question/pandaspark.png";
import Img2 from "../../assets/images/question/ExplainCode.png";
import Img4 from "../../assets/images/question/Java.png";
import Img5 from "../../assets/images/question/JavaScripttoPython.png";
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
import ANSQL from "../../assets/images/question/ANSQL.png";
import Apptitude from "../../assets/images/question/Apptitude.png";
import ContentCreator from "../../assets/images/question/ContentCreator.png";
import Essay from "../../assets/images/question/Essay.png";
import Excel from "../../assets/images/question/Excel.png";
import Extract from "../../assets/images/question/Extract.png";
import General from "../../assets/images/question/General.png";
import QA from "../../assets/images/question/questioning.png";
import Marketing from "../../assets/images/question/marketing.png";
import Marketingnumbers from "../../assets/images/question/marketingnumbers.png";
import multiplechoice from "../../assets/images/question/multiplechoice.png";
import oracle from "../../assets/images/question/orcale.png";
import plagrism from "../../assets/images/question/plagrism.png";
import postgresql from "../../assets/images/question/posgtresql.png";
import storeprocedure from "../../assets/images/question/storeprocedure.png";
import vba from "../../assets/images/question/VBA.png";
import view from "../../assets/images/question/view.png";
import { useEffect } from "react";

const CreativeAgency = () => {
  const [sectionOne, setSectionOneImage] = useState("");
  const [sectionSecond, setSectionSecondImage] = useState("");
  const [sectionThird, setSectionThirdImage] = useState("");
  const [sectionFourth, setSectionFourthImage] = useState("");
  const [sectionFifth, setSectionFifthImage] = useState("");
  const [open, setOpen] = useState(false);
  console.log(sectionOne, "sectionOne");
  useEffect(() => {
    async function setImages() {
      if (
        !localStorage.getItem("hometype") ||
        sectionOne === "" ||
        sectionSecond === "" ||
        sectionThird === "" ||
        sectionFourth === "" ||
        sectionFifth === ""
      ) {
        setSectionOneImage(Img6);
        setSectionSecondImage(Img14);
        setSectionThirdImage(Img5);
        setSectionFourthImage(vba);
        setSectionFifthImage(plagrism);
      }
    }
    setImages();
  }, [sectionOne]);
  const [cases, setCases] = useState([
    {
      type: "convertfromPySparktoSQL",
      name: "PySpark to SQL",
      description: "Answer questions based on existing knowledge.",
    },
    {
      type: "convertfromPandastoPySpark",
      name: "Pandas to PySpark",
      description: "Answer questions based on existing knowledge.",
    },
    {
      type: "TranslateProgrammingLanguage",
      name: "Translate Programming Language",
      description: "Answer questions based on existing knowledge.",
    },
    {
      type: "CalculateTheTimeComplexity",
      name: "Get Time Complexity",
      description: "Answer questions based on existing knowledge.",
    },
    {
      type: "PythontoNaturalLanguage",
      name: "Python to English",
      description: "Answer questions based on existing knowledge.",
    },
    {
      type: "ParseUnstructureddata",
      name: "Convert Unstructured to Structured Data",
      description: "Answer questions based on existing knowledge.",
    },
    {
      type: "SQLTranslate",
      name: "English to SQL",
      description: "Answer questions based on existing knowledge.",
    },
    {
      type: "Summarizefora2ndgrader",
      name: "Text Summarizer",
      description: "Answer questions based on existing knowledge.",
    },
    {
      type: "NaturalLanguagetoScala",
      name: "English to Scala",
      description: "Answer questions based on existing knowledge.",
    },
    {
      type: "NaturalLanguagetoJava",
      name: "English to Java",
      description: "Answer questions based on existing knowledge.",
    },
    {
      type: "PythonDocstring",
      name: "Get Doc String for Python Code",
      description: "Answer questions based on existing knowledge.",
    },
    {
      type: "PythonBugfixer",
      name: "Python Bug Fixer",
      description: "Answer questions based on existing knowledge.",
    },
    {
      type: "NaturalLanguagetoPython",
      name: "English to Python",
      description: "Answer questions based on existing knowledge.",
    },
    {
      type: "CodeForPlayground",
      name: "PlayArea",
      description: "Answer questions based on existing knowledge.",
    },
    {
      type: "JavaScripttoPython",
      name: "JavaScript to Python",
      description: "Answer questions based on existing knowledge.",
    },
    {
      type: "view",
      name: "View",
      description: "Answer questions based on existing knowledge.",
    },
    {
      type: "storeprocedure",
      name: "Store Procedure",
      description: "Answer questions based on existing knowledge.",
    },
    {
      type: "anisql",
      name: "AniSQL",
      description: "Answer questions based on existing knowledge.",
    },
    {
      type: "oraclesql",
      name: "Oracle SQL",
      description: "Answer questions based on existing knowledge.",
    },
    {
      type: "postgresql",
      name: "Postgres SQL",
      description: "Answer questions based on existing knowledge.",
    },
    {
      type: "Explaincode",
      name: "Code Explanation",
      description: "Answer questions based on existing knowledge.",
    },
    {
      type: "VBACode",
      name: "VBA Code",
      description: "Answer questions based on existing knowledge.",
    },
    {
      type: "QuestionAndAnswering",
      name: "Question And Answering",
      description: "Answer questions based on existing knowledge.",
    },
    {
      type: "EssayWriting",
      name: "Essay Wrting",
      description: "Answer questions based on existing knowledge.",
    },
    {
      type: "QuestionGeneration",
      name: "Question Generation",
      description: "Answer questions based on existing knowledge.",
    },
    {
      type: "MCQGeneration",
      name: "MCQ Generation",
      description: "Answer questions based on existing knowledge.",
    },
    {
      type: "GetExcelFormula",
      name: "Get Excel Formula",
      description: "Answer questions based on existing knowledge.",
    },
    {
      type: "ExtractImportantWords",
      name: "Extract Important Words",
      description: "Answer questions based on existing knowledge.",
    },
    {
      type: "AptitudeAnswers",
      name: "Aptitude Answers",
      description: "Answer questions based on existing knowledge.",
    },
    {
      type: "PlagiarismRemover",
      name: "Plagiarism Remover",
      description: "Answer questions based on existing knowledge.",
    },
    {
      type: "ContentWriter",
      name: "Content Writer",
      description: "Answer questions based on existing knowledge.",
    },
    {
      type: "MarketResearchOnlyNumbers",
      name: "Market Research (Only Numbers)",
      description: "Answer questions based on existing knowledge.",
    },
    {
      type: "MarketResearch",
      name: "Market Research",
      description: "Answer questions based on existing knowledge.",
    },
    {
      type: "Explaincode",
      name: "Code Explanation",
      description: "Answer questions based on existing knowledge.",
    },
    {
      type: "writeJavaScript",
      name: "English to JavaScript",
      description: "Answer questions based on existing knowledge.",
    },
  ]);
  const setFirstSectionImage = (typeselected) => {
    localStorage.setItem("hometype", typeselected);
    const type = localStorage.getItem("hometype");
    let img;
    if (type === "convertfromPySparktoSQL") {
      setSectionOneImage(Img6);
    } else if (type === "TranslateProgrammingLanguage") {
      setSectionOneImage(Img16);
    } else if (type === "CalculateTheTimeComplexity") {
      setSectionOneImage(Img15);
    } else if (type === "PythontoNaturalLanguage") {
      setSectionOneImage(Img9);
    } else if (type === "ParseUnstructureddata") {
      setSectionOneImage(Img7);
    } else if (type === "convertfromPandastoPySpark") {
      setSectionOneImage(Img17);
    }
  };
  const setSecondImage = (typeselected) => {
    localStorage.setItem("hometype", typeselected);
    const type = localStorage.getItem("hometype");
    let img;
    if (type === "NaturalLanguagetoJava") {
      setSectionSecondImage(Img4);
    } else if (type === "Summarizefora2ndgrader") {
      setSectionSecondImage(Img14);
    } else if (type === "PythonDocstring") {
      setSectionSecondImage(Img10);
    } else if (type === "NaturalLanguagetoScala") {
      setSectionSecondImage(Img12);
    } else if (type === "PythonBugfixer") {
      setSectionSecondImage(Img9);
    } else if (type === "NaturalLanguagetoPython") {
      setSectionSecondImage(Img11);
    }
  };
  const setThirdImage = (typeselected) => {
    localStorage.setItem("hometype", typeselected);
    const type = localStorage.getItem("hometype");
    let img;
    if (type === "JavaScripttoPython") {
      setSectionThirdImage(Img5);
    } else if (type === "view") {
      setSectionThirdImage(view);
    } else if (type === "storeprocedure") {
      setSectionThirdImage(storeprocedure);
    } else if (type === "anisql") {
      setSectionThirdImage(ANSQL);
    } else if (type === "oraclesql") {
      setSectionThirdImage(oracle);
    } else if (type === "postgresql") {
      setSectionThirdImage(postgresql);
    }
  };
  const setFourthImage = (typeselected) => {
    localStorage.setItem("hometype", typeselected);
    const type = localStorage.getItem("hometype");
    let img;
    if (type === "VBACode") {
      setSectionFourthImage(vba);
    } else if (type === "MCQGeneration") {
      setSectionFourthImage(multiplechoice);
    } else if (type === "EssayWriting") {
      setSectionFourthImage(Essay);
    } else if (type === "GetExcelFormula") {
      setSectionFourthImage(Excel);
    } else if (type === "ExtractImportantWords") {
      setSectionFourthImage(Extract);
    } else if (type === "QuestionAndAnswering") {
      setSectionFourthImage(QA);
    } else if (type === "QuestionGeneration") {
      setSectionFourthImage(General);
    }
  };
  const setFifthImage = (typeselected) => {
    localStorage.setItem("hometype", typeselected);
    const type = localStorage.getItem("hometype");
    let img;
    if (type === "PlagiarismRemover") {
      setSectionFifthImage(plagrism);
    } else if (type === "ContentWriter") {
      setSectionFifthImage(ContentCreator);
    } else if (type === "MarketResearchOnlyNumbers") {
      setSectionFifthImage(Marketingnumbers);
    } else if (type === "MarketResearch") {
      setSectionFifthImage(Marketing);
    } else if (type === "Explaincode") {
      setSectionFifthImage(Img2);
    } else if (type === "writeJavaScript") {
      setSectionFifthImage(Img1);
    }
  };
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
                  <img src={Img7} />
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
          <div className="col-xl-9 col-lg-9 section-img" data-aos="fade-left">
            <img src={sectionOne} />
          </div>
          {/* End .col */}

          <div className="col-lg-3 ms-auto">
            <ul className="skills">
              {cases?.slice(0, 6).map((ca) => (
                <li
                  className={`${
                    localStorage.getItem("hometype") === ca.type ? "active" : ""
                  }`}
                  onClick={() => setFirstSectionImage(ca.type)}
                >
                  {ca.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="row align-items-center mb-75 lg-mb-50 md-mb-20 mt-40">
          {/* End .col */}

          <div className="col-lg-3 ms-auto">
            <ul className="skills">
              {cases?.slice(7, 13).map((ca) => (
                <li
                  className={`${
                    localStorage.getItem("hometype") === ca.type ? "active" : ""
                  }`}
                  onClick={() => setSecondImage(ca.type)}
                >
                  {ca.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-xl-9 col-lg-9 section-img" data-aos="fade-left">
            <img src={sectionSecond} />
          </div>
        </div>
        <div className="row align-items-center mb-75 lg-mb-50 md-mb-20 mt-40">
          <div className="col-xl-9 col-lg-9 section-img" data-aos="fade-left">
            <img src={sectionThird} />
          </div>
          {/* End .col */}

          <div className="col-lg-3 ms-auto">
            <ul className="skills">
              {cases?.slice(14, 20).map((ca) => (
                <li
                  className={`${
                    localStorage.getItem("hometype") === ca.type ? "active" : ""
                  }`}
                  onClick={() => setThirdImage(ca.type)}
                >
                  {ca.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="row align-items-center mb-75 lg-mb-50 md-mb-20 mt-40">
          {/* End .col */}

          <div className="col-lg-3 ms-auto">
            <ul className="skills">
              {cases?.slice(21, 28).map((ca) => (
                <li
                  className={`${
                    localStorage.getItem("hometype") === ca.type ? "active" : ""
                  }`}
                  onClick={() => setFourthImage(ca.type)}
                >
                  {ca.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-xl-9 col-lg-9 section-img" data-aos="fade-left">
            <img src={sectionFourth} />
          </div>
        </div>
        <div className="row align-items-center mb-75 lg-mb-50 md-mb-20 mt-40">
          <div className="col-xl-9 col-lg-9 section-img" data-aos="fade-left">
            <img src={sectionFifth} className="imag" />
          </div>
          {/* End .col */}

          <div className="col-lg-3 ms-auto">
            <ul className="skills">
              {cases?.slice(29, 36).map((ca) => (
                <li
                  className={`${
                    localStorage.getItem("hometype") === ca.type ? "active" : ""
                  }`}
                  onClick={() => setFifthImage(ca.type)}
                >
                  {ca.name}
                </li>
              ))}
            </ul>
          </div>
          <Modal open={open} onClose={() => setOpen(false)}>
            <img src={sectionFifth} />
          </Modal>
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
      {/* <!-- /.vcamp-footer-one --> */}
    </div>
    // {/* // End .main-page-wrapper */}
  );
};

export default CreativeAgency;
