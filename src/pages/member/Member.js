import React from "react";
import Logo from "../../components/Logo";
import Memberpage from "../../components/member/Memberpage";
import Navigationmember from "../../components/member/Navigationmember";

const Member = () => {
  return (
    <div>
      <Logo />
      <Navigationmember />
      <Memberpage />
    </div>
  );
};

export default Member;
