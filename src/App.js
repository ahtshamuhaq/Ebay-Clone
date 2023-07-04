import { Route, Routes } from "react-router-dom";
import "./App.css";
import PrivacyChoices from "./pages/home/PrivacyChoices";
import AddCart from "./pages/home/AddCart";
import HelpAndContact from "./pages/home/HelpAndContact";
import HomePage from "./pages/home/HomePage";
import ProductPage from "./pages/home/ProductPage";
import ebay from "./pictures/ebaylg.png";
import SignIn from "./pages/home/SignIn";
import Register from "./pages/home/Register";
import CustomerServices from "./pages/home/CustomerServices";
import EbayAccount from "./pages/home/EbayAccount";

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
        <Route
          path="/pages/home/ProductPage"
          element={<ProductPage listItems={listItems} lg={lg} />}
        />
        <Route
          path="/pages/home/AddCart"
          element={<AddCart listItems={listItems} lg={lg} />}
        />
        <Route
          path="/pages/home/HelpAndContact"
          element={<HelpAndContact listItems={listItems} lg={lg} />}
        />
        <Route
          path="/pages/home/PrivacyChoices"
          element={<PrivacyChoices listItems={listItems} lg={lg} />}
        />
        <Route path="/pages/home/SignIn" element={<SignIn />} />
        <Route path="/pages/home/Register" element={<Register />} />
        <Route
          path="/pages/home/CustomerServices"
          element={<CustomerServices listItems={listItems} lg={lg} />}
        />
        <Route
          path="/pages/home/EbayAccount"
          element={<EbayAccount listItems={listItems} lg={lg} />}
        />
      </Routes>
    </div>
  );
}

export default App;
