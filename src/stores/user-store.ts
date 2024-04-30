import { create } from "zustand";

export enum Role {
    hajj,
    drawingMaster,
    superAdmin,
    doctor,
    user,
}

const roleMapping = {
    "hajj": Role.hajj,
    "drawing_master": Role.drawingMaster,
    "SuperAdmin": Role.superAdmin,
    "Doctor": Role.doctor,
    "user": Role.user,
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
    role: Role;
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
    setUser: (user: {
        id: number | string | undefined;
        email: string;
        role: string;
        firstName: string;
        lastName: string;
        phone: string;
        dateOfBirth: Date | undefined;
        city: string;
        province: number | undefined;
        gender: "male" | "female" | undefined;

    }) => void;
}


export const useUserStore = create<User & Actions>((set) => ({
    user: {
        id: undefined,
        email: "",
        role: Role.user,
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
        role: getRoles([user.role.toString()])[0]
    } }),
}));
