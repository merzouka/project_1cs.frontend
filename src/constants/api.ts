
const BACKEND_URL = "http://localhost:8000/";
export const endpoints = {
    login: "auth/login",
    resetPassword: "auth/reset-password",
    resetPasswordEmail: "auth/reset-password-email",
    register: "auth/register",
    verificationEmail: "auth/verification-email",
    otpVerification: "auth/verify-otp",
    emailUnique: "auth/email-unique",
    logout: "auth/logout",
    profile: (id: number | string) => `profile/${id}`,
}

export function getUrl(endpoint: string) {
    return `${BACKEND_URL}/${endpoint}`;
}
