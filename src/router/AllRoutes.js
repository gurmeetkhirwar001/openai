import React from "react";
import { Routes, Route } from "react-router-dom";

// All Home Version
import CreativeAgency from "../pages/home-pages/CreativeAgency";
import Playground from "../pages/home-pages/Playground";
import Login from "../pages/home-pages/Login";
import SignIn from "../pages/home-pages/SignIn";





// All Elements  dropdown Heading inner pages



// All Portfolio main and inner pages
const AllRoutes = () => {
  return (
    <>
      <Routes>
        {/* All home */}
        <Route path="/" element={<CreativeAgency />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign" element={<SignIn />} />



       
       
       
      
      </Routes>
    </>
  );
};

export default AllRoutes;
