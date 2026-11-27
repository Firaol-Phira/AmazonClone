import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Page/Landing/Landing";
import Payment from "./Page/Payment/Payment";
import Order from "./Page/Orders/Order";
import Cart from "./Page/Cart/Cart";
import Auth from "./Page/Auth/Auth";
import Result from "./Page/Result/Result";
import ProductDetail from "./Page/ProductDetail/ProductDetail";
import { CheckoutElementsProvider } from "@stripe/react-stripe-js/checkout";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";

function Routing() {

  const stripePromise = loadStripe(
    "pk_test_51Ug0HVCQTRDHU9oFTZucGdLYnS1qxIMFcIgsAOu9OstpYbxWyBjVBTvzi5morx0SagxtjyFJTe7z03j4FGtQUCVj00Ba4JQqwV",
  );
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/payment"
          element={
            <ProtectedRoute msg={"you must log in"} redirect={"/payment"}>
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectedRoute>
          }
        />
        <Route
          path="/order"
          element={
            <ProtectedRoute msg={"you must log in "} redirect={"/order"}>
              <Order stripe={stripePromise}>
                <Payment />
              </Order>
            </ProtectedRoute>
          }
        />
        <Route path="/category/:categoryName" element={<Result />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routing;
