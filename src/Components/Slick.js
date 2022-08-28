import React from "react";
import Slider from "react-slick";
const Slick = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 619,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 449,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="slider_container wow animate__fadeInUp">
      <Slider {...settings}>
        <div className="slider_icon">
          <img src="https://preview.colorlib.com/theme/glint/images/clients/xapple.png.pagespeed.ic.LRyKIqS94g.webp" />
        </div>
        <div className="slider_icon">
          <img src="https://preview.colorlib.com/theme/glint/images/clients/xatom.png.pagespeed.ic.dwjCwOpoMB.webp" />
        </div>
        <div className="slider_icon">
          <img src="https://preview.colorlib.com/theme/glint/images/clients/xblackberry.png.pagespeed.ic.4YUA8e33nk.webp" />
        </div>
        <div className="slider_icon">
          <img src="https://preview.colorlib.com/theme/glint/images/clients/xdropbox.png.pagespeed.ic.aYYvBaVnd-.webp" />
        </div>
        <div className="slider_icon">
          <img src="https://preview.colorlib.com/theme/glint/images/clients/xenvato.png.pagespeed.ic.c-N8yRIHHd.webp" />
        </div>
        <div className="slider_icon">
          <img src="https://preview.colorlib.com/theme/glint/images/clients/xfirefox.png.pagespeed.ic.rChz0H7dGu.webp" />
        </div>
        <div className="slider_icon">
          <img src="https://preview.colorlib.com/theme/glint/images/clients/xjoomla.png.pagespeed.ic.FpAVRF996j.webp" />
        </div>
        <div className="slider_icon">
          <img src="https://preview.colorlib.com/theme/glint/images/clients/xmagento.png.pagespeed.ic.dhkdk5A1Gu.webp" />
        </div>
      </Slider>
    </div>
  );
};

export default Slick;
