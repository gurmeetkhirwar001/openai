import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/media/img_04.jpg";
import img2 from "../../assets/images/shape/shape_04.svg";
import img3 from "../../assets/images/shape/shape_05.svg";

const TextBlockOne = () => {
  return (
    <>
      <div className="vcamp-text-block-one mt-300 xl-mt-200 md-mt-120">
        <div className="container">
          <div className="row">
            <div className="col-xxl-5 col-xl-6 col-lg-7 ms-auto">
              <div className="text-wrapper pt-0">
                <div className="title-style-two">
                  <h3 className="title">
                    We’ve been helping <span>cutomer</span> globally.
                  </h3>
                </div>
                <p className="meta-info-text text-lg">
                  Lorem ipsum dolor sit amet, consecte adiel sed do eiusmod
                  tempor incidi ut labore split.
                </p>
                <Link to="about-v2" className="theme-btn-one ripple-btn">
                  More about us
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* End .container */}

        <div className="left-img-meta">
          <img src={img1} alt="media" />
          <img src={img2} alt="shape" className="shapes shape-one" />
        </div>
        {/* End left-img-meta */}

        <img src={img3} alt="shape" className="shapes shape-two" />
      </div>
    </>
  );
};

export default TextBlockOne;
