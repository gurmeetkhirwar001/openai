import React from "react";
import Seo from "../../components/common/seo/Seo";
import Header from "../../components/creative-agency/Header";
import { useState } from "react";
import UseCaseIcon from "../../assets/images/icon/usercase.png";
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
      name: "Convert Unstructured to Structured Data",
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

  const HandleSearch = (e) => {
    const query = e.target.value;
    if (e.target.value !== "") {
      setSearching(true);
      const scases = cases.filter((casee) => casee.name.match(query));
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
          {dataArray?.map((caseobj) => (
            <div className="col-md-4 col-xs-12 ">
              <div
                className={`d-flex  ${
                  !searching && "justify-space-around  align-items-center"
                } mb-10`}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate("/playground");
                  localStorage.setItem("type", caseobj.type);
                  localStorage.setItem("typename", caseobj.name);
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
