import React from "react";
import { NavBarTab } from "./nav-bar-tab";

export const NavBarTabs = ({site_id,site_name}) => {
  return (
    <div className="nav-bar__tabs">

      <NavBarTab path="/profile" label="Dashboard" site_id={site_id} site_name={site_name} />
      <NavBarTab path="/public" label="Issue a New Request" site_id={site_id} site_name={site_name}/>
      <NavBarTab path="/protected" label="Protected" />
      <NavBarTab path="/admin" label="Admin" />
    </div>
  );
};
