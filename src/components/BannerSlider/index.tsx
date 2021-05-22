import Slider from "react-slick";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "./styles.scss";

function CustomNextArrow() {
  return (
    <div className="custom-arrow custom-arrow--next">
      <FiChevronRight />
    </div>
  );
}

function CustomPrevArrow() {
  return (
    <div className="custom-arrow custom-arrow--prev">
      <FiChevronLeft />
    </div>
  );
}

const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
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
