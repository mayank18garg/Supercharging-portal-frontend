import React, { useEffect, useState } from "react";
import { CodeSnippet } from "../components/code-snippet";
import { PageLayout } from "../components/page-layout";
import { getAdminResource } from "../services/message.service";
import { AdminMenu } from "../components/admin-menu";
import ViewSiteAdmin from "../components/admin-components/viewSiteAdmin";
import ViewSiteUser from "../components/multiview-site";
import { useAuth0 } from "@auth0/auth0-react";

export const MultiSitePage = () => {
  const {isAuthenticated, getIdTokenClaims, loginWithRedirect, getAccessTokenSilently} = useAuth0();
    const [token, setToken] = useState(['']);
    // const [message, setMessage] = useState("");

    useEffect(() => {
        let isMounted = true;

        const getMessage = async () => {
            const accessToken = await getIdTokenClaims();
            // const { data, error } = await getAdminResource(accessToken);

            if (!isMounted) {
                return;
            }

            if (accessToken) {
                // setMessage(JSON.stringify(data, null, 2));
                setToken(accessToken['http://localhost:4040//roles']);
            }

            else{
                console.log("error");
                setToken(null);
            }
        };

        getMessage();

        return () => {
        isMounted = false;
        };
    }, [getAccessTokenSilently]);

    const adminRoles = ['Admin'];
    const userRoles = ['User']
    console.log(token);
  return (
    // <div>
    <PageLayout>
      {token?.find(role => adminRoles.includes(role)) ? <ViewSiteAdmin />
        : (token?.find(role => userRoles.includes(role)) ? <ViewSiteUser/>
        :
        null)
      }
    </PageLayout>
    
    // </div>
  );
};
