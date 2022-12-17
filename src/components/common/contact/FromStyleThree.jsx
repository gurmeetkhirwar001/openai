import React from "react";

const FromStyleThree = ({ className = "" }) => {
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
            <div className="input-group-meta form-group flex-column d-flex mb-40">
              <label>Select Service*</label>
              <select
                className="form-select"
                placeholder="Choose a Service...."
                name="category"
                required
              >
                <option value="">Choose a Service....</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Website Design">Website Design</option>
                <option value="WordPress">WordPress</option>
                <option value="Web Analytics">Web Analytics</option>
                <option value="Web Programming">Web Programming</option>
                <option value="Infographic Design">Infographic Design</option>
              </select>
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

export default FromStyleThree;
