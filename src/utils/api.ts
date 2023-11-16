import axios from "axios";
export const getJobs = async (params: any) => {
  const res =  await axios.get("/api/joinUs", {
    params: {
      ...params,
    },
  });
  if(res.status!==200){
    return Promise.reject();
  }
  return res?.data;
};

export const contactUs = (params: any) => {
  return axios
    .post("/api/contactUs", { ...params })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
