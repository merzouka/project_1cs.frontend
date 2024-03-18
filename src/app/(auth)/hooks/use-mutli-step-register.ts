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
    getMax: (key: string) => number;
    getStep: (key: string) => number;
    getDirection: (key: string) => "forward" | "backward";
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
    trackers: [{
        key: MultiStepKeys.resetEmail,
        direction: "forward",
        max: 2,
        step: 0,
    }],
    setStep: (key, step) => set((state) => ({ trackers: getUpdatedTrackers(key, { step: step }, state.trackers) })),
    setMax: (key, max) => {
        if(!get().trackers.find((tracker) => tracker.key == key)?.max) {
            set((state) => ({ trackers: getUpdatedTrackers(key, { max: max }, state.trackers) }))
        }
    },
    setDirection: (key, direction) => set((state) => ({ trackers: getUpdatedTrackers(key, { direction: direction }, state.trackers) })),
    getMax: (key) => get().trackers.find((tracker) => tracker.key == key)?.max || 0,
    getStep: (key) => get().trackers.find((tracker) => tracker.key == key)?.step || 0,
    getDirection: (key) => get().trackers.find((tracker) => tracker.key == key)?.direction || "forward",
}));

export function useMultiStep(key: string) {
    const setMax = useMultiStepStore((state) => state.setMax);
    const getMax = useMultiStepStore((state) => state.getMax);
    const getStep = useMultiStepStore((state) => state.getStep);
    const setStep = useMultiStepStore((state) => state.setStep);
    const getDirection = useMultiStepStore((state) => state.getDirection);
    const setDirection = useMultiStepStore((state) => state.setDirection);

    function next() {
        if (getStep(key) < getMax(key) - 1) {
            setDirection(key, "forward");
            setStep(key, getStep(key) + 1);
        }
    }

    function previous() {
        if (getStep(key) > 0) {
            setDirection(key, "backward");
            setStep(key, getStep(key) - 1);
        }
    }

    return { 
        step: getStep(key),
        next,
        previous,
        max: getMax(key),
        direction: getDirection(key),
        setMax: (max: number) => setMax(key, max),
    };
}

export enum MultiStepKeys {
    register = "register",
    resetEmail = "resetEmail",
    resetPassword = "resetPassword",
}
