
"use client"
import React from 'react'

import NavBar from '../../components/NavBar'
import Titlee from '../../components/Titlee'
import InscriptionPage2 from '../../components/Secform'

export default function Page2() {
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

                <InscriptionPage2 />
            </div>





        </>


    )
}

