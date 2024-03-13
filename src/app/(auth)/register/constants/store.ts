import { create } from "zustand";

enum Steps {
    Step1,
    Step2,
    Step3,
    Step4
}

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
    province: string,
    city: string,
}

export interface Register {
    entries: {
        email: string,
        phone: string,
        password: string,
        firstname: string,
        lastname: string,
        dateOfBirth: Date,
        gender: string,
        province: string,
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
        dateOfBirth: new Date(),
        gender: "",
        province: "",
        city: "",
    },
    updateEntries: (values: RegisterStep1 | RegisterStep2 | RegisterStep3 | RegisterStep4) =>
        set((state: any) => ({ entries: {...state.entries, ...values} })),
}));
