import { create } from "zustand";

interface User {
    id: number | string | undefined;
    email: string;
}

interface Actions {
    setUser: (user: User) => void;
}


export const useUserStore = create<User & Actions>((set) => ({
    id: undefined,
    email: "",
    setUser: (user) => set({...user}),
}));
