
import { create } from "zustand";

interface Profile {
    id: number | string | undefined,
    image: string | undefined,
    address: string,
    firstName: string,
    lastName: string,
}

interface State {
    profile: Profile,
}

interface Actions {
    updateProfile: (profile: Profile) => void;
}

export const useProfileStore = create<State & Actions>((set) => ({
    profile: {
        id: "", image: undefined, address: "", firstName: "", lastName: ""
    },
    updateProfile: (profile) => set({ profile: {...profile} })
}));
