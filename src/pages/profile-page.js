import React, { useState } from "react";
import { CodeSnippet } from "../components/code-snippet";
import { PageLayout } from "../components/page-layout";
import { SessionChart } from "../components/Dashboard-charts/SessionChart";
import { KPIChart } from "../components/Dashboard-charts/KPIChart";
import { DateCalendar } from "../components/Dashboard-charts/DateCalendar";
import { SitePicker } from "../components/Dashboard-charts/SitePicker";

export const ProfilePage = () => {
  
  const [dateData, setdateData] = useState({start_date: "2018-02-04", end_date: "2018-03-03"});
  const [trt_Id, settrt_Id] = useState(1888);
  return (
    <PageLayout>
      {/* <div className="content-layout"> */}
        {/* <h1 id="page-title" className="content__title">
          Dashboard
        </h1> */}
        <div className="chart-grid-input">
          <div className="chart-grid-site">
          <SitePicker settrt_Id={settrt_Id} />
          </div>
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
