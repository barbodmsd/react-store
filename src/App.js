import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Box } from "@mui/material";
import { Routes,Route,Navigate } from "react-router-dom";

export default function App() {
  return (
    <>
      <Navbar />
      <Box id={'master'}>
        <Routes>
          <Route exact path={'/'} element={<Home}/>
        </Routes>
      </Box>
      <Footer />
    </>
  );
}
