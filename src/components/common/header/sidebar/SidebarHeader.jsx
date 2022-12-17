import React from "react";
import { Link } from "react-router-dom";

const SidebarHeader = () => {
  return (
    <div className="offcanvas-header">
      <div className="logo">
        <Link to="/">
          <img
            src={require("../../../../assets/images/logo/vCamp_01.svg").default}
            alt="brand"
            width="127"
          />
        </Link>
      </div>
      {/* End .logo */}

      <button
        type="button"
        className="close-btn tran3s"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      >
        <i className="bi bi-x-lg"></i>
      </button>
    </div>
    //   {/* End .offcanvas-header */}
  );
};

export default SidebarHeader;
