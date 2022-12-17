import React from "react";

const FooterSubscribe = ({ className = "" }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="row align-items-center">
      <div className="col-md-6">
        <div className={`title-style-three white-vr sm-pb-20 ${className}`}>
          <h4 className="title">
            Get update by <span>signup</span> Newsletter
          </h4>
        </div>
      </div>
      {/* End .col */}

      <div className="col-md-6">
        <div className="subscribe-form">
          <form onClick={handleSubmit}>
            <input type="email" placeholder="Enter your email" />
            <button className="ripple-btn">
              Join{" "}
              <img
                src={require("../../assets/images/icon/icon_20.svg").default}
                alt="icon"
                className="ms-2 d-inline-block"
              />
            </button>
          </form>
          {/* End form */}

          <p>
            Already sign up? <a href="#">unsubscribe</a>
          </p>
        </div>
        {/* <!-- /.subscribe-form --> */}
      </div>
      {/* End .col */}
    </div>
  );
};

export default FooterSubscribe;
