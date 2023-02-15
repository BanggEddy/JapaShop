import React from "react";
//Permet de naviguer entre les pages (react-router-dom)
import { NavLink } from "react-router-dom";

const Navigationmember = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li> Présentation </li>
        </NavLink>

        <NavLink
          to="/goodies"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          
          <li> Goodies </li>
        </NavLink>
        <NavLink
          to="/loginout"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          
          <li> Log out</li>
        </NavLink>

        <NavLink
          to="/contact"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li> Contacts </li>
        </NavLink>


      </ul>
    </div>
  );
};

export default Navigationmember;
