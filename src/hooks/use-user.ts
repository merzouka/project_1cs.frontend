import { Role, useUserStore } from "@/stores/user-store"
import { useRouter } from "next/navigation";
import { useLayoutEffect } from "react";
import { Pages } from "@/constants/pages";
import { pageValidators } from "@/constants/page-validators";

function hasAccess(userRoles: Role[], requiredRoles: Role[]) {
    if ((requiredRoles.filter((role) => !userRoles.includes(role))).length > 0) {
        return false;
    }
    return true;
}

export function useUser() {
    const user = useUserStore((state) => state.user);
    const isLoggedIn = user.id !== undefined;
    const role = user.role;
    function hasRole(toCheck: Role): boolean {
        return role == toCheck;
    }

    const router = useRouter();
    function validateAccess(page: Pages) {
        useLayoutEffect(() => {
            if (pageValidators[page] instanceof Array) {
                // @ts-ignore the check above is sufficient to validate that the pageValidators[page] is a function
                // or an array
                if (!hasAccess(roles, pageValidators[page])) {
                    router.push(`/login?return=${page}`);
                }
                return;
            }
            if (!pageValidators[page](user)) {
                router.push(`/login?return=${page}`);
            }
        }, [])
    }

    return {
        user,
        isLoggedIn,
        role,
        hasRole,
        validateAccess,
    }
}
