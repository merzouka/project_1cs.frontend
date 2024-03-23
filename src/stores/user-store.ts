import { create } from "zustand";

export enum Role {
    default,
}

interface UserInfo {
    id: number | string | undefined;
    email: string;
    roles: Role[];
}

interface User {
    user: UserInfo

}

interface Actions {
    setUser: (user: UserInfo) => void;
}


export const useUserStore = create<User & Actions>((set) => ({
    user: {
        id: undefined,
        email: "",
        roles: [],
    },
    setUser: (user) => set({ user: {...user} }),
}));
