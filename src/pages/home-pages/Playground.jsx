import React from "react";
import PlaygroundHeader from "../../components/creative-agency/PlaygroundHeader";
import Sidebar from "../../components/common/Sidebar";
import { Link } from "react-router-dom";
import Dot from "../../assets/images/icon/dots.png";
import Refresh from "../../assets/images/icon/refer.png";
import Delivery from "../../assets/images/icon/delivery.png";

const Playground = (props) => {
  return (
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
              <div className="d-flex justify-content-between align-items-center mr-2 w46">
                <div>
                  <select id="disabledSelect" class="form-select">
                    <option>Load a Preset</option>
                  </select>
                </div>
                <Link to="about-v2" className="theme-btn-blur ripple-btn">
                  Save
                </Link>
                <Link to="about-v2" className="theme-btn-blur ripple-btn">
                  View Code
                </Link>
                <Link to="about-v2" className="theme-btn-blur ripple-btn">
                  Share
                </Link>
                <Link to="about-v2" className="theme-btn-blur ripple-btn">
                  <img src={Dot} />
                </Link>
              </div>
            </div>
            <div className="mt-30">
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />

              <textarea
                placeholder="Your message*"
                className="text-area"
                name="message"
                required
              ></textarea>
              <div className="bottom-content">
                <ul>
                 <li> <Link to="about-v2" className="theme-btn-green ripple-btn">
                    Submit
                  </Link></li>
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
  );
};

export default Playground;
