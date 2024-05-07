import { create } from "zustand";

export interface RegisterStep1 {
    email: string,
    phone: string,
}

export interface RegisterStep2 {
    password: string,
}

export interface RegisterStep3 {
    firstname: string,
    lastname: string,
    dateOfBirth: Date,
    gender: string,
}

export interface RegisterStep4 {
    province: number,
    city: string,
}

export interface Register {
    entries: {
        email: string,
        phone: string,
        password: string,
        firstname: string,
        lastname: string,
        dateOfBirth: Date | undefined,
        gender: "male" | "female" | undefined,
        province: number | undefined,
        city: string,
    }
}

interface Actions {
    updateEntries: (values: RegisterStep1 | RegisterStep2 | RegisterStep3 | RegisterStep4) => void,
}

export const useRegisterStore = create<Register & Actions>((set) => ({
    entries: {
        email: "",
        phone: "",
        password: "",
        firstname: "",
        lastname: "",
        dateOfBirth: undefined,
        gender: undefined,
        province: undefined,
        city: "",
    },
    updateEntries: (values: RegisterStep1 | RegisterStep2 | RegisterStep3 | RegisterStep4) =>
        set((state: any) => ({ entries: {...state.entries, ...values} })),
}));
