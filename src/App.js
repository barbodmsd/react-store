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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
export default function App() {
  const {token}=useSelector(state=>state.authSlice)
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
          <Route exact path={"/auth"} element={token?<Navigate to={'/'}/>:<Auth />} />
          <Route exact path={"/cart"} element={<Cart />} />
          <Route exact path={"*"} element={<NotFound />} />
        </Routes>
      </Box>
      <Footer />

      {/*  paste toast  */}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}
