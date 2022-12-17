import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import img1 from "../../assets/images/media/img_05.jpg";
import img2 from "../../assets/images/media/img_06.jpg";
import img3 from "../../assets/images/media/img_07.jpg";

const FeedbackSlider = () => {
  const feebackSliderContent = [
    {
      id: 1,
      img: img1,
      title: "www.uiart.com",
    },
    {
      id: 2,
      img: img2,
      title: "www.todo.com",
    },
    {
      id: 3,
      img: img3,
      title: "www.icon8.com",
    },
    {
      id: 4,
      img: img2,
      title: "www.todo.com",
    },
  ];

  //   slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings} arrows={false}>
        {feebackSliderContent.map((item) => (
          <div className="item" key={item.id}>
            <div className="block-wrapper">
              <img src={item.img} alt="portfolio" className="screen" />
              <div className="overlay-content d-flex align-items-end">
                <Link
                  to="portfolio-details-v2"
                  className="d-flex justify-content-between align-items-center"
                >
                  <span>{item.title}</span>
                  <img
                    src={
                      require("../../assets/images/icon/icon_28.svg").default
                    }
                    alt="icon"
                  />
                </Link>
              </div>
              {/* <!-- /.overlay-content --> */}
            </div>
            {/* <!-- /.block-wrapper --> */}
          </div>
        ))}
      </Slider>
    </>
  );
};

export default FeedbackSlider;
