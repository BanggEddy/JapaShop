import React from "react";
import { NavLink } from "react-router-dom";

const Navigationadmin = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink
          to="/presentationadmin"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li> Présentation </li>
        </NavLink>

        <NavLink
          to="/goodiesadmin"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li> Goodies </li>
        </NavLink>
        <NavLink
          to="/add"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li> Ajouter</li>
        </NavLink>
        <NavLink
          to="/update"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li> Modifier </li>
        </NavLink>
        <NavLink
          to="/delete"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li> Supprimer</li>
        </NavLink>
        <NavLink
          to="/loginout"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li> Log out</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigationadmin;
