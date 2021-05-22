import Slider from "react-slick";

import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "./styles.scss";

const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="banner-slider">
      <Slider {...settings}>
        <div className="dummy-banner-item dummy-banner-item--red" />
        <div className="dummy-banner-item dummy-banner-item--green" />
        <div className="dummy-banner-item dummy-banner-item--blue" />
      </Slider>
    </div>
  );
};

export default BannerSlider;
