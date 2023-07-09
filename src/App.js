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
import LearnSelling from "./pages/home/LearnSelling";
import FeedBack from "./pages/home/FeedBack";
import EbayDevs from "./pages/home/EbayDevs";
import SecurityCenter from "./pages/home/SecurityCenter";
import Blogs from "./pages/home/Blogs";
import Index from "./pages/Contactus/Index";
import Company from "./pages/home/Company";

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
  const listItems2 = [
    "    About the Developers Program",
    " Benefits",
    "  Policies",
    "  API License Agreement",
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
        <Route
          path="/pages/home/learnselling"
          element={<LearnSelling listItems={listItems} lg={lg} />}
        />
        <Route path="/pages/home/feedback" element={<FeedBack />} />
        <Route
          path="/pages/home/ebaydevs"
          element={
            <EbayDevs listItems={listItems} listItems2={listItems2} lg={lg} />
          }
        />
        <Route
          path="/pages/home/securitycenter"
          element={<SecurityCenter listItems={listItems} lg={lg} />}
        />
        <Route path="/pages/home/blogs" element={<Blogs />} />
        <Route path="/pages/contactus/index" element={<Index />} />
        <Route path="/pages/home/company" element={<Company />} />
      </Routes>
    </div>
  );
}

export default App;
