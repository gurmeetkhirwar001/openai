import React from "react";
import { Routes, Route } from "react-router-dom";

import CreativeAgency from "../pages/home-pages/CreativeAgency";
import Playground from "../pages/home-pages/Playground";
import Login from "../pages/home-pages/Login";
import SignIn from "../pages/home-pages/SignIn";
import SignUp from "../pages/home-pages/SignUp";
import SignupForm from "../pages/home-pages/SignupForm";


import Pricing from "../pages/home-pages/Pricing";
import Profile from "../pages/home-pages/Profile";
import UseCases from "../pages/home-pages/usecases";
import PrivacyPolicy from "../pages/home-pages/PrivacyPolicy";
import TermandServices from "../pages/home-pages/term";
const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<CreativeAgency />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />

        <Route path="/sign" element={<SignIn />} />
        <Route path="/price" element={<Pricing />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/use-cases" element={<UseCases />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/term-and-services" element={<TermandServices />} />

        {/* <Route path="/signup" element={<SignupForm />} /> */}
      </Routes>
    </>
  );
};

export default AllRoutes;
