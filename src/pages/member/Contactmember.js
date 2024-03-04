import React from "react";
import Logo from "../../components/Logo";
//Appel la Navigation pour faire fonctionner la navigation
import "bootstrap/dist/css/bootstrap.css";
import Contactpagemember from "../../components/member/Contactpagemember";
import Navigationmember from "../../components/member/Navigationmember";

const Contactmember = () => {
  return (
    <div>
      <Logo />
      <Navigationmember />
      <Contactpagemember />
    </div>
  );
};

export default Contactmember;
