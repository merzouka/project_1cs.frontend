import { UserInfo, Role } from "@/stores/user-store";

export const pageValidators = {
    "inscription": (user: UserInfo) => user.isLoggedIn,
    "profile": (user: UserInfo) => user.isLoggedIn,
    "profile/haaj": (user: UserInfo) => user.role ==  Role.haaj,
    "profile/drawing-manager": (user: UserInfo) => user.role ==  Role.drawingManager,
    "profile/payment-manager": (user: UserInfo) => user.role ==  Role.paymentManager,
    "profile/admin": (user: UserInfo) => user.role ==  Role.admin,
    "drawing": (user: UserInfo) => user.role == Role.drawingManager || user.role == Role.haaj,
    "drawing/settings": (user: UserInfo) => user.role == Role.drawingManager,
}
