import React, { useEffect, useState } from "react";
import { CodeSnippet } from "../components/code-snippet";
import { PageLayout } from "../components/page-layout";
// import { getPublicResource } from "../services/message.service";
import { FormThemeProvider } from 'react-component-form'
import { FormComp } from "../components/Issue-Ticket/FormComp";
import IssueTictable from "../components/Issue-Ticket/IssueTictable";
export const PublicPage = () => {
//   const [message, setMessage] = useState("");

  const [issueTicketData, setissueTicketData] = useState(false);
  return (
    <PageLayout>
      
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
