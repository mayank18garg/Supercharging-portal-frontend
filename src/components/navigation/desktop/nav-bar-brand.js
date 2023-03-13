import React from "react";
import { NavLink } from "react-router-dom";
import logoUrl from './logo.svg';
export const NavBarBrand = () => {
  return (
    <div className="nav-bar__brand">
      <NavLink to="/">
        <img
          className="nav-bar__logo"
          // src="https://cdn.auth0.com/blog/hub/code-samples/hello-world/auth0-logo.svg"
          src = {logoUrl}
          alt="Tesla"
          width="122"
          height="36"
        />
      </NavLink>
    </div>
  );
};
