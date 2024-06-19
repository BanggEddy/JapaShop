import React from "react";
import Logo from "../../components/Logo";
import "bootstrap/dist/css/bootstrap.css";
import Presentationpagemember from "../../components/member/Presentationpagemember";
import Navigationmember from "../../components/member/Navigationmember";

const Presentationmember = () => {
  return (
    <div>
      <Logo />
      <Navigationmember />
      <Presentationpagemember />
    </div>
  );
};

export default Presentationmember;
