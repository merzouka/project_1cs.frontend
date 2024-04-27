import axios from "axios";

export const AxiosInstance = axios.create({
    withCredentials: true,
    xsrfHeaderName: "X-CSRFToken",
    xsrfCookieName: "csrftoken",
    withXSRFToken: true,
});
