import React from "react";
import Logo from "../components/Logo";
//Appel la Navigation pour faire fonctionner la navigation
import "bootstrap/dist/css/bootstrap.css";
import Admintruepage from "../components/Admintruepage";
import Navigationadmin from "../components/Navigationadmin";

const Admintrue = () => {
  return (
    <div>
      <Logo />
      <Navigationadmin />
      <br></br>
      <Admintruepage />
    </div>

    
  );
  
};


export default Admintrue;
