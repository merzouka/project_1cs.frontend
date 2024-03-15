import { create } from "zustand";

interface State {
    id: number | string | undefined;
    email: string;
}

interface Actions {
    setId: (id: number | string) => void;
    setEmail: (email: string) => void;
}


export const useUserStore = create<State & Actions>((set) => ({
    id: undefined,
    email: "",
    setId: (id) => set({id : id}),
    setEmail: (email) => set({email: email})
}));
