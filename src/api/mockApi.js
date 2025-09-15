import axios from "axios";

const api = axios.create({
    baseURL: "https://68c7acbf5d8d9f5147328947.mockapi.io/",
    headers:{
        "Content-Type":"application/json",
    },
    timeout:10000
});
export default api;