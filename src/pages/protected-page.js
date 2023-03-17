import React, { useEffect, useState } from "react";
import { CodeSnippet } from "../components/code-snippet";
import IssueTictable from "../components/Issue-Ticket/IssueTictable";
import { PageLayout } from "../components/page-layout";
import { getProtectedResource } from "../services/message.service";
import { useLocation } from "react-router-dom";
import { SideNavBar } from "../components/navigation/side-bar/side-nav-bar";

export const ProtectedPage = () => {
  const [message, setMessage] = useState("");
  const location = useLocation();
  useEffect(() => {
    let isMounted = true;

    const getMessage = async () => {
      const { data, error } = await getProtectedResource();

      if (!isMounted) {
        return;
      }

      if (data) {
        setMessage(JSON.stringify(data, null, 2));
      }

      if (error) {
        setMessage(JSON.stringify(error, null, 2));
      }
    };

    getMessage();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <PageLayout site_id={location.state.site_id} site_name={location.state.site_name}>
       <SideNavBar site_id={location.state.site_id} site_name={location.state.site_name} />
       <div className="content-layout">
      <h2 id="page-title" className="content__title" style={{textAlign: 'center'}}> Contact Information</h2>
    </div>
    </PageLayout>
  );
};
