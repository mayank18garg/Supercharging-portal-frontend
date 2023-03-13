import React from "react";
import { NavBarTab } from "./nav-bar-tab";

export const NavBarTabs = () => {
  return (
    <div className="nav-bar__tabs">
      {/* <h1 color="white">Mayank</h1> */}
      <NavBarTab path="/profile" label="Dashboard" />
      <NavBarTab path="/public" label="Public" />
      <NavBarTab path="/protected" label="Protected" />
      <NavBarTab path="/admin" label="Admin" />
    </div>
  );
};
