import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/assets/ils_05.png";
import Login from "../home-pages/Login";
import Seo from "../../components/common/seo/Seo";
import logo from "../../assets/images/icon/toplogo.png";
const SignIn = () => {
  return (
    <>
      <Seo title="Sign In" />
      {/* End Seo Related data */}

      <div className="user-data-page clearfix d-md-flex">
        <div
          className="illustration-wrapper d-none d-md-flex align-items-center justify-content-between flex-column"
          style={{ background: "#F9F5F0" }}
        >
          <div className="row">
            <div className="col-xxl-8 col-xl-11 m-auto">
              <blockquote>
                "It is better to fail in originality than to succeed in
                imitation."
              </blockquote>
              <span className="bio">— Herman Melville</span>
            </div>
          </div>
          <div className="illustration-holder">
            <img
              src={require("../../assets/images/media/media.png")}
              alt="illustration"
              className="illustration ms-auto"
            />
          </div>
        </div>
        {/* <!-- /.illustration-wrapper --> */}

        <div className="form-wrapper">
          <div className="d-flex justify-content-between align-items-center">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="" width="127" />
              </Link>
            </div>
            <Link to="/" className="go-back-button">
              Go to home
            </Link>
          </div>
          {/* logo and hom route */}

          <div className="user-data-form mt-80 lg-mt-50">
            <h2 className="font-recoleta">
              Hi <span>buddy</span>, welcome <br /> Back!
            </h2>
            <p className="header-info pt-20 pb-50 lg-pb-30">
              Don't have an account? Signup <Link to="/sign-up"> here</Link>
            </p>
            <Login />
            <p className="text-center copyright-text">
              Answergenie 2023 <a href="">hello@answergenie.co</a>
            </p>
            {/* End form */}
          </div>
          {/* End user-data-from */}
        </div>
        {/* <!-- /.form-wrapper --> */}
      </div>
      {/* <!-- /.user-data-page --> */}
    </>
  );
};

export default SignIn;
