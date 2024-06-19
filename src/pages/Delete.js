import React from "react";
import Logo from "../components/Logo";
import "bootstrap/dist/css/bootstrap.css";
import Deletepage from "../components/admin/Deletepage";
import Navigationadmin from "../components/admin/Navigationadmin";

const Delete = () => {
  return (
    <div>
      <Logo />
      <Navigationadmin />
      <br></br>
      <Deletepage />
    </div>
  );
};

export default Delete;
