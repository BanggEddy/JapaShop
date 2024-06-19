import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import "bootstrap/dist/css/bootstrap.css";
import Presentationpage from "../components/Presentationpage";

const Présentation = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <Presentationpage />
    </div>
  );
};

export default Présentation;
