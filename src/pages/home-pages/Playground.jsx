import React from "react";
import PlaygroundHeader from "../../components/creative-agency/PlaygroundHeader";
import Sidebar from "../../components/common/Sidebar";
import { Link } from "react-router-dom";
import Dot from "../../assets/images/icon/dots.png";
import Refresh from "../../assets/images/icon/refer.png";
import Delivery from "../../assets/images/icon/delivery.png";
import ProtectedRoute from "../../utils/ProtectedRoute";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { PlaygroundAction } from "../../redux/actions/playgroungAction";
import { toast } from "react-toastify";

const Options = {
  Text: "text",
  SqlQuery: "SqlQuery",
  "Natural Language to Python": "NaturalLanguagetoPython",
  "Python Bug fixer": "PythonBugfixer",
  "Python Doc string": "PythonDocstring",
  "Natural Language to Java": "NaturalLanguagetoJava",
  "Natural Language to Scala": "NaturalLanguagetoScala",
  "Summarize for a 2nd grader": "Summarizefora2ndgrader",
  "SQL Translate": "SQLTranslate",
  "Parse Unstructured data": "ParseUnstructureddata",
  "Python to Natural Language": "PythontoNaturalLanguage",
  "Calculate The Time Complexity": "CalculateTheTimeComplexity",
  "Translate Programming Language": "TranslateProgrammingLanguage",
  "Convert from PySparktoSQL": "convertfromPySparktoSQL",
  "Write JavaScript": "writeJavaScript",
  "Explain code": "Explaincode",
  "JavaScript to Python": "JavaScripttoPython",
  "Code For Playground": "CodeForPlayground",
};

const Playground = (props) => {
  const [textBox, setTextBox] = useState(false);
  const [textBoxValue, setTextBoxValue] = useState("");
  const dispatch = useDispatch();
  const [data, setData] = useState({
    type: "",
    text: localStorage.getItem("type"),
  });
  const onHandlePlayground = async (e) => {
    e.preventDefault();
    const res = await dispatch(PlaygroundAction(data));
    if (res?.status_code == 200) {
      setTextBox(true);
      setTextBoxValue(res?.data?.choices[0]?.text);
    } else {
      toast.error(res?.message);
    }
  };
  return (
    <ProtectedRoute>
      <div className="playground-div">
        <PlaygroundHeader />
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-3 col-md-3">
              <Sidebar />
            </div>
            <div className="col-sm-9 col-md-9 inner-div p-4">
              <div className="d-flex justify-content-between align-items-center border-bottom p-2 pb-2">
                <h4 className="">Playground</h4>
                <div className="d-flex justify-content-between align-items-center ">
                  <div>
                    <select
                      id="disabledSelect"
                      class="form-select"
                      onChange={(e) =>
                        setData({ ...data, type: e.target.value })
                      }
                    >
                      <option>Load a Preset</option>
                      {Object.keys(Options).map((key) => (
                        <option value={Options[key]}>{key}</option>
                      ))}
                    </select>
                  </div>
                  {/* <Link to="about-v2" className="theme-btn-blur ripple-btn">
                    Save
                  </Link> */}
                  {/* <Link to="about-v2" className="theme-btn-blur ripple-btn">
                    View Code
                  </Link> */}
                  {/* <Link to="about-v2" className="theme-btn-blur ripple-btn">
                    Share
                  </Link>
                  <Link to="about-v2" className="theme-btn-blur ripple-btn">
                    <img src={Dot} />
                  </Link> */}
                </div>
              </div>
              <div className="mt-30">
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  required={true}
                  onChange={(e) => setData({ ...data, text: e.target.value })}
                />

                {textBox && (
                  <textarea
                    placeholder="Your Output*"
                    className="text-area"
                    name="message"
                    required
                    value={textBoxValue}
                    disabled={true}
                  ></textarea>
                )}
                <div className="bottom-content">
                  <ul>
                    <li>
                      {" "}
                      <Link
                        to="#"
                        className="theme-btn-green ripple-btn"
                        onClick={(e) => onHandlePlayground(e)}
                      >
                        Submit
                      </Link>
                    </li>
                    <li>
                      <img src={Refresh} />
                    </li>
                    <li>
                      <img src={Delivery} />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Playground;
