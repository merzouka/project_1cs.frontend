
const BACKEND_URL = "http://localhost:8080/api";
export const endpoints = {
    login: "auth/login",
    resetPassword: "auth/reset-password",
    forgotPassword: "auth/forgot-password",
    register: "auth/register",
    verificationEmail: "auth/verification-email",
    otpVerification: "auth/verify-otp",
}

export function getUrl(endpoint: string) {
    return `${BACKEND_URL}/${endpoint}`;
}
