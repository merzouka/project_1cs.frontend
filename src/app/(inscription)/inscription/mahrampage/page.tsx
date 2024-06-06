import InscriptionPage3 from '@/app/(user)/(inscription)/extra/Mahramform'
import { NavBar } from '@/app/components/nav-bar'
import { Title } from '@radix-ui/react-toast'
import React from 'react'


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

