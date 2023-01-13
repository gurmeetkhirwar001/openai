import React from "react";
import Seo from "../../components/common/seo/Seo";
import Header from "../../components/creative-agency/Header";
import { useState } from "react";
import UseCaseIcon from "../../assets/images/icon/mlogo.jpg";
import { useNavigate } from "react-router-dom";
export default function UseCases() {
  const navigate = useNavigate();
  const [searched, SetSearched] = useState([]);
  const [searching, setSearching] = useState(false);
  const [cases, setCases] = useState([
    {
      type: "convertfromPySparktoSQL",
      name: "PySpark to SQL",
      icon: UseCaseIcon,
      description: "Answer questions based on existing knowledge.",
    },
    {
      type: "convertfromPandastoPySpark",
      name: "Pandas to PySpark",
      icon: UseCaseIcon,
      description: "Answer questions based on existing knowledge.",
    },
    {
      type: "TranslateProgrammingLanguage",
      name: "Translate Programming Language",
      icon: UseCaseIcon,
      description: "Answer questions based on existing knowledge.",
    },
    {
      type: "CalculateTheTimeComplexity",
      name: "Get Time Complexity",
      icon: UseCaseIcon,
      description: "Answer questions based on existing knowledge.",
    },
    {
      type: "PythontoNaturalLanguage",
      name: "Python to English",
      icon: UseCaseIcon,
      description: "Answer questions based on existing knowledge.",
    },
    {
      type: "ParseUnstructureddata",
      name: "Parse Unstructured Data",
      icon: UseCaseIcon,
      description: "Answer questions based on existing knowledge.",
    },
    {
      type: "SQLTranslate",
      name: "English to SQL",
      icon: UseCaseIcon,
      description: "Answer questions based on existing knowledge.",
    },
    {
      type: "Summarizefora2ndgrader",
      name: "Text Summarizer",
      icon: UseCaseIcon,
      description: "Answer questions based on existing knowledge.",
    },
    {
      type: "NaturalLanguagetoScala",
      name: "English to Scala",
      icon: UseCaseIcon,
      description: "Answer questions based on existing knowledge.",
    },
    {
      type: "NaturalLanguagetoJava",
      name: "English to Java",
      icon: UseCaseIcon,
      description: "Answer questions based on existing knowledge.",
    },
    {
      type: "PythonDocstring",
      name: "Get Doc String for Python Code",
      icon: UseCaseIcon,
      description: "Answer questions based on existing knowledge.",
    },
    {
      type: "PythonBugfixer",
      name: "Python Bug Fixer",
      icon: UseCaseIcon,
      description: "Answer questions based on existing knowledge.",
    },
    {
      type: "NaturalLanguagetoPython",
      name: "English to Python",
      icon: UseCaseIcon,
      description: "Answer questions based on existing knowledge.",
    },
    {
      type: "CodeForPlayground",
      name: "PlayArea",
      icon: UseCaseIcon,
      description: "Answer questions based on existing knowledge.",
    },
    {
      type: "JavaScripttoPython",
      name: "JavaScript to Python",
      icon: UseCaseIcon,
      description: "Answer questions based on existing knowledge.",
    },

    {
      type: "VBACode",
      name: "VBA Code",
      icon: UseCaseIcon,
      description: "Answer questions based on existing knowledge.",
    },
    {
      type: "QuestionAndAnswering",
      name: "Question And Answering",
      icon: UseCaseIcon,
      description: "Answer questions based on existing knowledge.",
    },
    {
      type: "EssayWriting",
      name: "Essay Wrting",
      icon: UseCaseIcon,
      description: "Answer questions based on existing knowledge.",
    },
    {
      type: "QuestionGeneration",
      name: "Question Generation",
      icon: UseCaseIcon,
      description: "Answer questions based on existing knowledge.",
    },
    {
      type: "MCQGeneration",
      name: "MCQ Generation",
      icon: UseCaseIcon,
      description: "Answer questions based on existing knowledge.",
    },
    {
      type: "GetExcelFormula",
      name: "Get Excel Formula",
      icon: UseCaseIcon,
      description: "Answer questions based on existing knowledge.",
    },
    {
      type: "ExtractImportantWords",
      name: "Extract Important Words",
      icon: UseCaseIcon,
      description: "Answer questions based on existing knowledge.",
    },
    {
      type: "AptitudeAnswers",
      name: "Aptitude Answers",
      icon: UseCaseIcon,
      description: "Answer questions based on existing knowledge.",
    },
    {
      type: "PlagiarismRemover",
      name: "Plagiarism Remover",
      icon: UseCaseIcon,
      description: "Answer questions based on existing knowledge.",
    },
    {
      type: "ContentWriter",
      name: "Content Writer",
      icon: UseCaseIcon,
      description: "Answer questions based on existing knowledge.",
    },
    {
      type: "MarketResearchOnlyNumbers",
      name: "Market Research (Only Numbers)",
      icon: UseCaseIcon,
      description: "Answer questions based on existing knowledge.",
    },
    {
      type: "MarketResearch",
      name: "Market Research",
      icon: UseCaseIcon,
      description: "Answer questions based on existing knowledge.",
    },
    {
      type: "Explaincode",
      name: "Code Explanation",
      icon: UseCaseIcon,
      description: "Answer questions based on existing knowledge.",
    },
    {
      type: "writeJavaScript",
      name: "English to JavaScript",
      icon: UseCaseIcon,
      description: "Answer questions based on existing knowledge.",
    },
  ]);
  const [subcase, setSubcases] = useState([
    {
      type: "view",
      name: "View",
      icon: UseCaseIcon,
      description: "Answer questions based on existing knowledge.",
    },
    {
      type: "storeprocedure",
      name: "Store Procedure",
      icon: UseCaseIcon,
      description: "Answer questions based on existing knowledge.",
    },
    {
      type: "anisql",
      name: "AniSQL",
      icon: UseCaseIcon,
      description: "Answer questions based on existing knowledge.",
    },
    {
      type: "oraclesql",
      name: "Oracle SQL",
      icon: UseCaseIcon,
      description: "Answer questions based on existing knowledge.",
    },
    {
      type: "postgresql",
      name: "Postgres SQL",
      icon: UseCaseIcon,
      description: "Answer questions based on existing knowledge.",
    },
  ]);
  const [submenu, setSubMenu] = useState(false);
  const HandleSearch = (e) => {
    const query = e.target.value;
    if (e.target.value !== "") {
      setSearching(true);
      const scases = cases.filter((casee) =>
        casee.name.toLowerCase().match(query.toLowerCase())
      );
      SetSearched(scases);
    } else {
      setSearching(false);
    }
  };
  const dataArray = searching == true ? searched : cases;
  return (
    <div className="main-page-wrapper light-bg">
      <Seo title={"Use Cases"} />
      <Header />
      <div className="hero-banner-two2">
        <div className="container h-100">
          <div className="vcamp-feature-section-three mt-100 lg-mt-150 md-mt-120">
            <div className="container">
              <div className="row align-items-center mb-75 lg-mb-50 md-mb-20">
                <div className="col-xl-6 col-lg-5" data-aos="fade-right">
                  <div className="title-style-one ">
                    <h4 className="title mb-60">Use Cases</h4>

                    {/* <Link to="about-v2" className="theme-btn-one ripple-btn">
                      Get Started its Free
                    </Link> */}
                  </div>
                </div>
                {/* End .col */}

                <div className="col-lg-5 ms-auto" data-aos="fade-left">
                  {/* <img src={Computer} /> */}
                </div>
                {/* End .col */}
              </div>
              {/* End .row */}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`container px-4 d-flex flex-column justify-content-center align-items-center mt-40`}
      >
        <form>
          <div className="form-style-one2">
            <div className="input-group-meta mb-30">
              <input
                type="name"
                // onChange={(e) => setFirstName(e.target.value)}
                placeholder="Search"
                // value={firstName}
                required
                onChange={(e) => HandleSearch(e)}
              />
            </div>
          </div>
        </form>
        <div className="row gx-5">
          {submenu &&
            subcase.map((sub) => (
              <div className="col-md-4 col-xs-12 ">
                <div
                  className={`d-flex  ${
                    !searching && "justify-space-around  align-items-center"
                  } ml-4`}
                  style={{ marginLeft: "4rem", cursor: "pointer" }}
                  onClick={() => {
                    navigate("/playground");
                    localStorage.setItem("type", sub.type);
                    localStorage.setItem("typename", sub.name);
                  }}
                >
                  <p className="px-2 icon-class">
                    {" "}
                    <img src={sub.icon} height={20} />
                  </p>
                  <p>
                    {sub.name}
                    <p style={{ fontSize: "10px", marginBottom: 0 }}>
                      {sub.description}
                    </p>
                  </p>
                </div>
              </div>
            ))}
          {!submenu &&
            dataArray?.map((caseobj) => (
              <div
                className={`${
                  dataArray.length === 1 && searching
                    ? "col-md-12 "
                    : "col-md-4"
                }  col-xs-12`}
              >
                <div
                  className={`d-flex  ${
                    !searching && "justify-space-around  align-items-center"
                  } mb-10`}
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    if (caseobj.type !== "SQLTranslate") {
                      navigate("/playground");
                      localStorage.setItem("type", caseobj.type);
                      localStorage.setItem("typename", caseobj.name);
                    } else {
                      setSubMenu(true);
                    }
                  }}
                >
                  <p className="px-2 icon-class">
                    {" "}
                    <img src={caseobj.icon} height={20} />
                  </p>
                  <p>
                    {caseobj.name}
                    <p style={{ fontSize: "10px", marginBottom: 0 }}>
                      {caseobj.description}
                    </p>
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
