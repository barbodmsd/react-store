import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Box } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import ProductDetails from "./Pages/ProductDetails";
import Auth from "./Pages/Auth";
import Cart from "./Pages/Cart";
import NotFound from "./Pages/NotFound";

export default function App() {
  return (
    <>
      <Navbar />
      {/* write routes */}
      <Box id={"master"}>
        <Routes>
          <Route exact path={"/"} element={<Home />} />
          <Route exact path={"/products"} element={<Products />} />
          <Route
            exact
            path={"/product-details/:id/:name"}
            element={<ProductDetails />}
          />
          <Route exact path={"/auth"} element={<Auth />} />
          <Route exact path={"/cart"} element={<Cart />} />
          <Route exact path={"*"} element={<NotFound />} />
        </Routes>
      </Box>
      <Footer />
    </>
  );
}
