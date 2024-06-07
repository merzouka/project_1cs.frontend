import { create } from 'zustand'

export const useInscriptionStore = create((set) => ({
    setValues: (values) => set((state) => ({ form: { ...state.form, ...values } })),
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
        nationalite: 'Algérienne',
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
