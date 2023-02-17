import React from "react";
import Logo from "../components/Logo";
//Appel la Navigation pour faire fonctionner la navigation
import "bootstrap/dist/css/bootstrap.css";
import Presentationpageadmin from "../components/Presentationpageadmin";
import Navigationadmin from "../components/Navigationadmin";

const Presentationadmin = () => {
  return (
    <div>
      <Logo />
      <Navigationadmin />
      <Presentationpageadmin />
    </div>
  );
};


export default Presentationadmin;
