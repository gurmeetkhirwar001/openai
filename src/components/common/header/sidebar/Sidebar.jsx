import React from "react";
import SidebarHeader from "./SidebarHeader";
import SidebarMenu from "./SidebarMenu";
import SidebarFooter from "./SidebarFooter";

const Sidebar = ({ className = "" }) => {
  return (
    <div
      className={`offcanvas offcanvas-end sidebar-nav ${className}`}
      tabIndex="-1"
      id="offcanvasRight"
      data-bs-scroll="true"
    >
      <SidebarHeader />
      {/* End sidebarheader */}

      <div className="sidebar-nav-item">
        <SidebarMenu />
      </div>
      {/* End .sidebar-nav-item */}

      <SidebarFooter />
      {/* End .sidebar-footer */}
    </div>
    //  <!-- /.sidebar-nav -->
  );
};

export default Sidebar;
