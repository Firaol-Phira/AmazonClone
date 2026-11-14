import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Page/Landing/Landing";
import Payment from "./Page/Payment/Payment";
import Order from "./Page/Orders/Order";
import Cart from "./Page/Cart/Cart";
import Signup from "./Page/Auth/Signup";
import Result from "./Page/Result/Result";
import ProductDetail from "./Page/ProductDetail/ProductDetail";
function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Signup />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/order" element={<Order />} />
        <Route path="/category/:categoryName" element={<Result />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routing;
