import "./App.css";
import AddCart from "./pages/home/AddCart";
import HelpAndContact from "./pages/home/HelpAndContact";
import HomePage from "./pages/home/HomePage";
import ProductPage from "./pages/home/ProductPage";
import ebay from "./pictures/ebaylg.png";

function App() {
  const listItems = [
    "Summary",
    "Recently Viewed",
    "Bids/Offers",
    "Watchlist",
    "Purchase History",
    "Buy Again",
    "Selling",
    "Saved Searches",
    "Saved Sellers",
    "Messages",
  ];
  const lg = ebay;
  return (
    <div>
      {/* <HomePage listItems={listItems} lg={lg} /> */}
      {/* <ProductPage /> */}
      {/* <AddCart /> */}
      <HelpAndContact />
    </div>
  );
}

export default App;
