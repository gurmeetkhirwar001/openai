import React from "react";
import CustomLink from "../../header/mega-menu/CustomLink";
import sidebarMenuContent from "./sidebarMenuData";

const SidebarMenu = () => {
  return (
    <ul className="style-none">
      {sidebarMenuContent.map((item) => (
        <li className="nav-item" key={item.id}>
          <a
            className="dropdown-toggle"
            href="#."
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            data-bs-auto-close="outside"
          >
            {item.name}
          </a>

          <ul className="dropdown-menu">
            {item.dropdownList.map((list, i) => (
              <li key={i}>
                <CustomLink to={list.routeLink} className="dropdown-item">
                  <span>{list.name}</span>
                </CustomLink>
              </li>
            ))}
          </ul>
          {/* End dropdown content */}
        </li>
      ))}
      <li className="nav-item">
        <CustomLink to="/blog-v1">News</CustomLink>
      </li>
      <li className="nav-item">
        <CustomLink to="/contact-v1">Contact us</CustomLink>
      </li>
    </ul>
  );
};

export default SidebarMenu;
