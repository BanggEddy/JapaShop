import React from "react";
import Logo from "../components/Logo";
//Appel la Navigation pour faire fonctionner la navigation
import Navigation from "../components/Navigation";
import "bootstrap/dist/css/bootstrap.css";
import Adminpage from "../components/Adminpage";

const Admin = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <br></br>
      <Adminpage />
    </div>

    
  );
  
};


export default Admin;
