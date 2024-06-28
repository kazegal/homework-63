import axios from "axios";

const axiosApi = axios.create({
    baseURL:'https://homework-63-7ece9-default-rtdb.europe-west1.firebasedatabase.app/'
});

export default axiosApi;