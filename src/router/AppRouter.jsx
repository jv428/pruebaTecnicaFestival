import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Home } from "../components/Home";
import { Participants } from "../components/Participants";
import { Activities } from "../components/Activities";
import { Footer } from "../components/Footer";

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="participantes" element={<Participants />} />
        <Route path="actividades" element={<Activities />} />
      </Routes>
      <Footer />
    </>
  );
};
