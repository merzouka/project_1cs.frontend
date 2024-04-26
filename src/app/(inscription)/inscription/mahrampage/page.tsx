import React from 'react'
import Titlee from '../../components/Titlee'
import NavBar from '../../components/NavBar'
import InscriptionPage3 from '../../components/Mahramform'
import { submitInscriptionData } from '../../api';


export default function page3() {
    return (
        <>
            <div
                className="bg-fixed bg-center bg-cover h-screen overflow-x-hidden "
                style={{
                    backgroundImage: `url('/3.jpg')`,
                }}
            >
                <NavBar />
                <Titlee />
                <InscriptionPage3 />
            </div>
        </>

    )
}

