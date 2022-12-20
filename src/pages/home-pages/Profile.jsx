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
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img src={Profile} />
            <div>
              <h3 className="fw-bold">Profile</h3>
              <p>Uodate your profile details</p>
            </div>
          </div>
          <div className="d-flex">
            <button type="button" className="btn btn-outline-dark me-2">
              Cancel
            </button>
            <button type="button" className="btn btn-dark ">
              Save
            </button>
          </div>
        </div>
        <div className="profile-details">
          <div className="row">
            <div className="col-3">
              <div className="input-group-meta">
                <label className="fw-bold mt-10">Username</label>
              </div>
            </div>
            <div className="col-8">
              <input
                type="username"
                // onChange={(e) => setEmail(e.target.value)}
                placeholder=""
                required
              />
            </div>
          </div>
          <div className="row mt-50">
            <div className="col-3">
              <div className="input-group-meta">
                <label className="fw-bold mt-10">Website</label>
              </div>
            </div>
            <div className="col-8">
              <input
                type=""
                // onChange={(e) => setEmail(e.target.value)}
                placeholder=""
                required
              />
            </div>
          </div>
          <div className="row mt-50">
            <div className="col-3">
              <div className="input-group-meta">
                <label className="fw-bold mt-10">Job Title</label>
              </div>
            </div>
            <div className="col-8">
              <input
                type=""
                // onChange={(e) => setEmail(e.target.value)}
                placeholder=""
                required
              />
            </div>
          </div>
          <div className="row mt-50">
            <div className="col-3">
              <div className="input-group-meta">
                <label className="fw-bold mt-10">
                  Your Bio<span className="d-block">short introduction</span>
                </label>
              </div>
            </div>
            <div className="col-8">
              <textarea
                class="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea"
                style={{height: "200px"}}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pro;
