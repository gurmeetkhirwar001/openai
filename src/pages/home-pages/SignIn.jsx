import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { UserSignUp } from "../../redux/actions/userAction";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Sign = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const passwordHandler = () => setPassword(!password);

  const HandleSubmit = async (e) => {
    e.preventDefault();
    const res = await dispatch(
      UserSignUp({
        firstName,
        lastName,
        email,
        password,
      })
    );
    console.log(res, "ressss");
    if (res?.Status_code == 200) {
      toast.success(res?.message);
      setTimeout(() => navigate("/"), 5000);
    } else {
      toast.error(res?.message);
    }
  };
  // Handling the form submission

  return (
    <form className="d-flex justify-content-center align-items-center flex-column h60">
      <div className="form-style-one">
        <div className="row">
          <div className="col-12">
            <div className="input-group-meta mb-30">
              <label>First Name</label>
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
            <div className="input-group-meta mb-30">
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
            <button
              className="theme-btn-one w-100 mt-50 mb-50"
              onClick={(e) => HandleSubmit(e)}
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Sign;
