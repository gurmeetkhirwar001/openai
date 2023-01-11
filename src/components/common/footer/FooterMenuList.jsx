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
        { name: "Pricing", routeLink: "/price" },
        { name: "About Us", routeLink: "/#home" },
      ],
    },
    {
      id: 2,
      title: "Support",
      colClass: "col-lg-3 col-md-3",
      list: [
        { name: "hello@answergenie.co. ", routeLink: "/" },
        { name: "FAQ", routeLink: "#faq" },
      ],
    },
    // {
    //   id: 3,
    //   title: "About Us",
    //   colClass: "col-lg-2 col-md-4",
    //   list: [
    //     { name: "Testimonial", routeLink: "/" },
    //     { name: "About Us", routeLink: "/" },
    //     { name: "our Team", routeLink: "/" },
    //     { name: "Product", routeLink: "/" },
    //     { name: "News", routeLink: "/" },
    //     { name: "Terms of Use", routeLink: "/faq-v1" },
    //   ],
    // },
  ];

  return (
    <>
      {footerMenuContent.map((menuItem) => (
        <div
          className={`${menuItem.colClass} col-lg-4 d-flex  flex-column align-items-center `}
          key={menuItem.id}
        >
          <h6 className="footer-title">{menuItem.title}</h6>
          <ul className="footer-nav-link style-none ms-3">
            {menuItem.list.map((list, i) => (
              <li key={i}>
                <a href={list.routeLink}>{list.name}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default FooterMenuList;
