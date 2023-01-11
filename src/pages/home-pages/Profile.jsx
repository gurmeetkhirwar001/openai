import React from "react";
import Profile from "../../assets/images/icon/profile.png";
import Seo from "../../components/common/seo/Seo";

import Header from "../../components/creative-agency/Header";
const Pro = () => {
  return (
    <div className="main-page-wrapper light-bg">
      <Seo title="Profile" />
      {/* End Seo Related data */}

      <Header />
      <div className="profile container mt-140">
        <div className="profile-details">
          <div className="row">
            <div className="col-md-6">
              <div className="input-group-meta">
                <label className="fw-bold mt-10">First Name</label>
                <input
                  type="username"
                  // onChange={(e) => setEmail(e.target.value)}
                  placeholder=""
                  required
                />
              </div>
              <div className="input-group-meta">
                <label className="fw-bold mt-10">Email</label>
                <input
                  type="email"
                  // onChange={(e) => setEmail(e.target.value)}
                  placeholder=""
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="input-group-meta">
                <label className="fw-bold mt-10">Last Name</label>
                <input
                  type="username"
                  // onChange={(e) => setEmail(e.target.value)}
                  placeholder=""
                  required
                />
              </div>
              <div className="input-group-meta">
                <label className="fw-bold mt-10">Plan</label>
                <input
                  type=""
                  // onChange={(e) => setEmail(e.target.value)}
                  placeholder=""
                  required
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="input-group-meta">
                <label className="fw-bold mt-10">Password</label>
                <input
                  type="password"
                  // onChange={(e) => setEmail(e.target.value)}
                  placeholder=""
                  required
                />
              </div>
             
            </div>
            
            <div className="col-md-4"> <button className="theme-btn-one mt-40 mb-50">
                Change Pasword
              </button></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pro;
