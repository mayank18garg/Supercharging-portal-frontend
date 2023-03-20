import React, { useEffect, useState } from "react";
import { CodeSnippet } from "../components/code-snippet";
import IssueTictable from "../components/Issue-Ticket/IssueTictable";
import { PageLayout } from "../components/page-layout";
import { getProtectedResource } from "../services/message.service";
import { Navigate, useLocation } from "react-router-dom";
import { SideNavBar } from "../components/navigation/side-bar/side-nav-bar";
import { ContactInfoForm } from "../components/contact-information/contactInfoForm";

export const ProtectedPage = () => {
  const location = useLocation();

  if(location.state == null || location.state.site_id == null){
    return <Navigate replace to="/" />;
  }

  return (
    <PageLayout site_id={location.state.site_id} site_name={location.state.site_name}>
       <SideNavBar site_id={location.state.site_id} site_name={location.state.site_name}  />
       <div className="content-layout">
        <h2 id="page-title" className="content__title" style={{textAlign: 'center'}}> Contact Information</h2>
        <ContactInfoForm />

    </div>
    </PageLayout>
  );
};
