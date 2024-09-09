import "./App.css";
import ActionButton from "./components/ActionsButtons/ActionButtons";
import HeaderImage from "./components/HeaderImage/HeaderImage";
import OrderDescription from "./components/OrderDescription/OrderDescription";
import PricingDetails from "./components/PricingDetails/PricingDetails";

function App() {
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
}

export default App;
