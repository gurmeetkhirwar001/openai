import React from "react";
import screen2 from "../../assets/images/assets/screen_02.png";
import screen3 from "../../assets/images/assets/screen_03.png";
import screen4 from "../../assets/images/assets/screen_04.png";
import screen5 from "../../assets/images/assets/screen_05.png";
import screen6 from "../../assets/images/assets/screen_06.png";
import screen7 from "../../assets/images/assets/screen_07.png";
import screen8 from "../../assets/images/assets/screen_08.png";
import shape3 from "../../assets/images/shape/shape_03.svg";
import btnIcon from "../../assets/images/icon/icon_23.svg";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <div className="main-content h-100">
      <div className="text-wrapper">
        <h1 className="hero-heading font-recoleta">
          <span>Expert</span> care your website.
        </h1>
        <p className="hero-sub-heading text-lg">
          We helpingclient to create WordPress websites with our talented
          expert.
        </p>

        <ul className="button-group d-sm-flex align-items-center style-none">
          <li>
            <Link to="contact-v2" className="mt-15 demo-button tran3s">
              Try a free demo
            </Link>
          </li>
          {/* End li */}

          <li>
            <Link
              to="contact-v2"
              className="mt-15 callback-button d-flex align-items-center"
            >
              <span>Request a Callback</span>{" "}
              <img src={btnIcon} alt="icon" className="ms-3" />
            </Link>
          </li>
        </ul>
        {/* End .button-group */}
      </div>
      {/* <!-- /.text-wrapper --> */}

      <div className="row gx-md-5 align-items-end h-100">
        <div className="col-3">
          <img src={screen2} alt="screen" />
        </div>
        {/* End .col */}
        <div className="col-3">
          <img src={screen3} alt="screen" className="mb-35" />
          <img src={screen4} alt="screen" />
        </div>
        {/* End .col */}
        <div className="col-3">
          <img src={screen5} alt="screen" className="mb-35" />
          <img src={screen6} alt="screen" />
        </div>
        {/* End .col */}
        <div className="col-3">
          <img src={screen7} alt="screen" className="mb-35" />
          <img src={screen8} alt="screen" />
        </div>
        {/* End .col */}
      </div>
      {/* End .row */}

      <img src={shape3} alt="shape" className="shapes shape-one" />
    </div>
    //   {/* <!-- /.main-content --> */}
  );
};

export default HeroBanner;
