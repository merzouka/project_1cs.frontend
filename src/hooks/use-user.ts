import { UserInfo, Role, useUserStore } from "@/stores/user-store"
import { useRouter } from "next/navigation";

function hasAccess(userRoles: Role[], requiredRoles: Role[]) {
    if ((requiredRoles.filter((role) => !userRoles.includes(role))).length > 0) {
        return false;
    }
    return true;
}

export enum Page {
    submission = "submission",
    profile = "profile",
}

let requirements = {
    "submission": (user: UserInfo) => !!user.id,
    "profile": (user: UserInfo) => !!user.id,
}

export function useUser() {
    const user = useUserStore((state) => state.user);
    const isLoggedIn = user.id !== undefined;
    const roles = user.roles;
    function hasRole(role: Role): boolean {
        return roles.includes(role);
    }

    const router = useRouter();
    function validateAccess(page: Page) {
        if (requirements[page] instanceof Array) {
            // @ts-ignore the check above is sufficient to validate that the requirements[page] is a function
            // or an array
            if (!hasAccess(roles, requirements[page])) {
                router.push(`/login?return=${page}`);
            }
            return;
        }
        if (!requirements[page](user)) {
            router.push(`/login?return=${page}`);
        }
    }

    return {
        user,
        isLoggedIn,
        roles,
        hasRole,
        validateAccess,
    }
}
