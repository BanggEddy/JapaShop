import React from "react";
import Logo from "../components/Logo";
//Appel la Navigation pour faire fonctionner la navigation
import "bootstrap/dist/css/bootstrap.css";
import Addpage from "../components/Addpage";
import Navigationadmin from "../components/Navigationadmin";

const Add = () => {
  return (
    <div>
      <Logo />
      <Navigationadmin />
      <br></br>
      <Addpage />
    </div>

    
  );
  
};


export default Add;
