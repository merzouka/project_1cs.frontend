import { UserInfo, Role } from "@/stores/user-store";

export const pageValidators = {
    "inscription": (user: UserInfo) => user.isLoggedIn,
    "profile": (user: UserInfo) => user.role == Role.user,
    "profile/haaj": (user: UserInfo) => user.role ==  Role.haaj,
    "profile/drawing-manager": (user: UserInfo) => user.role ==  Role.drawingManager,
    "profile/payment-manager": (user: UserInfo) => user.role ==  Role.paymentManager,
    "profile/doctor": (user: UserInfo) => user.role ==  Role.doctor,
    "profile/admin": (user: UserInfo) => user.role ==  Role.admin,
    "drawing": (user: UserInfo) => user.role == Role.drawingManager || user.role == Role.haaj,
    "drawing/haaj": (_: UserInfo) => true,
    "drawing/settings": (user: UserInfo) => user.role == Role.drawingManager,
}
