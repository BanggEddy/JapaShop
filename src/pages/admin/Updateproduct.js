import React from "react";
import Logo from "../../components/Logo";
import "bootstrap/dist/css/bootstrap.css";
import Navigationadmin from "../../components/admin/Navigationadmin";
import Updateproduct from "../../components/admin/Updateproduct";

const Update = () => {
  return (
    <div>
      <Logo />
      <Navigationadmin />
      <Updateproduct />
    </div>
  );
};

export default Update;
