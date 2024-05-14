
"use client"

import Firstsec from "./components/Firstsec";
import Footer from "./components/Footer";
import SecondSec from "./components/secondsec";
import Thirdsec from "./components/thirdsec";
import { RitualsSection } from "./components/rituals-section";
import { GuideSection } from "./components/guide-section";
import { FAQSection } from "./components/faq-section";

const HomePage = () => {
    return (
        <>
            <Firstsec />
            <SecondSec />
            <Thirdsec />
            <RitualsSection />
            <GuideSection />
            <FAQSection />
            <Footer />
        </>
    )
}


export default HomePage;
