import { Role, useUserStore } from "@/stores/user-store"


function useUser() {
    const user = useUserStore((state) => state.user);
    const isLoggedIn = user.id !== undefined;
    const roles = user.roles;
    function hasRole(role: Role): boolean {
        return roles.includes(role);
    }

    return {
        user,
        isLoggedIn,
        roles,
        hasRole,
    }
}
