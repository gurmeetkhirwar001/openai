import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { UserSignUp } from "../../redux/actions/userAction";
const Signup = () => {
  //   const [password, setPassword] = useState(false);
  //   const passwordHandler = () => setPassword(!password);

  const [confirmPassword, setConfirmPassword] = useState(false);
  const confirmPasswordHandler = () => setConfirmPassword(!confirmPassword);
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const passwordHandler = () => setPassword(!password);

  return (
    <form>
      <div className="row">
        <div className="col-12">
          <div className="input-group-meta mb-25">
            <label> First Name</label>
            <input
              type="name"
              onChange={(e) => setFirstName(e.target.value)}
              placeholder=""
              value={firstName}
              required
            />
          </div>
        </div>
        <div className="col-12">
          <div className="input-group-meta mb-25">
            <label>Last Name</label>
            <input
              type="name"
              onChange={(e) => setLastName(e.target.value)}
              placeholder=""
              value={lastName}
              required
            />
          </div>
        </div>

        <div className="col-12">
          <div className="input-group-meta mb-30">
            <label>Email</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="rshdkabir@gmail.com"
              required
            />
          </div>
        </div>

        <div className="col-12">
          <div className="input-group-meta mb-25">
            <label>Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
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
          <div className="input-group-meta mb-25">
            <label>Confirm Password*</label>
            <input
              type={confirmPassword ? "text" : "password"}
              placeholder="Enter Password"
              className="pass_log_id"
              required
            />
            <span className="placeholder_icon">
              <span
                className={confirmPassword ? "eye-slash" : "passVicon"}
                onClick={confirmPasswordHandler}
              >
                <img
                  src={
                    require("../../assets/images/icon/icon_67.svg").default
                  }
                  alt="icon"
                />
              </span>
            </span>
          </div>
        </div>

        <div className="col-12">
          <div className="agreement-checkbox d-flex justify-content-between align-items-center">
            <div>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Keep me logged in</label>
            </div>
            <a href="#">Forget Password?</a>
          </div>
          {/* <!-- /.agreement-checkbox --> */}
        </div>

        <div className="col-12">
          <button className="theme-btn-one w-100 mt-50 mb-50">Login</button>
        </div>
      </div>
    </form>
  );
};

export default Signup;
