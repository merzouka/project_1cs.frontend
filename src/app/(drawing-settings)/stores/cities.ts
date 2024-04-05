
import { create } from "zustand";

interface City {
    id: number,
    name: string,
    provinceId: number,
}

interface State {
    cities: City[],
}

interface Actions {
    setCities: (cities: City[]) => void;
    getCity: (id: number) => City;
}

const useCitiesStore = create<State & Actions>((set) => ({
}))
