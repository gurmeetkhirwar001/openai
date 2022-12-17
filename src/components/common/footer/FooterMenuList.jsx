import React from "react";
import { Link } from "react-router-dom";

const FooterMenuList = () => {
  const footerMenuContent = [
    {
      id: 1,
      title: "Links",
      colClass: "col-lg-3 col-md-3",
      list: [
        { name: "Home", routeLink: "/" },
        { name: "Pricing", routeLink: "/" },
        { name: "About Us", routeLink: "/" },
        { name: "Service", routeLink: "/" },
        { name: "Features", routeLink: "/" },
        { name: "Blog", routeLink: "/" },
      ],
    },
    {
      id: 2,
      title: "Legal",
      colClass: "col-lg-3 col-md-3",
      list: [
        { name: "Terms of Use", routeLink: "/" },
        { name: "Terms & Conditions", routeLink: "/" },
        { name: "Privacy Policy", routeLink: "/" },
        { name: "Cookie Policy", routeLink: "/" },
      ],
    },
    {
      id: 3,
      title: "About Us",
      colClass: "col-lg-2 col-md-4",
      list: [
        { name: "Testimonial", routeLink: "/" },
        { name: "About Us", routeLink: "/" },
        { name: "our Team", routeLink: "/" },
        { name: "Product", routeLink: "/" },
        { name: "News", routeLink: "/" },
        { name: "Terms of Use", routeLink: "/faq-v1" },
      ],
    },
  ];

  return (
    <>
      {footerMenuContent.map((menuItem) => (
        <div className={`${menuItem.colClass} col-sm-4`} key={menuItem.id}>
          <h6 className="footer-title">{menuItem.title}</h6>
          <ul className="footer-nav-link style-none">
            {menuItem.list.map((list, i) => (
              <li key={i}>
                <Link to={list.routeLink}>{list.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default FooterMenuList;
