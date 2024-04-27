// api.js
"use client";
import { AxiosInstance } from '@/config/axios';

const API_BASE_URL = 'http://localhost:8000'; // Replace with your backend API URL

export const submitInscriptionData = async (data) => {
    console.log(data.photoPersonnelle);
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
                paysResidence: data.paysResidence,
                NIN: data.nin,
                dateExpirationNin: data.dateExpirationNin,

                // Page 2 fields
                numeroPortable: data.numeroPortable,
                emailUtilisateur: data.email,
                province: data.wilaya,
                city: data.commun,
                personal_picture: data.photoPersonnelle,

                // Page 3 fields (for sexe === 'femme')
                phone_number: data.numeroPortableMahram,
                email: data.emailMahram,
                province: data.wilayaMahram,
                city: data.commune,
                passport_id: data.numeroPassportMahram,
                passport_expiration_date: data.dateExpirationPassportMahram,
                maahram_id: data.idMahram,
            },
            {
                xsrfCookieName: "csrftoken",
                xsrfHeaderName: "X-CSRFToken",
                withXSRFToken: true,
                withCredentials: true,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error('Error submitting inscription data:', error);
        throw error;
    }
};
