
"use client"

import Firstsec from "./components/Firstsec";
import Footer from "./components/Footer";
import SecondSec from "./components/secondsec";
import { SectionWrapper } from "./components/section-wrapper";
import Thirdsec from "./components/thirdsec";

const HomePage = () => {
    return (

        <SectionWrapper title="les rites du hajj" >
            <>
                <Firstsec />
                <SecondSec />
                <Thirdsec />
                <Footer />

            </>

        </SectionWrapper>


    )
}


export default HomePage;
