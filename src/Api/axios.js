import axios from "axios";

const axiosInstance = axios.create({
  //local of firebase
  // baseURL: "http://127.0.0.1:5001/clone-8cd14/us-central1/api",


  // deployed on render
  baseURL: "https://amazon-api-deploy-dyw6.onrender.com/",
});

export{axiosInstance}