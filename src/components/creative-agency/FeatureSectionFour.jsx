import React from "react";
import { Link } from "react-router-dom";
import shapeImg from "../../assets/images/shape/shape_05.svg";
import icon1 from "../../assets/images/icon/icon_29.svg";
import icon2 from "../../assets/images/icon/icon_30.svg";
import icon3 from "../../assets/images/icon/icon_31.svg";
import icon4 from "../../assets/images/icon/icon_32.svg";

const FeatureSectionFour = () => {
  const featureContent = [
    {
      id: 1,
      icon: icon1,
      title: "File sharing",
      description: `Elit esse cillum dolore eu fugiat nulla pariatur`,
      delayAnimation: 0,
    },
    {
      id: 2,
      icon: icon2,
      title: "Team Managment",
      description: `Elit esse cillum dolore eu fugiat nulla pariatur`,
      delayAnimation: 100,
    },
    {
      id: 3,
      icon: icon3,
      title: "Cloud storage",
      description: `Elit esse cillum dolore eu fugiat nulla pariatur`,
      delayAnimation: 0,
    },
    {
      id: 4,
      icon: icon4,
      title: "Voice & video call",
      description: `Elit esse cillum dolore eu fugiat nulla pariatur`,
      delayAnimation: 100,
    },
  ];

  return (
    <>
      <img src={shapeImg} alt="shape" className="shapes shape-one" />
      {/* End shape image */}

      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-5 col-lg-6" data-aos="fade-up">
            <div className="text-wrapper mb-130 lg-mb-70">
              <div className="title-style-one">
                <h2 className="title">
                  Why <br /> you <span>choose</span> vCamp.
                </h2>
              </div>
              <p className="meta-info-text text-lg">
                Lorem ipsum dolor sit consecte adiel sed do eiusmod tem incid ut
                labore split.
              </p>
              <Link to="about-v2" className="theme-btn-three">
                Learn more <i className="fas fa-angle-right"></i>
              </Link>
            </div>
            {/* <!-- /.text-wrapper --> */}
          </div>
          {/* End .col */}

          <div className="col-lg-6 ms-auto">
            <div className="row gx-5">
              {featureContent.map((feature) => (
                <div
                  className="col-sm-6"
                  data-aos="fade-up"
                  data-aos-delay={feature.delayAnimation}
                  key={feature.id}
                >
                  <div className="card-style-four mb-130 lg-mb-70">
                    <div className="icon d-flex align-items-end">
                      <img src={feature.icon} alt="icon" className="tran3s" />
                    </div>
                    <h4 className="title">{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                  {/* <!-- /.card-style-four --> */}
                </div>
              ))}
            </div>
            {/* Emd .row .gx-5 */}
          </div>
          {/* End .col */}
        </div>
        {/* End .row */}
      </div>
      {/* End .container */}
    </>
  );
};

export default FeatureSectionFour;
