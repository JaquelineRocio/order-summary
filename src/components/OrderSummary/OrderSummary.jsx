import ActionButton from "../ActionsButtons/ActionButtons";
import HeaderImage from "../HeaderImage/HeaderImage";
import OrderDescription from "../OrderDescription/OrderDescription";
import PricingDetails from "../PricingDetails/PricingDetails";
import "./OrderSummary.css";
const OrderSummary = () => {
  return (
    <>
      <main>
        <HeaderImage />
        <OrderDescription />
        <PricingDetails />
        <ActionButton />
      </main>
    </>
  );
};
export default OrderSummary;
