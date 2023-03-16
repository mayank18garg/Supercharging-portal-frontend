import React, { useState } from "react";
import { CodeSnippet } from "../components/code-snippet";
import { PageLayout } from "../components/page-layout";
import { SessionChart } from "../components/Dashboard-charts/SessionChart";
import { KPIChart } from "../components/Dashboard-charts/KPIChart";
import { DateCalendar } from "../components/Dashboard-charts/DateCalendar";
import { SitePicker } from "../components/Dashboard-charts/SitePicker";
import { useLocation} from "react-router-dom";
import { Navigate } from "react-router-dom";

export const DashboardPage = () => {
  const location = useLocation();
  const [dateData, setdateData] = useState({start_date: "2018-02-04", end_date: "2018-03-03"});
  const [trt_Id, settrt_Id] = useState(location.state ? location.state.site_id : "");

  console.log(location);
  if(location.state == null || location.state.site_id == null){
    return <Navigate replace to="/" />;
  }

  return (
    <PageLayout site_id={location.state.site_id} site_name={location.state.site_name}>
      {/* <div className="content-layout"> */}
        <h2 id="page-title" className="content__title">
          {location.state.site_name}
        </h2>
        <div className="chart-grid-input">
          {/* <div className="chart-grid-site"> */}
          {/* <SitePicker settrt_Id={settrt_Id} /> */}
          {/* </div> */}
          <div className="chart-grid-date">
            <DateCalendar dateData = {dateData} setdateData = {setdateData} />
          </div>
        </div>
        
        <div className= "chart-grid-kpi" style={{width:700}}>
          <KPIChart dateData={dateData} trt_Id={trt_Id} />
        </div>

        <div style={{width:700}}>
          <SessionChart dateData={dateData} trt_Id={trt_Id} />
        </div>
        
        
      {/* </div> */}
    </PageLayout>
  );

};
