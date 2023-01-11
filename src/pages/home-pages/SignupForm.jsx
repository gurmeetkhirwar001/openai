import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { UserSignUp } from "../../redux/actions/userAction";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  //   const [password, setPassword] = useState(false);
  //   const passwordHandler = () => setPassword(!password);

  const [confirmPassword, setConfirmPassword] = useState(false);
  const [passwordloader, setPasswordloader] = useState(false);
  const confirmPasswordHandler = () => setConfirmPassword(!confirmPassword);
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const passwordHandler = () => setPasswordloader(!passwordloader);
  const navigate = useNavigate();
  const HandleSignup = async (e) => {
    e.preventDefault();
    if (firstName == "" || lastName == "" || email == "" || password == "") {
      setMessage("All Fields are required");
    } else {
      const response = await dispatch(
        UserSignUp({
          firstName: firstName,
          lastName,
          email,
          password,
          phone,
        })
      );
      if (response?.Status_code == 200) {
        toast.success(response?.message);
        setTimeout(() => navigate("/"), 5000);
      } else {
        toast.error(response?.message);
      }
    }
  };
  return (
    <form>
      <p style={{ color: "red" }}>{message}</p>
      <div className="row">
        <div className="col-12">
          <div className="input-group-meta mb-25">
            <label> First Name</label>
            <input
              type="name"
              onChange={(e) => setFirstName(e.target.value)}
              placeholder=""
              value={firstName}
              required={true}
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
              required={true}
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
              required={true}
            />
          </div>
        </div>
        <div className="col-12">
          <div className="input-group-meta mb-30">
            <label>Phone</label>
            <input
              type="text"
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
              max={10}
              required={true}
            />
          </div>
        </div>

        <div className="col-12">
          <div className="input-group-meta mb-25">
            <label>Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type={"password"}
              placeholder="Enter Password"
              className="pass_log_id"
              required={true}
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
              type={"password"}
              placeholder="Enter Password"
              className="pass_log_id"
              required={true}
            />
            {/* <span className="placeholder_icon">
              <span
                className={confirmPassword ? "eye-slash" : "passVicon"}
                onClick={confirmPasswordHandler}
              >
                <img
                  src={require("../../assets/images/icon/icon_67.svg").default}
                  alt="icon"
                />
              </span>
            </span> */}
          </div>
        </div>

        <div className="col-12">
          <button
            className="theme-btn-one w-100 mt-50 mb-50"
            onClick={(e) => HandleSignup(e)}
          >
            Signup
          </button>
        </div>
      </div>
    </form>
  );
};

export default Signup;
