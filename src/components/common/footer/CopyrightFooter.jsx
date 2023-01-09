import React from "react";
import { Link } from "react-router-dom";
import CopyrightSocial from "./CopyrightSocial";

const CopyrightFooter = () => {
  const footerList = [
    { id: 1, name: "Privacy & Terms.", routeLink: "/faq-v1" },
    { id: 2, name: "Contact Us", routeLink: "/contact-v1" },
  ];
  return (
    <div className="row">
      <div className="col-lg-4 order-lg-0 mb-15">
        <ul className="d-flex justify-content-center justify-content-lg-start footer-nav style-none">
          {footerList.map((list) => (
            <li key={list.id}>
              <Link to={list.routeLink}>{list.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      {/* End .col */}

      <div className="col-lg-4 order-lg-2 mb-15">
        <ul className="d-flex justify-content-center justify-content-lg-end social-icon style-none">
          <CopyrightSocial />
        </ul>
      </div>
      {/* End .col */}

      <div className="col-lg-4 order-lg-1 mb-15">
        <p className="copyright text-center">
          {" "}
          Answergenie 2023 <a href="">hello@answergenie.co</a>
        </p>
      </div>
      {/* End .col */}
    </div>
  );
};

export default CopyrightFooter;
