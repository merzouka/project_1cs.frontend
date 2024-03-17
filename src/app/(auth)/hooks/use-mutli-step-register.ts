"use client";
import { create } from "zustand";


interface State {
    step: number;
    max: number;
    direction: "forward" | "backward",
}

interface Actions {
    setStep: (step: number) => void;
    setMax: (max: number) => void;
    setDirection: (direction: "forward" | "backward") => void;
}

const useRegisterStepStore = create<State & Actions>((set) => ({
    step: 0,
    max: 0,
    direction: "forward",
    setStep: (step) => set({ step: step }),
    setMax: (max) => set({ max: max }),
    setDirection: (direction) => set({ direction: direction }),
}));

export function useMultiStepRegister(stepMax?: number) {
    const setMax = useRegisterStepStore((state) => state.setMax);
    const max = useRegisterStepStore((state) => state.max);
    const step = useRegisterStepStore((state) => state.step);
    const setStep = useRegisterStepStore((state) => state.setStep);
    const direction = useRegisterStepStore((state) => state.direction);
    const setDirection = useRegisterStepStore((state) => state.setDirection);

    if (stepMax) {
        setMax(stepMax);
    }

    function next() {
        if (step < max) {
            setDirection("forward");
            setStep(step + 1);
        }
    }

    function previous() {
        if (step > 0) {
            setDirection("backward");
            setStep(step - 1);
        }
    }

    return { step, next, previous, max, direction };
}
