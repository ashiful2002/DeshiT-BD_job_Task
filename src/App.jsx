import React from "react";
import Footer from "./Layout/Footer/Footer";
import Hero from "./Componnets/Header/Hero";
import Services from "./Componnets/sections/Services";
import Products from "./Componnets/sections/Products";
import Projects from "./Componnets/sections/Projects";
import DigitalMarketing from "./Componnets/sections/DigitalMarketing";
import Technology from "./Componnets/sections/Technology";
import WorksWith from "./Componnets/sections/worksWith";
import Contact from "./Componnets/sections/Contact";
import Fotter from "./Componnets/sections/Fotter";

const App = () => {
  return (
    <>
      <Hero />
      <main className="h-[80vh]">
        <Services />
        <Products />
        <Projects />
        <DigitalMarketing />
        <Technology />
        <WorksWith />
        <Contact />
        <Fotter />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default App;
