import React from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";

export const App = () => {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};
