import React from "react";
import Logo from "../../components/Logo";
//Appel la Navigation pour faire fonctionner la navigation
import "bootstrap/dist/css/bootstrap.css";
import Goodiesadminpage from "../../components/admin/Goodiesadminpage";
import Navigationadmin from "../../components/admin/Navigationadmin";

const Goodiesadmin = () => {
  return (
    <div>
      <Logo />
      <Navigationadmin />
      <Goodiesadminpage />
    </div>
  );
};

export default Goodiesadmin;
