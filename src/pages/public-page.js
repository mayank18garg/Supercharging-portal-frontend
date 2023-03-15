import React, { useEffect, useState } from "react";
import { CodeSnippet } from "../components/code-snippet";
import { PageLayout } from "../components/page-layout";

import { FormThemeProvider } from 'react-component-form'
import { FormComp } from "../components/Issue-Ticket/FormComp";
import IssueTictable from "../components/Issue-Ticket/IssueTictable";
import { Navigate, useLocation } from "react-router-dom";
export const PublicPage = () => {
//   const [message, setMessage] = useState("");
  const location = useLocation();
  console.log(location);


  const [issueTicketData, setissueTicketData] = useState(false);

  if(location.state == null){
    return <Navigate replace to="/admin" />;
  }
  return (
    <PageLayout site_id={location.state.site_id} site_name={location.state.site_name}>
      
      <h2 id="page-title" className="content__title">
          {location.state.site_name}
      </h2>
      <div className="form-grid-container">
        <IssueTictable issueTicketData={issueTicketData} />
        <h3 id="page-title" className="content__title" style={{textAlign: 'center'}}>
          Report a New Issue
        </h3>
        
          <FormComp issueTicketData={issueTicketData} setissueTicketData={setissueTicketData} />
          
        {/* <div className="content__body">
          <p id="page-description">
            <span>
              This page retrieves a <strong>public message</strong> from an
              external API.
            </span>
            <span>
              <strong>Any visitor can access this page.</strong>
            </span>
          </p>
          <CodeSnippet title="Public Message" code={message} />
        </div> */}
      </div>   
    </PageLayout>
  );
};
