// import { message } from "antd";
import { message } from "antd";
import axios from "axios";

const api = axios.create({
    // baseURL: "https://68c7acbf5d8d9f5147328947.mockapi.io/",
    baseURL: "http://localhost:8080/",
    headers:{
        "Content-Type":"application/json",
    },
    timeout:10000
});
api.interceptors.response.use(
   (response) => {
     // handle response
     return response;
   },
   (error) => {
     // handle response error
	const {status, data} = error.response;
    console.log(status, data);
    
      if (status === 404) {
        message.error(error.message,10000);
      }
     return Promise.reject(error);
   }
);
export default api;