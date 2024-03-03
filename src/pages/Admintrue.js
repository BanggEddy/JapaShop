import React from "react";
import Logo from "../components/Logo";
import "bootstrap/dist/css/bootstrap.css";
import Admintruepage from "../components/admin/Admintruepage";
import Navigationadmin from "../components/admin/Navigationadmin";

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
