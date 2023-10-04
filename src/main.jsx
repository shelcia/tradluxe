import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { BrandsProvider } from "./context/BrandsContext.jsx";
import { ShopUsProvider } from "./context/ShopUsContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ShopUsProvider>
    <BrandsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </BrandsProvider>
  </ShopUsProvider>
);
