"use client";

import { useUser } from "@/hooks/use-user";
import InscriptionPage1 from "../components/Formm";
import NavBar from "../components/NavBar";
import Title from "../components/Titlee";
import { Pages } from "@/constants/pages";

export default function Homee() {
    const { validateAccess } = useUser();
    validateAccess(Pages.submission);
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
