import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductListing from "./components/ProductListing";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<ProductListing />}></Route>
        <Route path="/product/:productId" element={<ProductDetails />}></Route>
        <Route>404 Not Found!</Route>
      </Routes>
    </div>
  );
}

export default App;
