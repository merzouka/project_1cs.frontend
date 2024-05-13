"use client"

import Firstsec from "./components/Firstsec";
import Footer from "./components/Footer";
import SecondSec from "./components/SecondSec";
import Thirdsec from "./components/Thirdsec";
import { SectionWrapper } from "./components/section-wrapper";

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

    );
}

export default HomePage;
