import { create } from "zustand";

interface Fields {
    email: string | undefined;
}

interface Errors {
    errors: Fields;
}

interface Actions {
    setErrors: (errors: Fields) => void;
}

export const useErrorStore = create<Errors & Actions>((set) => ({
    errors: {
        email: undefined
    },
    setErrors: (errors) => set({ errors: {...errors} }),
}));
