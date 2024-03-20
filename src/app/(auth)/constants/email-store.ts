import { create } from "zustand";

interface State {
    email: string;
}

interface Actions {
    setEmail: (email: string) => void;
}

export const useEmailStore = create<State & Actions>((set) => ({
    email: "",
    setEmail: (email) => set({ email: email }),
}));
