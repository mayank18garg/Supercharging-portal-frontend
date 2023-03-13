import React, { useState, useEffect } from "react";
import { Auth0Features } from "../components/auth0-features";
import { HeroBanner } from "../components/hero-banner";
import { PageLayout } from "../components/page-layout";
import { useAuth0, Auth0Context} from "@auth0/auth0-react";

export const HomePage = () => {
  const {isAuthenticated, getIdTokenClaims, loginWithRedirect, getAccessTokenSilently} = useAuth0();
    const [token, setToken] = useState(['']);
    // const [message, setMessage] = useState("");

    useEffect(() => {
        let isMounted = true;

        const getMessage = async () => {
            const accessToken = await getIdTokenClaims();
            console.log(accessToken);
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

    const allowedRoles = ['Admin'];
    console.log(token);
    if(token?.find(role => allowedRoles.includes(role))){
  return ( <PageLayout > 
    {/* <h1 color="white">Mayank Garg</h1> */}
    { <HeroBanner /> }
    { <Auth0Features /> }
  </PageLayout>);
    }
    return ( <PageLayout > 
      {/* <h1 color="white">Mayank Garg</h1> */}
      {/* { <HeroBanner /> } */}
      {/* { <Auth0Features /> } */}
    </PageLayout>);
};
