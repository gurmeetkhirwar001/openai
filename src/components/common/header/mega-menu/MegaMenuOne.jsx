import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "./CustomLink";
import logo from "../../../../assets/images/icon/toplogo.png";

import homeDropdownData from "./dropdown-data/homeMegaMenuData";
import elementsMegaMenuData from "./dropdown-data/elementsMegaMenuData";
import portfolioMegaMenuData from "./dropdown-data/portfolioMegaMenuData";
import pagesMegaMenuData from "./dropdown-data/pagesMegaMenuData";
import shopDropdownData from "./dropdown-data/shopDropdownData";
import blogDropdownData from "./dropdown-data/blogDropdownData";

const MegaMenuOne = () => {
  return (
    <ul className="navbar-nav">
      <li className="d-block d-lg-none">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="brand identity" width="127" />
          </Link>
        </div>
      </li>
      {/* End Brnad */}

      <li className="nav-item  dropdown mega-dropdown">
        <Link
          to={"/"}
          className="nav-link "
          // data-bs-toggle="dropdown"
          // data-bs-auto-close="outside"
          // aria-expanded="false"
        >
          Home
        </Link>
      </li>
      {/* End Home dropdown */}

      <li className="nav-item dropdown mega-dropdown-sm">
        <Link to={"/use-cases"} className="nav-link">
          Use Cases
        </Link>
      </li>
      {/* End elements dropdown */}

      {/* End shop dropdown */}

      <li className="nav-item dropdown mega-dropdown-sm">
        <Link to={"/price"} className="nav-link">
          Pricing
        </Link>
      </li>
      {/* End blog dropdown */}
    </ul>
    //   {/* End navbar-nav */}
  );
};

export default MegaMenuOne;
