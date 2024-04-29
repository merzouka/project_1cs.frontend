import { UserInfo, Role } from "@/stores/user-store";

export const pageValidators = {
    "submission": (user: UserInfo) => !!user.id,
    "profile": (user: UserInfo) => !!user.id,
    "drawing": (user: UserInfo) => user.role == Role.drawingMaster,
}
