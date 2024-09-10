import iconMusic from "../../assets/images/icon-music.svg";
import "./PricingDetails.css";

const PricingDetails = () => {
  return (
    <div className="PricingDetails__container">
      <img src={iconMusic} alt="Music Icon" width="24px" height="24px" />

      <span>
        <h4>Annual Plan</h4>
        <p>$59.99/year</p>
      </span>
      <a href="">Change</a>
    </div>
  );
};
export default PricingDetails;
