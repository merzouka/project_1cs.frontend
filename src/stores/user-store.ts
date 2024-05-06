import { create } from "zustand";

export enum Role {
    haaj,
    drawingManager,
    superAdmin,
    doctor,
    user,
    paymentManager,
    admin,
}

const roleMapping = {
    "user": Role.user,
    "administrateur": Role.admin,
    "responsable tirage": Role.drawingManager,
    "medecin": Role.doctor,
    "Hedj": Role.haaj,
    "banquier": Role.paymentManager,
}

function getRole(role: string): Role {
    if (!Object.keys(roleMapping).includes(role)) {
        throw new Error("invalide role");
    }
    /* @ts-ignore above if statement handles error */
    return roleMapping[role];
}

export interface UserInfo {
    email: string;
    role: Role;
    firstName: string;
    lastName: string;
    phone: string;
    dateOfBirth: Date | undefined;
    city: string;
    province: number | undefined;
    gender: "male" | "female" | undefined;
    image?: string | undefined;
    emailVerified?: boolean;
    isLoggedIn: boolean;
}

export interface User {
    user: UserInfo
}

interface Actions {
    setUser: (user: {
        email: string;
        role: string;
        firstName: string;
        lastName: string;
        phone: string;
        dateOfBirth: Date | undefined;
        city: string;
        province: number | undefined;
        gender: "male" | "female" | undefined;
        image?: string | undefined;
        emailVerified ?: boolean;
        isLoggedIn: boolean;
    }) => void;
}


export const useUserStore = create<User & Actions>((set) => ({
    user: {
        email: "",
        role: Role.user,
        firstName: "",
        lastName: "",
        phone: "",
        dateOfBirth: undefined,
        city: "",
        province: undefined,
        gender: undefined,
        image: undefined,
        emailVerified: false,
        isLoggedIn: false,
    },
    setUser: (user) => set({ user: {
        ...user,
        role: getRole(user.role)
    } }),
}));
