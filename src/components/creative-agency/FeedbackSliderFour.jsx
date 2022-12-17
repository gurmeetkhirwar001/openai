import React from "react";
import Slider from "react-slick";
import img1 from "../../assets/images/media/img_08.jpg";
import img2 from "../../assets/images/media/img_09.jpg";
import img3 from "../../assets/images/media/img_10.jpg";

const FeedbackSliderFour = ({ className = "" }) => {
  const feebackSliderContent = [
    {
      id: 1,
      img: img1,
      name: "Bostami Hasan",
      country: `SPAIN `,
      blockquote: (
        <>
          “Certainly from my perspective, WordPress has been a great
          success—with <span> WordPress VIP</span> giving us that
          enterprise-level of assured quality.”
        </>
      ),
    },
    {
      id: 2,
      img: img2,
      name: "Jannatul Ekra",
      country: "USA",
      blockquote: (
        <>
          “Having a home based business makes wonderful asset to your life. The{" "}
          <span>WordPress VIP</span> stands it comes time advertise your
          business for a cheap cost.”
        </>
      ),
    },
    {
      id: 3,
      img: img3,
      name: "Bostami Hasan",
      country: "SPAIN",
      blockquote: (
        <>
          “Certainly from my perspective, WordPress has been a great
          success—with <span> WordPress VIP</span> giving us that
          enterprise-level of assured quality.”
        </>
      ),
    },
  ];

  //   slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    fade: true,
  };

  return (
    <>
      <Slider {...settings} arrows={false}>
        {feebackSliderContent.map((item) => (
          <div className="item" key={item.id}>
            <div className="row">
              <div className="col-xl-7 col-md-6 order-md-last">
                <div className="feedback-wrapper">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <img
                      src={
                        require("../../assets/images/icon/icon_33.svg").default
                      }
                      alt="icon"
                    />
                  </div>
                  <blockquote className="font-recoleta">
                    {item.blockquote}
                  </blockquote>
                  <h6 className="name">
                    {item.name} <br />
                    <span>{item.country}</span>
                  </h6>
                </div>
                {/* <!-- /.feedback-wrapper --> */}
              </div>
              {/* End .col */}

              <div className="col-xl-5 col-md-6 order-md-first">
                <div className={`image-container ${className}`}>
                  <img src={item.img} alt="reviewer identity" />
                </div>
              </div>
              {/* End .col */}
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default FeedbackSliderFour;
