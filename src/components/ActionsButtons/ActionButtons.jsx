import "./ActionButtons.css";
const ActionButton = () => {
  return (
    <div className="order-buttons__container">
      <button className="order__button-payment">Proceed to Payment</button>
      <button className="order__button-cancel">Cancel Order</button>
    </div>
  );
};

export default ActionButton;
