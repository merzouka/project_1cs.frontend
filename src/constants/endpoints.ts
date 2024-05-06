export const endpoints = {
    // general
    cities: "baladiyat",
    // auth
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
    drawingDefined: (id: number | string | undefined) => `check-tirage/${id}`,
    participants: (id: number | string | undefined) => `participants_tirage/${id}`,
    drawingSettings: "associate-tirage",
    // profile
    profile: (id: number | string) => `profile/${id}`,
    profileUpdate: "profile/update",
    currentUser : "auth/currently_user",
}
