import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useInscriptionStore = create((set) => ({
  setField: (field, value) => set((state) => ({ form: { ...state.form, [field]: value } })),
  form: {
    nom: '',
    prenom: '',
    nomArabe: '',
    prenomArabe: '',
    prenomPere: '',
    prenomMere: '',
    sexe: '',
    dateNaissance: '',
    nationalite: '',
    paysResidence: '',
    nin: '',
    dateExpirationNin: '',

    // Page 2 fields
    numeroPortable: '',
    email: '',
    wilaya: '',
    commune: '',
    numeroPassport: '',
    dateExpirationPassport: '',
    photoPersonnelle: null,

    // Page 3 fields (for sexe === 'femme')
    numeroPortableMahram: '',
    emailMahram: '',
    wilayaMahram: '',
    prenomArabeMahram: '',
    numeroPassportMahram: '',
    dateExpirationPassportMahram: '',
    idMahram: '',
    photoPersonnelleMahram: null,
  },

}))
const useStore = create(
  persist(
    (set) => ({
      // Page 1 fields
      nom: '',
      prenom: '',
      nomArabe: '',
      prenomArabe: '',
      prenomPere: '',
      prenomMere: '',
      sexe: '',
      dateNaissance: '',
      nationalite: '',
      paysResidence: '',
      nin: '',
      dateExpirationNin: '',

      // Page 2 fields
      numeroPortable: '',
      email: '',
      wilaya: '',
      commune: '',
      numeroPassport: '',
      dateExpirationPassport: '',
      photoPersonnelle: null,

      // Page 3 fields (for sexe === 'femme')
      numeroPortableMahram: '',
      emailMahram: '',
      wilayaMahram: '',
      commune: '',
      numeroPassportMahram: '',
      dateExpirationPassportMahram: '',
      idMahram: '',
      photoPersonnelleMahram: null,

      // Actions
      setField: (field, value) => set({ [field]: value }),
      clearStore: () => set({}, true),
    }),
    {
      name: 'inscription-form-storage',
    }
  )
)

export default useStore