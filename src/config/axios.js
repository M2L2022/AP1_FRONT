import axios from "axios";
import { baseURL } from "./env";    

const instance = axios.create({
    baseURL
})

instance.defaults.headers.post["Content-Type"] = "application/json"
instance.defaults.withCredentials = true

export default instance