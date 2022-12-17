import React from "react";
import icon1 from "../../assets/images/icon/mysql.png";
import icon2 from "../../assets/images/icon/ele.png";
import icon3 from "../../assets/images/icon/mongo.png";
import icon4 from "../../assets/images/icon/server.png";

import { Link } from "react-router-dom";

const FeatureSection = () => {
  const featureContent = [
    {
      id: 1,
      icon: icon1,
      title: "MySQL",
      linktitle: "Distribute my tracks ",
    },
    {
      id: 2,
      icon: icon2,
      title: "PostgreSQL",
      linktitle: "Protect my rights",
    },
    {
      id: 3,
      icon: icon3,
      title: "MongoDB",
      linktitle: "Promote my music ",
    },
    {
      id: 4,
      icon: icon4,
      title: "SQLServer",
      linktitle: "Promote my music ",
    },
  ];
  return (
    <>
      {featureContent.map((feature) => (
        <div
          className="col-xxl-3 col-lg-4 col-sm-6"
          data-aos="fade-up"
          data-aos-delay={feature.animationTime}
          key={feature.id}
        >
          <div className="d-flex justify-content-center align-items-center flex-column product-block-two mb-60 xs-mb-40">
            <div className="abc img30">
              <img src={feature.icon} />
            </div>

            {/* wishlist */}

            {/* add to cart */}
            {/* <!-- /.img-holder --> */}
            <div className="product-meta">
              <div className="d-lg-flex align-items-center justify-content-center flex-column">
                <div className="price py-3 fw-bold">{feature.title}</div>
              </div>
              <div className="description text-center">
                {feature.description}
              </div>
            </div>
            {/* <!-- /.product-meta --> */}
          </div>

          {/* <!-- /.product-block-two --> */}
        </div>
      ))}
    </>
  );
};

export default FeatureSection;
