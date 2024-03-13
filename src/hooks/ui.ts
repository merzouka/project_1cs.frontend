"use client";

import { useState } from "react";

export function useMutliStep(steps: number) {
    const [step, setStep] = useState(0);

    function next() {
        if (step == steps - 1) {
            return;
        }
        setStep((step) => step + 1);
    }

    function previous() {
        if (step == 0) {
            return;
        }
        setStep((step) => step - 1);
    }

    return { step, next, previous }
}

