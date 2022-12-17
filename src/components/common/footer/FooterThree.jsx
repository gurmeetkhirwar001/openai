import React from "react";
import { Link } from "react-router-dom";

const FooterThree = () => {
  return (
    <ul className="style-none footer-nav d-flex flex-wrap justify-content-center align-items-center md-mt-60">
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">Products</a>
      </li>
      <li>
        <a href="#">Services</a>
      </li>

      <li className="logo text-center">
        <Link to="/">
          <img
            src={require("../../../assets/images/logo/vCamp.svg").default}
            alt="logo"
          />
        </Link>
      </li>

      <li>
        <a href="#">Privacy Policy</a>
      </li>
      <li>
        <a href="#">Terms & Conditions</a>
      </li>
    </ul>
  );
};

export default FooterThree;
