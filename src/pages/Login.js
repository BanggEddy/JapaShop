import React from "react";
import Logo from "../components/Logo";
//Appel la Navigation pour faire fonctionner la navigation
import Navigation from "../components/Navigation";
import "bootstrap/dist/css/bootstrap.css";
import Loginpage from "../components/Loginpage";

const Login = () => {
  return (
    <div>
      <Logo />
      <Navigation />
<Loginpage />
    </div>
  );
};

export default Login;
