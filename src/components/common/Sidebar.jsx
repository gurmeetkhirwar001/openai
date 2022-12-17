import React from "react";
import Cancel from "../../assets/images/icon/cancel.png";
import Send from "../../assets/images/icon/send.png";
import Pulse from "../../assets/images/icon/pulse.png";
import Calender from "../../assets/images/icon/cal.png";


const Sidebar = () => {
  return (
    <div className="Sidebar p-4">
      <div className="d-flex justify-content-between align-items-center">
        <h4 className="mb-20">Get Started</h4>
        <img src={Cancel} />
      </div>

      <p>
        Enter an instruction or select a preset, and watch the API respond with
        a completion that attempts to match the context or pattern you provided.
      </p>
      <p>
        You can control which model completes your request by changing the
        model.
      </p>
      <div className="mind-div">
        <p>KEEP IN MIND</p>
        <ul>
          <li>
            <div className="d-flex ">
              <img src={Send} />
              <p>
                Use good judgment when sharing outputs, and attribute them to
                your name or company. Learn more.
              </p>
            </div>
          </li>
          <li>
            <div className="d-flex ">
              <img src={Pulse} />
              <p>
                Use good judgment when sharing outputs, and attribute them to
                your name or company. Learn more.
              </p>
            </div>
          </li>
          <li>
            <div className="d-flex">
              <img src={Calender} />
              <p>
                Use good judgment when sharing outputs, and attribute them to
                your name or company. Learn more.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
