import React from "react";
import { NavBarBrand } from "./nav-bar-brand";
import { NavBarButtons } from "./nav-bar-buttons";
import { NavBarTabs } from "./nav-bar-tabs";

export const NavBar = ({site_id, site_name}) => {
  return (
    <div className="nav-bar__container">
      <nav className="nav-bar">
        <NavBarBrand site_id={site_id} site_name={site_name} />
        <NavBarTabs site_id={site_id} site_name={site_name} />
        <NavBarButtons />
      </nav>
    </div>
  );
};
