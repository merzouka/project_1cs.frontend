import { create } from "zustand";

export enum Role {
    hajj,
    drawingMaster,
    superAdmin,
    doctor,
}

const roleMapping = {
    "Hajj": Role.hajj,
    "DrawingMaster": Role.drawingMaster,
    "SuperAdmin": Role.superAdmin,
    "Doctor": Role.doctor,
}

function getRoles(roles: string[]): Role[] {
    const result: Role[] = [];
    for (const role of roles) {
        if (!Object.keys(roleMapping).includes(role)) {
            throw new Error("invalid role");
        }
        // @ts-ignore the compiler is complaining that role value could not be a roleMapping key
        // the code above handles that
        result.push(roleMapping[role]);
    }
    return result;
}

export interface UserInfo {
    id: number | string | undefined;
    email: string;
    roles: Role[];
}

export interface User {
    user: UserInfo
}

interface Actions {
    setUser: (user: {
        id: number | string | undefined;
        email: string;
        roles: string[];
    }) => void;
}


export const useUserStore = create<User & Actions>((set) => ({
    user: {
        id: undefined,
        email: "",
        roles: [],
    },
    setUser: (user) => set({ user: {...user, roles: getRoles(user.roles)} }),
}));
