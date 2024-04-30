import { UserInfo, Role } from "@/stores/user-store";

export const pageValidators = {
    "inscription": (user: UserInfo) => !!user.id,
    "profile": (user: UserInfo) => !!user.id,
    "drawing": (user: UserInfo) => user.role == Role.drawingMaster,
    "drawing/settings": (user: UserInfo) => user.role == Role.drawingMaster,
}
