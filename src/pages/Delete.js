import React from "react";
import Logo from "../components/Logo";
//Appel la Navigation pour faire fonctionner la navigation
import "bootstrap/dist/css/bootstrap.css";
import Deletepage from "../components/Deletepage";
import Navigationadmin from "../components/Navigationadmin";

const Delete = () => {
  return (
    <div>
      <Logo />
      <Navigationadmin />
      <br></br>
      <Deletepage />
    </div>

    
  );
  
};


export default Delete;
