import React from "react";
import { Routes, Route } from "react-router-dom";

import CreativeAgency from "../pages/home-pages/CreativeAgency";
import Playground from "../pages/home-pages/Playground";
import Login from "../pages/home-pages/Login";
import SignIn from "../pages/home-pages/SignIn";
import Pricing from "../pages/home-pages/Pricing";
import Profile from "../pages/home-pages/Profile";
import UseCases from "../pages/home-pages/usecases";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<CreativeAgency />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign" element={<SignIn />} />
        <Route path="/price" element={<Pricing />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/use-cases" element={<UseCases />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
