import { callExternalApi } from "./external-api.service";

const apiServerUrl = process.env.REACT_APP_API_SERVER_URL;

export const getSessionData = async ({dateData, trt_Id}) => {

  const config = {
    url: `${apiServerUrl}/api/sessionData/`,
    method: "GET",
    params:{
        trt_id: trt_Id,
        start_date: dateData.start_date,
        end_date: dateData.end_date
    },
    // headers: {
    //   "content-type": "application/json",
    // },
  };

  const { data, error } = await callExternalApi({ config });

  return {
    data: data || null,
    error,
  };
};

export const getKPIData = async ({dateData, trt_Id}) => {

  const config = {
    url: `${apiServerUrl}/api/kpiData/`,
    method: "GET",
    params:{
        trt_id: trt_Id,
        start_date: dateData.start_date,
        end_date: dateData.end_date
    },
    // headers: {
    //   "content-type": "application/json",
    // },
  };

  const { data, error } = await callExternalApi({ config });

  return {
    data: data || null,
    error,
  };
};

export const getProtectedResource = async () => {
  const config = {
    url: `${apiServerUrl}/api/messages/protected`,
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  };

  const { data, error } = await callExternalApi({ config });

  return {
    data: data || null,
    error,
  };
};

export const getAdminResource = async () => {
  const config = {
    url: `${apiServerUrl}/api/messages/admin`,
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  };

  const { data, error } = await callExternalApi({ config });

  return {
    data: data || null,
    error,
  };
};

export const sendFormData = async ({formValue, userEmail}) => {

  console.log("Type:", formValue.textarea);
  // const dataSend = JSON.stringify(formValue)

  const config = {
    url: `${apiServerUrl}/api/issueTicket/`,
    method: "post",
    // params:{
    //     trt_id: trt_Id,
    //     start_date: dateData.start_date,
    //     end_date: dateData.end_date
    // },
    data: {
      userEmail: userEmail,
      title: formValue.title,
      type: formValue.type,
      description: formValue.description
    },
    headers: {
      "Content-Type": "application/json",
    },
    
  };

  const { data, error } = await callExternalApi({ config });

  return {
    data: data || null,
    error,
  };
};

export const getissueTickets = async(userEmail) => {
  
  const config = {
    url: `${apiServerUrl}/api/issueTicket/`,
    method: "GET",
    params:{
      userEmail: userEmail
    },
    headers:{
      "Content-Type": "application/json"
    }
  };

  const { data, error } = await callExternalApi({config});

  return {
    data: data || null,
    error,
  };
}