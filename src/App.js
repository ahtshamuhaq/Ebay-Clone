import { Route, Routes } from "react-router-dom";
import "./App.css";
import PrivacyChoices from "./pages/home/PrivacyChoices";
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
      {/* <HomePage  /> */}
      <Routes>
        <Route path="/" element={<HomePage listItems={listItems} lg={lg} />} />
        <Route path="/pages/home/ProductPage" element={<ProductPage />} />
        <Route path="/pages/home/AddCart" element={<AddCart />} />
        <Route path="/pages/home/HelpAndContact" element={<HelpAndContact />} />
        <Route path="/pages/home/PrivacyChoices" element={<PrivacyChoices />} />
      </Routes>
    </div>
  );
}

export default App;
