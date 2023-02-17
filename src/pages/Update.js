import React from "react";
import Logo from "../components/Logo";
//Appel la Navigation pour faire fonctionner la navigation
import "bootstrap/dist/css/bootstrap.css";
import Updatepage from "../components/Updatepage";
import Navigationadmin from "../components/Navigationadmin";

const Update = () => {
  return (
    <div>
      <Logo />
      <Navigationadmin />
      <br></br>
      <Updatepage />
    </div>

    
  );
  
};


export default Update;
