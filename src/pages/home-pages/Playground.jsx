/* eslint-disable no-fallthrough */
import React from "react";
import PlaygroundHeader from "../../components/creative-agency/PlaygroundHeader";
import Sidebar from "../../components/common/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import "react-responsive-modal/styles.css";
import Dot from "../../assets/images/icon/dots.png";
import Refresh from "../../assets/images/icon/refer.png";
import Loader from "../../assets/images/assets/loader.gif";
import copy from "../../assets/images/icon/copyblack.png";
import Delivery from "../../assets/images/icon/delivery.png";
import ProtectedRoute from "../../utils/ProtectedRoute";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PlaygroundAction } from "../../redux/actions/playgroungAction";
import { toast } from "react-toastify";
import Modal from "react-responsive-modal";
import Img1 from "../../assets/images/question/JavaScript.png";
import Img2 from "../../assets/images/question/ExplainCode.png";
import Img4 from "../../assets/images/question/Java.png";
import Img5 from "../../assets/images/question/JavaScripttoPython.png";
import Img6 from "../../assets/images/question/pandaspark.png";
import Img17 from "../../assets/images/question/PandastoPySpark.png";
import Img7 from "../../assets/images/question/ParseUnstructuredData.png";
import Img8 from "../../assets/images/question/Playarea.png";
import Img9 from "../../assets/images/question/PythonBugfixer.png";
import Img10 from "../../assets/images/question/PythonDocstring.png";
import Img11 from "../../assets/images/question/pythontoenglish.png";
import Python from "../../assets/images/question/Python.png";
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
import QA from "../../assets/images/question/QA.png";
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
import Seo from "../../components/common/seo/Seo";
import { useRef } from "react";

const Playground = (props) => {
  const [textBox, setTextBox] = useState(false);
  const [modalImage, setImage] = useState("");
  const [open, setOpen] = useState(true);
  const [textBoxValue, setTextBoxValue] = useState("");
  const { userdetail } = useSelector((state) => state.user);
  const [loader, setLoader] = useState(false);
  const answertextarea = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({
    type: localStorage.getItem("type"),
    text: "",
    qatext: "",
  });

  const setModalImage = () => {
    const type = localStorage.getItem("type");
    let img;
    switch (type) {
      case "convertfromPySparktoSQL":
        img = Img6;
        return img;
      case "TranslateProgrammingLanguage":
        img = Img16;
        return img;
      case "CalculateTheTimeComplexity":
        img = Img15;
        return img;
      case "PythontoNaturalLanguage":
        img = Img11;

        return img;
      case "ParseUnstructureddata":
        img = Img7;

        return img;
      case "SQLTranslate":
        img = Img13;
        return img;
      case "Summarizefora2ndgrader":
        img = Img14;
        return img;
      case "NaturalLanguagetoScala":
        img = Img12;
        return img;
      case "NaturalLanguagetoJava":
        img = Img4;

        return img;
      case "PythonDocstring":
        img = Img10;
        return img;
      case "PythonBugfixer":
        img = Img9;

        return img;
      case "NaturalLanguagetoPython":
        img = Python;
        return img;
      case "CodeForPlayground":
        img = Img8;
        return img;
      case "convertfromPandastoPySpark":
        img = Img17;

        return img;
      case "JavaScripttoPython":
        img = Img5;

        return img;
      case "Explaincode":
        img = Img2;

        return img;
      case "writeJavaScript":
        img = Img1;
        return img;
      case "view":
        img = view;
        return img;
      case "storeprocedure":
        img = storeprocedure;
        return img;
      case "anisql":
        img = ANSQL;
        return img;
      case "oraclesql":
        img = oracle;
        return img;
      case "postgresql":
        img = postgresql;
        return img;
      case "VBACode":
        img = vba;
        return img;
      case "QuestionAndAnswering":
        img = QA;
        return img;
      case "EssayWriting":
        img = Essay;
        return img;
      case "QuestionGeneration":
        img = General;
        return img;
      case "MCQGeneration":
        img = multiplechoice;
        return img;
      case "GetExcelFormula":
        img = Excel;
        return img;
      case "ExtractImportantWords":
        img = Extract;
        return img;
      case "AptitudeAnswers":
        img = Apptitude;
        return img;
      case "PlagiarismRemover":
        img = plagrism;
        return img;
      case "ContentWriter":
        img = ContentCreator;
        return img;
      case "MarketResearchOnlyNumbers":
        img = Marketingnumbers;
        return img;
      case "MarketResearch":
        img = Marketing;
        return img;
      default:
        break;
    }
    return img;
  };
  const onHandlePlayground = async (e) => {
    e.preventDefault();
    setLoader(true);
    console.log(userdetail?.requestBalance);
    if (userdetail?.requestBalance <= 0) {
      setLoader(false);
      toast.info("Your request balance is finished. Please buy requests");
      setTimeout(() => navigate("/price"), 1000);
    } else {
      const { type, text, qatext } = data;
      const newData = {
        type,
        text:
          localStorage.getItem("type") === "QuestionAndAnswering"
            ? `${text} ${qatext}`
            : text,
      };
      const res = await dispatch(PlaygroundAction(newData));
      if (res?.status_code == 200) {
        setTextBox(true);
        setTextBoxValue(res?.data?.choices[0]?.message?.content);
        setLoader(false);
        setData({ ...data, text: "", qatext: "" });
      } else {
        toast.error(res?.message);
        setLoader(false);
      }
    }
  };
  const copyoutput = () => {
    let value = answertextarea.current.value;
  };
  const textansweraread =
    localStorage.getItem("type") === "view"
      ? `CREATE VIEW ${textBoxValue}`
      : localStorage.getItem("type") === "storeprocedure"
      ? `CREATE PROCEDURE ${textBoxValue}`
      : localStorage.getItem("type") === "anisql" ||
        localStorage.getItem("type") === "oraclesql" ||
        localStorage.getItem("type") === "postgresql"
      ? ` ${textBoxValue}`
      : textBoxValue;
  console.log(textansweraread, "textansweraread");
  return (
    <ProtectedRoute>
      <Seo title={`${localStorage.getItem("typename")} || Playground`} />
      <div className="playground-div">
        <PlaygroundHeader />
        <div className="container-fluid">
          <div className="row">
            {/* <div className="col-sm-3 col-md-3"><Sidebar /></div> */}
            <div className="col-sm-12 col-md-12 inner-div p-4">
              <div className="d-flex justify-content-between align-items-center border-bottom p-2 pb-2">
                <h4 className="">{localStorage.getItem("typename")}</h4>
                <div className="d-flex justify-content-between align-items-center ">
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
                <textarea
                  placeholder="Enter Question"
                  className="text-area2"
                  name="message"
                  required
                  onChange={(e) => setData({ ...data, text: e.target.value })}
                ></textarea>
                {localStorage.getItem("type") === "QuestionAndAnswering" && (
                  <div className="row">
                    <div className="col-md-6">
                      <div className="profile-details">
                        {" "}
                        <input
                          type={"text"}
                          placeholder="enter a question"
                          onChange={(e) =>
                            setData({ ...data, qatext: e.target.value })
                          }
                        />
                      </div>
                    </div>
                  </div>
                )}
                <div className="bottom-content">
                  <ul>
                    <li className="mt-60 d-flex flex-column">
                      {" "}
                      <Link
                        to="#"
                        className="theme-btn-green ripple-btn"
                        onClick={(e) => onHandlePlayground(e)}
                      >
                        {loader ? <img src={Loader} /> : "Submit"}
                      </Link>
                      {loader && <p>AI is computing, hold on!</p>}
                    </li>
                  </ul>
                </div>
                {textBox && (
                  <>
                    <div className="d-flex justify-content-between align-items-center mt-50">
                      <h4 className="fw-bold">Below is your answer</h4>
                      <div className="">
                        <div
                          className=" ripple-btn"
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            navigator.clipboard.writeText(textBoxValue)
                          }
                        >
                          {<img src={copy} />}
                        </div>
                      </div>
                    </div>

                    <textarea
                      placeholder="Your Output*"
                      className="text-area"
                      name="message"
                      ref={answertextarea}
                      required
                      value={textansweraread}
                      disabled={true}
                    ></textarea>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <Modal open={open} onClose={() => setOpen(false)}>
          <h4>{localStorage.getItem("typename")} Example</h4>
          <img src={setModalImage()} />
        </Modal>
      </div>
    </ProtectedRoute>
  );
};

export default Playground;
