"use client"
import React, { FormEvent } from 'react'
import { useInscriptionStore } from '../components/Store'
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { submitInscriptionData } from '../api';

const InscriptionPage1 = () => {
    const { nom, prenom, nomArabe, prenomArabe, prenomPere, prenomMere, sexe, dateNaissance, nationalite, paysResidence, nin, dateExpirationNin } = useInscriptionStore((state) => state.form)
    const setField = useInscriptionStore((state) => state.setField)


    const handleInputChange = (e: any) => {
        setField(e.target.name, e.target.value)
    }
    /*
    const [queryEnabled, setQueryEnabled] = useState(true);
    
    const { data } = useQuery({
        queryKey: ['inscription', 'getinfo'],
        queryFn: async () => {
            setQueryEnabled(false)
            try {
                const response = await axios.get('http://localhost:8000/registration')
                setField('email', (response).data.emailUtilisateur)
                setField('nom', (response).data.first_name)
                setField('prenom', (response).data.last_name)
                setField('dateNaissance', (response).data.dateOfBirth)
                setField('wilaya', (response).data.province)
                setField('sexe', (response).data.gender)
                setField('commune', (response).data.city)
                return response.data

            } catch (e) {
                console.log(e)
                throw new Error("error")
            }
        },
        enabled: queryEnabled
    }) */

    const router = useRouter()
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        if (sexe == 'FM') {
            router.push("/inscription/mahrampage")
            return
        }
        router.push("/inscription/Secpage")
    }
    return (
        <>
            <div className="flex justify-center">
                <form onSubmit={handleSubmit}>

                    <div className="flex justify-center space-x-[400px] mr-[260px]">
                        <div className="mb-5 w-10">
                            <label htmlFor="nom" className="mb-1.5 block text-center text-sm" >Nom</label>
                            <input className=" py-4 border-gray-100  shadow-md focus:border-blue w-[340px] h-7 rounded-lg border p-2 text-left text-slate-500 focus:outline-[#EBA565] bg-grey" type="text" name="nom" value={nom} onChange={handleInputChange} required />
                        </div>
                        <div className="w-10">
                            <label htmlFor="prénom" className="mb-1.5 block text-center text-sm">prénom</label>
                            <input type="text" name="prenom" value={prenom} onChange={handleInputChange} className=" py-4 border-gray-100 shadow-md focus:border-blue w-[340px] h-7 rounded-lg border p-2 text-left text-slate-500 focus:outline-[#EBA565]" id="prénom" required />
                        </div>
                    </div>


                    <div className="arabic-only flex justify-center space-x-[400px] mr-[260px] ">
                        <div className="mb-5 w-10">
                            <label htmlFor="nom_ar" className="mb-1.5 block text-center text-sm">Nom(arab)</label>
                            <input className="  py-4 arabic-only border-gray-100 shadow-md focus:border-blue w-[340px] h-7 rounded-lg border p-2 text-left text-slate-500 focus:outline-[#EBA565]" type="text" pattern="[\u0600-\u06FF]+" name="nomArabe" dir="rtl" value={nomArabe} onChange={handleInputChange} id="nom_ar" required />
                        </div>
                        <div className="w-10">
                            <label htmlFor="prenom_ar" className="mb-1.5 block text-center text-sm">Prénom(arab)</label>
                            <input className=" py-4 border-gray-100 shadow-md focus:border-blue w-[340px] h-7 rounded-lg border p-2 text-left text-slate-500 focus:outline-[#EBA565]" type="text" name="prenomArabe" dir="rtl" lang="ar" value={prenomArabe} onChange={handleInputChange} id="prenom_ar" required />
                        </div>
                    </div>


                    <div className="flex justify-center space-x-[400px] mr-[260px] ">
                        <div className="mb-5 w-10">
                            <label htmlFor="father_name" className="mb-1.5 block w-40 text-sm">Prénom du père</label>
                            <input className=" py-4 border-gray-100 shadow-md focus:border-blue w-[340px] h-7 rounded-lg border p-2 text-left text-slate-500 focus:outline-[#EBA565]" type="text" name="prenomPere" value={prenomPere} onChange={handleInputChange} id="father_name" required />
                        </div>
                        <div className="w-10">
                            <label htmlFor="mother_name" className="mb-1.5 block w-40  text-sm">Prénom de la mère</label>
                            <input className="py-4 border-gray-100 shadow-md focus:border-blue w-[340px] h-7 rounded-lg border p-2 text-left text-slate-500 focus:outline-[#EBA565]" type="text" name="prenomMere" value={prenomMere} onChange={handleInputChange} id="mother_name" required />
                        </div>
                    </div>


                    <div className="flex justify-center space-x-[400px] mr-[260px]">
                        <div className="mb-5 w-10">
                            <label htmlFor="sexe" className="block text-left w-40 mb-2 text-sm font-medium text-gray-900 dark:text-white">Sexe</label>
                            <select id="sexe" name="sexe" value={sexe} onChange={handleInputChange} className="h-9 w-[340px] shadow-md rounded-lg border  text-left text-slate-500 focus:outline-[#EBA565]">
                                <option value="placeholder">Sélectionnez votre sexe</option>
                                <option value="FM">femme</option>
                                <option value="HM">homme</option>
                            </select>
                        </div>
                        <div className="w-10 my-1">
                            <label htmlFor="DN" className="mb-1.5 block w-40 text-left text-sm">Date de nainaissance </label>
                            <input id="DN" type="date" name="dateNaissance" value={dateNaissance} onChange={handleInputChange} className="py-4 border-gray-100 shadow-md w-[340px] focus:border-blue h-7 rounded-lg border p-2 text-left text-slate-500 focus:outline-[#EBA565]" placeholder="Date de nainaissance" required />
                        </div>
                    </div>



                    <div className="flex justify-center space-x-[400px] mr-[260px]">
                        <div className="mb-5 w-10">
                            <label htmlFor="nationalite" className="mb-1.5 block text-center text-sm">  Nationalité </label>
                            <input type="text" name="nationalite" value={nationalite} onChange={handleInputChange} className="py-4 border-gray-100 shadow-md focus:border-blue w-[340px] h-7 rounded-lg border p-2 text-left text-slate-500 focus:outline-[#EBA565]" placeholder="" id="nationalite" required />
                        </div>
                        <div className="w-10">
                            <label htmlFor="paye" className="mb-1.5 block text-left text-sm w-40">  Pays de résidence  </label>
                            <input type="text" name="paysResidence" value={paysResidence} onChange={handleInputChange} className="py-4 border-gray-100 shadow-md focus:border-blue w-[340px] h-7 rounded-lg border p-2 text-left text-slate-500 focus:outline-[#EBA565]" placeholder="" id="paye" required />
                        </div>
                    </div>


                    <div className="flex justify-center space-x-[400px] mr-[260px] mb-4">
                        <div className="mb-5 w-10">
                            <label htmlFor="nin" className="mb-1.5 block text-center text-sm">NIN</label>
                            <input name="nin" value={nin} onChange={handleInputChange} className="py-4 border-gray-100  shadow-md focus:border-blue w-[340px] h-7 rounded-lg border p-2 text-left text-slate-500 focus:outline-[#EBA565]" type="number" placeholder="" id="nin" required />
                        </div>
                        <div className="w-10">
                            <label htmlFor="DE" className="mb-1.5 block text-left text-sm w-40">  Date d’expiration </label>
                            <input name="dateExpirationNin" value={dateExpirationNin} onChange={handleInputChange} className="py-4 border-gray-100 shadow-md focus:border-blue w-[340px] h-7 rounded-lg border p-2 text-left text-slate-500 focus:outline-[#EBA565]" type="date" placeholder="Date d’expiration" id="DE" required />
                        </div>
                    </div>



                    <div className="flex justify-center ">

                        <button type="submit" className="border-orange-400 shadow-md h-15 mb-10 block w-[340px] rounded-lg border px-4 py-2 text-center font-bold text-black" >

                            Confirmer
                        </button>
                    </div>

                </form ></div >

        </>

    );
}
export default InscriptionPage1
