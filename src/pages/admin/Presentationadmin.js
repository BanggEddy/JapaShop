import React from "react";
import Logo from "../../components/Logo";
import "bootstrap/dist/css/bootstrap.css";
import Presentationpageadmin from "../../components/admin/Presentationpageadmin";
import Navigationadmin from "../../components/admin/Navigationadmin";

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
