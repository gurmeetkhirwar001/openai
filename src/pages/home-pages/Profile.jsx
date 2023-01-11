import React from "react";
import Profile from "../../assets/images/icon/profile.png";
import Seo from "../../components/common/seo/Seo";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/creative-agency/Header";
import { useState } from "react";
import {
  GetUser,
  UpdateUser,
  UpdatePassword,
} from "../../redux/actions/userAction";
import { toast } from "react-toastify";
import ProtectedRoute from "../../utils/ProtectedRoute";
const Pro = () => {
  const { userdetail } = useSelector((state) => state.user);

  const [updatePassword, setUpdatepassword] = useState(false);
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    firstName: userdetail?.firstName,
    lastName: userdetail?.lastName,
    email: userdetail?.email,
    password: "",
    newpassword: "",
    userid: userdetail?._id,
    phone: userdetail?.phone,
  });
  const UpdateProfile = async () => {
    const data = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      _id: user.userid,
    };
    const response = await dispatch(UpdateUser(data));
    if (response?.status_code === 200) {
      toast.success(response?.message);
      dispatch(GetUser());
    } else {
      toast.error(response?.message);
    }
  };
  const UpdateUserPassword = async () => {
    // console.log(userdetail?.)
    const data = {
      oldpassword: user.password,
      password: user.newpassword,
      _id: userdetail?._id,
    };
    const response = await dispatch(UpdatePassword(data));
    if (response?.status_code === 200) {
      toast.success(response?.message);
      dispatch(GetUser());
      setUpdatepassword(false);
    } else {
      toast.error(response?.message);
    }
  };
  return (
    <ProtectedRoute>
      <div className="main-page-wrapper light-bg">
        <Seo title="Profile" />
        {/* End Seo Related data */}

        <Header />
        <div className="profile container mt-140">
          <h2>Profile</h2>
          <div className="profile-details">
            <div className="row">
              <div className="col-md-6">
                <div className="input-group-meta">
                  <label className="fw-bold mt-10">First Name</label>
                  <input
                    type="text"
                    onChange={(e) =>
                      setUser({ ...user, firstName: e.target.value })
                    }
                    placeholder=""
                    required
                    value={user.firstName}
                  />
                </div>
                <div className="input-group-meta">
                  <label className="fw-bold mt-10">Email</label>
                  <input
                    type="email"
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                    placeholder=""
                    required
                    value={user.email}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-group-meta">
                  <label className="fw-bold mt-10">Last Name</label>
                  <input
                    type="text"
                    onChange={(e) =>
                      setUser({ ...user, lastName: e.target.value })
                    }
                    placeholder=""
                    required
                    value={user.lastName}
                  />
                </div>
                <div className="input-group-meta">
                  <label className="fw-bold mt-10">Plan</label>
                  <input
                    type="text"
                    // onChange={(e) => setEmail(e.target.value)}
                    placeholder=""
                    required
                    disabled
                    value={user.plan || ""}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-group-meta">
                  <label className="fw-bold mt-10">Phone</label>
                  <input
                    type="text"
                    onChange={(e) =>
                      setUser({ ...user, phone: e.target.value })
                    }
                    placeholder=""
                    required
                    value={user.phone}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              {" "}
              <button
                className="theme-btn-one mt-40 mb-50"
                onClick={() => UpdateProfile()}
              >
                Update Profile
              </button>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="input-group-meta">
                  <label className="fw-bold mt-10">Password</label>
                  <input
                    type="password"
                    onChange={(e) =>
                      setUser({ ...user, password: e.target.value })
                    }
                    placeholder=""
                    required
                  />
                </div>
              </div>
              {updatePassword && (
                <div className="col-md-6">
                  <div className="input-group-meta">
                    <label className="fw-bold mt-10">New Password</label>
                    <input
                      type="password"
                      onChange={(e) =>
                        setUser({ ...user, newpassword: e.target.value })
                      }
                      placeholder=""
                      required
                    />
                  </div>
                </div>
              )}

              {updatePassword ? (
                <div className="col-md-4">
                  {" "}
                  <button
                    className="theme-btn-one mt-40 mb-50"
                    onClick={() => UpdateUserPassword()}
                  >
                    Update Pasword
                  </button>
                </div>
              ) : (
                <div className="col-md-4">
                  {" "}
                  <button
                    className="theme-btn-one mt-40 mb-50"
                    onClick={() => setUpdatepassword(!updatePassword)}
                  >
                    Change Pasword
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};
export default Pro;
