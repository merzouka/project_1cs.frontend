import React from 'react'
import Title from '../../components/Titlee'
import NavBar from '../../components/NavBar'
import InscriptionPage3 from '../../extra/Mahramform'


export default function Page3() {
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
                <InscriptionPage3 />
            </div>
        </>

    )
}

