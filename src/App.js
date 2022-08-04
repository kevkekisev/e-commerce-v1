import Catalogue from "./Pages/Catalogue";
import { Route } from "react-router";
import { Routes } from "react-router";
import ProductPage from "./components/ProductPage";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import Navbar from "./components/Navbar";
import Checkout from "./components/Checkout";

function App() {
  return (
    <ShoppingCartProvider>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/catalogue/:id" element={<ProductPage />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </ShoppingCartProvider>
  );
}

export default App;
