"use client";

import { useUser } from "@/hooks/use-user";
import InscriptionPage1 from "../components/Formm";
import NavBar from "../components/NavBar";
import Title from "../components/Titlee";
import { Pages } from "@/constants/pages";
import { useEffect } from "react";
import { useInscriptionStore } from "../components/Store";
import { provinces } from "@/constants/provinces";

export default function Homee() {
    const { validateAccess, user } = useUser();
    const setValues = useInscriptionStore((state) => state.setValues);
    // validateAccess(Pages.submission);
    useEffect(() => {
        setValues({
            nom: user.lastName,
            prenom: user.firstName,
            sexe: user.gender == "male" ? "HM" : "FM",
            dateNaissance: user.dateOfBirth,

            email: user.email,
            wilaya: provinces.find((province) => province.number == user.province)?.name,
            commune: user.city,
        });
    }, [user])
    
    return (
        <>
            <div
                className="bg-fixed bg-center bg-cover h-screen overflow-x-hidden "
                style={{
                    backgroundImage: `url('/3.jpg')`,
                }}
            >
                <NavBar />
                <Title />
                <InscriptionPage1 />
            </div>
        </>
    )
} 
