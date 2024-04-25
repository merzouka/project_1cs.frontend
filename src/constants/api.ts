
const BACKEND_URL = "http://localhost:8000";
export const endpoints = {
    login: "auth/login",
    resetPassword: "auth/reset-password",
    resetPasswordEmail: "auth/reset-password-email",
    register: "auth/register",
    verificationEmail: "auth/verification-email",
    otpVerification: "auth/verify-otp",
    emailUnique: "auth/email-unique",
    logout: "auth/logout",
    profileCitites: (id: number | string | undefined) => `baladiya_names_by_utilisateur/${id}`,
    // drawing
    drawingSettings: "associate-tirage",
    participants: (id: number | string | undefined) => `participants_tirage/${id}`,
    // profile
    profile: (id: number | string) => `profile/${id}`,
}

export function getUrl(endpoint: string) {
    return `${BACKEND_URL}/${endpoint}`;
}
