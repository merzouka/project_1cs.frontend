"use client";
import { create } from "zustand";

interface Tracker {
    key: string,
    step: number;
    max: number;
    direction: "forward" | "backward",
}

interface State {
    trackers: Tracker[],
}

interface Actions {
    setStep: (key: string, step: number) => void;
    setMax: (key: string, max: number) => void;
    setDirection: (key: string, direction: "forward" | "backward") => void;
}

function getUpdatedTrackers(key: string, tracker: Object, trackers: Tracker[]): Tracker[] {
    const oldTracker = trackers.find((tracker) => tracker.key == key);
    if (!oldTracker) {
        return [...trackers, {
            key: key,
            direction: "forward",
            step: 0,
            max: 0,
            ...tracker
        }];
    }
    const oldTrackerIndex = trackers.findIndex((tracker) => tracker.key == key);
    const newTrackers = [...trackers];
    newTrackers[oldTrackerIndex] = {...oldTracker, ...tracker};
    return newTrackers;
}

const useMultiStepStore = create<State & Actions>((set, get) => ({
    trackers: [],
    setStep: (key, step) => set((state) => ({ trackers: getUpdatedTrackers(key, { step: step }, state.trackers) })),
    setMax: (key, max) => {
        if(!get().trackers.find((tracker) => tracker.key == key)?.max) {
            set((state) => ({ trackers: getUpdatedTrackers(key, { max: max }, state.trackers) }))
        }
    },
    setDirection: (key, direction) => set((state) => ({ trackers: getUpdatedTrackers(key, { direction: direction }, state.trackers) })),
}));

function getMax(key: string, trackers: Tracker[]) {
    return trackers.find((tracker) => tracker.key == key)?.max || 0;
}

function getStep(key: string, trackers: Tracker[]) {
    return trackers.find((tracker) => tracker.key == key)?.step || 0;
}

function getDirection(key: string, trackers: Tracker[]) {
    return trackers.find((tracker) => tracker.key == key)?.direction || "forward";
}

export function useMultiStep(key: string) {
    const setMax = useMultiStepStore((state) => state.setMax);
    const setStep = useMultiStepStore((state) => state.setStep);
    const setDirection = useMultiStepStore((state) => state.setDirection);
    const trackers = useMultiStepStore((state) => state.trackers);
    const step = getStep(key, trackers);
    const max = getMax(key, trackers);
    const direction = getDirection(key, trackers);

    function next() {
        if (step < max - 1) {
            setDirection(key, "forward");
            setStep(key, step + 1);
        }
    }

    function previous() {
        if (step > 0) {
            setDirection(key, "backward");
            setStep(key, step - 1);
        }
    }

    return { 
        step: step,
        next,
        previous,
        max: max,
        direction: direction,
        setMax: (max: number) => setMax(key, max),
        setStep: (step: number) => setStep(key, step),
    };
}

export enum MultiStepKeys {
    register = "register",
    resetEmail = "resetEmail",
    resetPassword = "resetPassword",
    verifyEmail = "verifyEmail",
}
