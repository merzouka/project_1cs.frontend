"use client";
import { AxiosInstance } from '@/config/axios';

const API_BASE_URL = 'http://localhost:8000';

export const submitInscriptionData = async (data) => {
    try {
        const response = await AxiosInstance.post(`${API_BASE_URL}/registration`,
            {
                first_name: data.nom,
                last_name: data.prenom,
                first_name_arabic: data.nomArabe,
                last_name_arabic: data.prenomArabe,
                father_name: data.prenomPere,
                mother_name: data.prenomMere,
                sexe: data.sexe,
                dateOfBirth: data.dateNaissance,
                nationality: data.nationalite,

                NIN: data.nin,
                card_expiration_date: data.dateExpirationNin,

                // Page 2 fields
                phone_number: data.numeroPortable,
                email: data.email,
                province: data.wilaya,
                city: data.commun,
                personal_picture: data.photoPersonnelle,

                // Page 3 fields (for sexe === 'femme')

                passport_id: data.numeroPassport,
                passport_expiration_date: data.dateExpirationPassport,
                maahram_id: data.idMahram,
            },
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};
