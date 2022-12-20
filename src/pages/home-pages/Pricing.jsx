import React from "react";
import Home from "../../assets/images/icon/home.png";
import Professional from "../../assets/images/icon/profess.png";
import Business from "../../assets/images/icon/business.png";
import Seo from "../../components/common/seo/Seo";

import Header from "../../components/creative-agency/Header";

const LoginForm = () => {
  return (
    <div className="main-page-wrapper light-bg">
    <Seo title="Pricing" />
    {/* End Seo Related data */}

    {/* <!-- 
      =============================================
      Theme Main Menu
      ============================================== 
      --> */}
    <Header />

    <div className="price-div mt-140">
      <h3 className="text-center fw-bold  pt-40">Pricing plans</h3>
      <p className="text-center">Every plan includes 30 day free trial</p>
      <div className="container mt-60">
        <diuv className="row">
          <div className="col-sm-4 col-md-4">
            <div class="card">
              <div class="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="fw-bold">Hobby</h5>
                  <img src={Home} />
                </div>

                <h2 class="card-title text-center fw-bold mt-40">$10.00</h2>
                <p class="card-text mt-40">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem
                </p>
                <ul className="price-list d-flex justify-content-center align-items-center flex-column">
                  <li>It is a long established</li>
                  <li>It is a long established</li>

                  <li>It is a long established</li>
                </ul>
              </div>
              <button type="button" class="btn btn-light p-4 mt-4 fw-bold">Get Started Today</button>
            </div>
          </div>
          <div className="col-sm-4 col-md-4">
            <div class="card">
              <div class="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="fw-bold">Professional</h5>
                  <img src={Professional} />
                </div>

                <h2 class="card-title text-center fw-bold mt-40">$10.00</h2>
                <p class="card-text mt-40">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem
                </p>
                <ul className="price-list d-flex justify-content-center align-items-center flex-column">
                  <li>It is a long established</li>
                  <li>It is a long established</li>

                  <li>It is a long established</li>
                </ul>
              </div>
              <button type="button" class="btn btn-light p-4 mt-4 fw-bold">Get Started Today</button>
            </div>
          </div>
          <div className="col-sm-4 col-md-4">
            <div class="card">
              <div class="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="fw-bold">Business</h5>
                  <img src={Business} />
                </div>

                <h2 class="card-title text-center fw-bold mt-40">$10.00</h2>
                <p class="card-text mt-40">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem
                </p>
                <ul className="price-list d-flex justify-content-center align-items-center flex-column">
                  <li>It is a long established</li>
                  <li>It is a long established</li>

                  <li>It is a long established</li>
                </ul>
              </div>
              <button type="button" class="btn btn-light p-4 mt-4 fw-bold">Get Started Today</button>
            </div>
          </div>
        </diuv>
      </div>
    </div>
    </div>
  );
};

export default LoginForm;
