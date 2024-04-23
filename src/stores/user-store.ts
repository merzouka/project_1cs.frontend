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
    // TODO: add roles
    // roles: string[];
    firstName: string;
    lastName: string;
    phone: string;
    dateOfBirth: Date | undefined;
    city: string;
    province: number | undefined;
    gender: "male" | "female" | undefined;
}

export interface User {
    user: UserInfo
}

interface Actions {
    setUser: (user: UserInfo) => void;
}


export const useUserStore = create<User & Actions>((set) => ({
    user: {
        id: undefined,
        email: "",
        // TODO: add roles
        // roles: [],
        firstName: "",
        lastName: "",
        phone: "",
        dateOfBirth: undefined,
        city: "",
        province: undefined,
        gender: undefined,
    },
    setUser: (user) => set({ user: {
        ...user,
        // TODO: uncomment this
        // roles: getRoles(user.roles)
    } }),
}));
