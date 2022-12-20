import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/vCamp_01.png";
import MegaMenuOne from "../common/header/mega-menu/MegaMenuOne";
import MobileMenuContent from "../common/header/mega-menu/MobileMenuContent";
import TopPopupSearchCanvas from "./TopPopupSearchCanvas";
import userDropdownData from "../common/header/mega-menu/dropdown-data/userDropdownDta";
import CustomLink from "../common/header/mega-menu/CustomLink";
import User from "../../assets/images/icon/user.png";
const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 95) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

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
            <TopPopupSearchCanvas />
            {/* End top popup search canvas */}
            <div className="nav-item dropdown mega-dropdown-sm">
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
                              <div key={i}>
                                <CustomLink
                                  to={list.routeLink}
                                  className="dropdown-item"
                                >
                                  <span>{list.name}</span>
                                </CustomLink>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
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
