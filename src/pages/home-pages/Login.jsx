import React, { cloneElement, useState } from "react";

import { useDispatch } from "react-redux";
import { UserLogin } from "../../redux/actions/userAction";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Loader from "../../assets/images/assets/loader.gif";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [passwordloader, setPasswordloader] = useState(false);
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loader, setloader] = useState(false);
  const passwordHandler = () => setPasswordloader(!passwordloader);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onHandleLogin = async (e) => {
    setloader(true);
    e.preventDefault();
    if (email == "" || password == "") {
      setMessage("All Fields are required");
    }
    const res = await dispatch(
      UserLogin({
        email,
        password,
      })
    );
    console.log(res);
    if (res?.Status_code == 200) {
      setloader(false);
      toast.success(res?.message);
      localStorage.setItem("token", res?.Token);
      setTimeout(() => navigate("/use-cases"), 5000);
    } else {
      setloader(false);
      console.log(res, "resss");
      toast.error(res?.data?.message);
    }
  };

  return (
    <form>
      <p style={{ color: "red" }}>{message}</p>
      {/* <p style={{ color: "red", textAlign: "center" }}>{message}</p> */}
      <div className="row">
        <div className="col-12">
          <div className="input-group-meta mb-30">
            <label>Email</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="rshdkabir@gmail.com"
              required={true}
            />
          </div>
        </div>

        <div className="col-12">
          <div className="input-group-meta mb-25">
            <label>Password</label>
            <input
              type={passwordloader ? "password text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              className="pass_log_id"
              required={true}
            />
            <span className="placeholder_icon">
              <span
                className={password ? "passVicon eye-slash" : "passVicon"}
                onClick={passwordHandler}
              >
                <img
                  src={require("../../assets/images/icon/icon_67.svg").default}
                  alt="icon"
                />
              </span>
            </span>
          </div>
        </div>

        <div className="col-12">
          <div className="agreement-checkbox d-flex justify-content-between align-items-center">
            {/* <div>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Keep me logged in</label>
            </div> */}
            {/* <a href="#">Forget Password?</a> */}
          </div>
          {/* <!-- /.agreement-checkbox --> */}
        </div>

        <div className="col-12">
          <button
            className="theme-btn-one w-100 mt-50 mb-50"
            onClick={onHandleLogin}
          >
            {loader ? "Sigin..." : "Login"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
