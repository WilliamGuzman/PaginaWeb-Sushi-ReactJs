import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Kawaii from "./components/Kawaii";
import Navbar from "./components/Navbar";
import OrientalSushi from "./components/OrientalSushi";
import Quotes from "./components/Quotes";
import SpecialMenu from "./components/SpecialMenu";
import Statistics from "./components/Statistics";
import Subscribe from "./components/Subscribe";

function App() {
  return (
    <>
      <Navbar />
      <OrientalSushi />
      <SpecialMenu />
      <Statistics />
      <Kawaii />
      <Quotes />
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
