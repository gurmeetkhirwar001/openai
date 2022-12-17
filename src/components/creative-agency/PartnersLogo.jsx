import React from "react";
import logo1 from "../../assets/images/logo/logo-6.png";
import logo2 from "../../assets/images/logo/logo-7.png";
import logo3 from "../../assets/images/logo/logo-8.png";
import logo4 from "../../assets/images/logo/logo-9.png";
import logo5 from "../../assets/images/logo/logo-10.png";
import logo6 from "../../assets/images/logo/logo-11.png";
import logo7 from "../../assets/images/logo/logo-12.png";
import logo8 from "../../assets/images/logo/logo-13.png";

const partnersImg = [
  { id: 1, link: "http://google.com/", img: logo1 },
  { id: 2, link: "http://google.com/", img: logo2 },
  { id: 3, link: "http://google.com/", img: logo3 },
  { id: 4, link: "http://google.com/", img: logo4 },
  { id: 5, link: "http://google.com/", img: logo5 },
  { id: 6, link: "http://google.com/", img: logo6 },
  { id: 7, link: "http://google.com/", img: logo7 },
  { id: 8, link: "http://google.com/", img: logo8 },
];

const PartnersLogo = () => {
  return (
    <>
      {partnersImg.map((partner) => (
        <div className="col-md-3 col-6" key={partner.id}>
          <div className="logo d-flex align-items-center justify-content-center">
            <a href={partner.link} target="_blank" rel="noopener noreferrer">
              <img src={partner.img} alt="logo" className="tran3s" />
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default PartnersLogo;
