/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/icon/toplogo.png";
import MegaMenuOne from "../common/header/mega-menu/MegaMenuOne";
import MobileMenuContent from "../common/header/mega-menu/MobileMenuContent";
import TopPopupSearchCanvas from "./TopPopupSearchCanvas";
import userDropdownData from "../common/header/mega-menu/dropdown-data/userDropdownDta";
import User from "../../assets/images/icon/user.png";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetUser } from "../../redux/actions/userAction";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userdetail } = useSelector((state) => state.user);
  const changeBackground = () => {
    if (window.scrollY >= 95) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  const userToken = localStorage.getItem("token");
  useEffect(() => {
    async function getUser() {
      dispatch(GetUser());
    }
    if (userToken !== null) {
      getUser();
    }
  }, []);
  console.log(userToken, "asd");
  window.addEventListener("scroll", changeBackground);
  const Logout = (e) => {
    console.log("hello");
    e.preventDefault();
    localStorage.removeItem("token");
    setTimeout(() => navigate("/"), 1000);
  };
  return (
    <header
      className={`theme-main-menu sticky-menu theme-menu-two ${
        navbar ? "fixed" : ""
      } `}
    >
      <div className="inner-content">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="brand identify" width="127" />
            </Link>
          </div>
          {/* End logo */}

          <nav className="navbar navbar-expand-lg">
            <button
              className="navbar-toggler d-block d-lg-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span></span>
            </button>
            {/* End .navbar-toggler */}

            <div className="collapse navbar-collapse" id="navbarNav">
              <MegaMenuOne />
              {/* End MegaMenuOne */}

              <div className="mobile-content d-block d-lg-none">
                <MobileMenuContent />
              </div>

              {/* <!-- /.mobile-content --> */}
            </div>
          </nav>
          {/* End navbar */}

          <div className="right-widget d-flex align-items-center">
            {userToken == null && (
              <ul className="navbar-nav d-flex justify-content-between flex-row fw-bold hoverColor">
                <li className="nav-item dropdown mega-dropdown-sm">
                  <Link to={"/sign"} className="nav-link">
                    Login
                  </Link>
                </li>
                {/* End blog dropdown */}
              </ul>
            )}
            {userToken !== null && (
              <div className="nav-item dropdown mega-dropdown-sm">
                <>
                  <img
                    src={User}
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    aria-expanded="false"
                  />

                  <div className="dropdown-menu">
                    <div>
                      <div className="row">
                        {userDropdownData.map((item) => (
                          <div className="col-lg-6" key={item.id}>
                            <div className="menu-column">
                              <h6 className="mega-menu-title">{item.title}</h6>
                              <div className="style-none mega-dropdown-list">
                                {item.menuList.map((list, i) => (
                                  <div
                                    key={i}
                                    className="dropdown-item"
                                    onClick={(e) =>
                                      list.name === "Logout"
                                        ? Logout(e)
                                        : list.name === "Profile"
                                        ? navigate(list.routerLink)
                                        : ""
                                    }
                                    style={{ cursor: "pointer" }}
                                  >
                                    <span>
                                      <span>
                                        {list.name}{" "}
                                        {list.name == "Number of Request"
                                          ? `:    ${userdetail?.requestBalance}`
                                          : ""}
                                      </span>
                                    </span>
                                    {/* </CustomLink> */}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              </div>
            )}
          </div>
          {/* <!-- /.right-widget --> */}
        </div>
      </div>
      {/* <!-- /.inner-content --> */}
    </header>
    // {/* <!-- /.theme-main-menu --> */}
  );
};

export default Header;
