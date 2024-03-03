import React from "react";
import Logo from "../components/Logo";
//Appel la Navigation pour faire fonctionner la navigation
import "bootstrap/dist/css/bootstrap.css";
import Updatepage from "../components/admin/Navigationadmin";
import Navigationadmin from "../components/admin/Navigationadmin";

const Update = () => {
  return (
    <div>
      <Logo />
      <Navigationadmin />
    </div>
  );
};

export default Update;
