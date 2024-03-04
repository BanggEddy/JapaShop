import React from "react";
import Logo from "../../components/Logo";
import "bootstrap/dist/css/bootstrap.css";
import Addpage from "../../components/admin/Addpage";
import Navigationadmin from "../../components/admin/Navigationadmin";

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
