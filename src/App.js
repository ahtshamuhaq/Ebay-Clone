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
import Buying from "./pages/home/Buying";
import MoneyBack from "./pages/home/MoneyBack";

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
          path="/pages/home/helpandcontact"
          element={<HelpAndContact listItems={listItems} lg={lg} />}
        />
        <Route
          path="/pages/home/PrivacyChoices"
          element={<PrivacyChoices listItems={listItems} lg={lg} />}
        />
        <Route path="/pages/home/signIn" element={<SignIn />} />
        <Route path="/pages/home/register" element={<Register />} />
        <Route
          path="/pages/home/CustomerServices"
          element={<CustomerServices listItems={listItems} lg={lg} />}
        />
        <Route
          path="/pages/home/ebayaccount"
          element={<EbayAccount listItems={listItems} lg={lg} />}
        />
        <Route
          path="/pages/home/buying"
          element={<Buying listItems={listItems} lg={lg} />}
        />
        <Route
          path="/pages/home/moneyback"
          element={<MoneyBack listItems={listItems} lg={lg} />}
        />
      </Routes>
    </div>
  );
}

export default App;
