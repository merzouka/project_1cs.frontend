import { FAQ } from "./faq";
import { SectionWrapper } from "./section-wrapper";

export const FAQSection = () => {
    return (
        <SectionWrapper title="F.A.Q." styles={{ separtor: "w-14" }}>
            <FAQ />
        </SectionWrapper>
    );
}
