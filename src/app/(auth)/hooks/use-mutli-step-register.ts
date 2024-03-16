"use client";
import { create } from "zustand";


interface State {
    step: number;
    max: number;
}

interface Actions {
    setStep: (step: number) => void;
    setMax: (max: number) => void;
}

const useRegisterStepStore = create<State & Actions>((set) => ({
    step: 4,
    max: 0,
    setStep: (step) => set({ step: step }),
    setMax: (max) => set({ max: max }),
}));

export function useMultiStepRegister(stepMax?: number) {
    const setMax = useRegisterStepStore((state) => state.setMax);
    const max = useRegisterStepStore((state) => state.max);
    const step = useRegisterStepStore((state) => state.step);
    const setStep = useRegisterStepStore((state) => state.setStep);
    if (stepMax) {
        setMax(stepMax);
    }

    function next() {
        if (step < max) {
            setStep(step + 1);
        }
    }

    function previous() {
        if (step > 0) {
            setStep(step - 1);
        }
    }

    return { step, next, previous, max };
}
