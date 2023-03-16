import React, { useContext } from "react";

import { PageLayout } from "../components/page-layout";

import { useLocation} from "react-router-dom";
import { Navigate } from "react-router-dom";


// import {  } from "react-router-dom";
export const HomePage = () => {
  const location = useLocation();
  // console.log(location);


  if(location.state == null || location.state.site_id == null){
    return <Navigate replace to="/" />;
  }

    return ( <PageLayout site_id={location.state.site_id} site_name={location.state.site_name} > 
    <h2 id="page-title" className="content__title" style={{textAlign: 'center'}}>{location.state.site_name}</h2>
      <h3 id="page-title" className="content__title" style={{textAlign: 'center'}}> Introduction</h3>
      {/* { <HeroBanner /> } */}
      {/* { <Auth0Features /> } */}
    </PageLayout>);
};
