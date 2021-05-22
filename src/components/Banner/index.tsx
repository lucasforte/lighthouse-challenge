import BannerSlider from "../BannerSlider";
import NavBar from "../NavBar";
import "./styles.scss";

const Banner = () => {
  return (
    <div className="page-banner">
      <BannerSlider />
      <NavBar />
    </div>
  );
};

export default Banner;
