import Axios from "axios";
import config from "../constants/config";

const axios = Axios.create({
    baseURL:config.BASE_URL,
    
});
export default axios;