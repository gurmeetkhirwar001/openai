import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { UserSignUp, VerifyNumber } from "../../redux/actions/userAction";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import CountryCodes from "country-codes-list";
import Select from "react-select";
const Signup = () => {
  //   const [password, setPassword] = useState(false);
  //   const passwordHandler = () => setPassword(!password);

  const [confirmPassword, setConfirmPassword] = useState(false);
  const [passwordloader, setPasswordloader] = useState(false);
  const confirmPasswordHandler = () => setConfirmPassword(!confirmPassword);
  const dispatch = useDispatch();
  const [otp, setOtp] = useState(false);
  const [otps, setOtps] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [countrycode, setCountryCode] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const countrycodes = CountryCodes.all();
  const optiosn = countrycodes.map((code) => {
    return {
      value: `+${code?.countryCallingCode}`,
      label: `+${code?.countryCallingCode}`,
    };
  });
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
          phone: `${countrycode}-${phone}`,
        })
      );
      if (response?.Status_code == 200) {
        setOtp(true);
        toast.success(response?.message);
        // setTimeout(() => navigate("/"), 5000);
      } else {
        toast.error(response?.message);
      }
    }
  };
  const handleverifyotp = async (e) => {
    e.preventDefault();
    const resp = await dispatch(VerifyNumber({ otp: otps }));

    if (resp?.Status_code == 200) {
      // setOtp(true);
      toast.success(resp?.message);
      setTimeout(() => navigate("/sign"), 5000);
    } else {
      toast.error(resp?.message);
    }
  };
  return otp ? (
    <form>
      <p style={{ color: "red" }}>{message}</p>
      <div className="row">
        <div className="col-12">
          <div className="input-group-meta mb-25">
            <label>Enter OTP*</label>
            <input
              type={"number"}
              onChange={(e) => setOtps(e.target.value)}
              placeholder="Enter Password"
              className="pass_log_id"
              required={true}
              value={otps}
              // max={6}
            />
          </div>
        </div>

        <div className="col-12">
          <button
            className="theme-btn-one w-100 mt-50 mb-50"
            onClick={(e) => handleverifyotp(e)}
          >
            Verify OTP
          </button>
        </div>
      </div>
    </form>
  ) : (
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
            <div className="row">
              <div className="col-md-2 input-group-meta">
                <Select
                  onChange={(e) => setCountryCode(e.value)}
                  options={optiosn}
                  styles={{
                    container: (baseStyles) => ({
                      ...baseStyles,
                      borderColor: "#000",
                    }),
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      height: 60,
                      borderColor: "#000",
                      border: "2px solid",
                    }),
                    input: (baseStyles) => ({
                      ...baseStyles,
                      height: 50,
                    }),
                    placeholder: (baseStyles) => ({
                      ...baseStyles,
                      color: "#000",
                    }),
                  }}
                  placeholder={`+${countrycodes[0].countryCallingCode}`}
                  components={{
                    DropdownIndicator: () => null,
                    IndicatorSeparator: () => null,
                  }}
                />
              </div>
              <div className="col-md-10">
                <input
                  type="text"
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your phone number"
                  max={10}
                  required={true}
                />
              </div>
            </div>
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
