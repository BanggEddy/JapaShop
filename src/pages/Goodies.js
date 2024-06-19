import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import "bootstrap/dist/css/bootstrap.css";
import Goodiespage from "../components/Goodiespage";

const Goodies = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <Goodiespage />
    </div>
  );
};

export default Goodies;
