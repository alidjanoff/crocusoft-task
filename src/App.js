import React from "react";
// Router
import { Route, Routes } from "react-router-dom";

// Redux toolkit
import { Provider } from "react-redux";
import { store } from "./redux/store";

// Components
import Header from "./components/Header";

// Pages
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route
          path="/product-details/:productID"
          element={<ProductDetails />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Provider>
  );
};

export default App;
