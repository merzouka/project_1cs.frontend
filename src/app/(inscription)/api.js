// api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000'; // Replace with your backend API URL

export const submitInscriptionData = async (data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/registration`,
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
                passport_id: data.numeroPassport,
                passport_expiration_date: data.dateExpirationPassport,
                personal_picture: data.photoPersonnelle,

                // Page 3 fields (for sexe === 'femme')
                phone_number: data.numeroPortableMahram,
                email: data.emailMahram,
                province: data.wilayaMahram,
                city: data.commune,
                passport_id: data.umeroPassportMahram,
                passport_expiration_date: data.dateExpirationPassportMahram,
                maahram_id: data.idMahram,
                personal_picture: data.photoPersonnelleMahram,
            }
        );
        return response.data;
    } catch (error) {
        console.error('Error submitting inscription data:', error);
        throw error;
    }
};