import "./App.css";
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
      <ProductPage />
    </div>
  );
}

export default App;
