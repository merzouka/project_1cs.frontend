import axios from "axios";

export const AxiosInstance = axios.create({
    withXSRFToken: true,
    withCredentials: true,
    xsrfCookieName: "csrftoken",
    xsrfHeaderName: "X-CSRFToken",
})
