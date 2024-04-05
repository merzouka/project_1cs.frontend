
import { create } from "zustand";

export interface City {
    id: number,
    name: string,
    provinceId: number,
}

interface State {
    cities: City[],
}

interface Actions {
    setCities: (cities: City[]) => void;
}

export const useCitiesStore = create<State & Actions>((set) => ({
    cities: [],
    setCities: (cities) => set({ cities: cities }),
}))
