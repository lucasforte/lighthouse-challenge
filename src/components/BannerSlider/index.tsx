import Slider from "react-slick";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "./styles.scss";

function CustomNextArrow(props: { onClick?: () => void }) {
  const { onClick } = props;
  return (
    <button className="custom-arrow custom-arrow--next" onClick={onClick}>
      <FiChevronRight />
    </button>
  );
}

function CustomPrevArrow(props: { onClick?: () => void }) {
  const { onClick } = props;

  return (
    <button className="custom-arrow custom-arrow--prev" onClick={onClick}>
      <FiChevronLeft />
    </button>
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
