import React, { useState } from "react";

const Sign = () => {
  const [password, setPassword] = useState(false);
  const passwordHandler = () => setPassword(!password);

  return (
    <form className="d-flex justify-content-center align-items-center flex-column h60">
      <div className="form-style-one">
        <div className="row">
          <div className="col-12">
            <div className="input-group-meta mb-30">
              <label>First Name</label>
              <input type="name" placeholder="" required />
            </div>
          </div>
          <div className="col-12">
            <div className="input-group-meta mb-30">
              <label>Last Name</label>
              <input type="name" placeholder="" required />
            </div>
          </div>
          <div className="col-12">
            <div className="input-group-meta mb-30">
              <label>Email</label>
              <input type="email" placeholder="rshdkabir@gmail.com" required />
            </div>
          </div>

          <div className="col-12">
            <div className="input-group-meta mb-25">
              <label>Password</label>
              <input
                type={password ? "password text" : "password"}
                placeholder="Enter Password"
                className="pass_log_id"
                required
              />
              <span className="placeholder_icon">
                <span
                  className={password ? "passVicon eye-slash" : "passVicon"}
                  onClick={passwordHandler}
                ></span>
              </span>
            </div>
          </div>

          <div className="col-12">
            <button className="theme-btn-one w-100 mt-50 mb-50">Sign in</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Sign;
