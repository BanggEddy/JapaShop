import React from "react";
import Logo from "../../components/Logo";
import "bootstrap/dist/css/bootstrap.css";
import Updatepage from "../../components/admin/Updatepage";
import Navigationadmin from "../../components/admin/Navigationadmin";

const Update = () => {
  return (
    <div>
      <Logo />
      <Navigationadmin />
      <Updatepage />
    </div>
  );
};

export default Update;
