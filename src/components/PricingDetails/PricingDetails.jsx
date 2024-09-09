import iconMusic from "../../assets/images/icon-music.svg";
import "./PricingDetails.css";

const PricingDetails = () => {
  return (
    <div>
      <img src={iconMusic} alt="Music Icon" width="24px" height="24px" />

      <div>
        <h4>Annual Plan</h4>
        <p>$59.99/year</p>
      </div>
      <a href="">Change</a>
    </div>
  );
};
export default PricingDetails;
