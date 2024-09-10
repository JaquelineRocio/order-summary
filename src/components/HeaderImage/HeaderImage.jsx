import "./HeaderImage.css";
import heroImage from "../../assets/images/illustration-hero.svg";
const HeaderImage = () => {
  return (
    <div className="image__container">
      <img src={heroImage} alt="Hero illustration" />
    </div>
  );
};

export default HeaderImage;
