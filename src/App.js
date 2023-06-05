import "./App.css";
import HomePage from "./pages/home/HomePage";

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
  return (
    <div className="overflow-hidden">
      <HomePage listItems={listItems} />
    </div>
  );
}

export default App;
