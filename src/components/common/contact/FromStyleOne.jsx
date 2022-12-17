import React from "react";

const FromStyleOne = ({ className = "" }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <form onClick={handleSubmit}>
        <div className="row controls">
          <div className="col-12">
            <div className="input-group-meta form-group mb-25">
              <label>Name*</label>
              <input
                type="text"
                placeholder="Bostami Hasan"
                name="name"
                required
              />
              <div className="help-block with-errors"></div>
            </div>
          </div>
          {/* End .col */}

          <div className="col-12">
            <div className="input-group-meta form-group mb-40">
              <label>Email*</label>
              <input
                type="email"
                placeholder="rshdkabir@gmail.com"
                name="email"
                required
              />
              <div className="help-block with-errors"></div>
            </div>
          </div>
          {/* End .col */}

          <div className="col-12">
            <div className="input-group-meta form-group mb-35">
              <textarea
                placeholder="Your message*"
                name="message"
                required
              ></textarea>
              <div className="help-block with-errors"></div>
            </div>
          </div>
          {/* End .col */}

          <div className="col-12">
            <button className={`theme-btn-one ripple-btn w-100 ${className}`}>
              Send Message
            </button>
          </div>
          {/* End .col */}
        </div>
      </form>
    </>
  );
};

export default FromStyleOne;
