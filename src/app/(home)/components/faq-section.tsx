import { FAQ } from "./faq";
import { SectionWrapper } from "./section-wrapper";

export const FAQSection = () => {
    return (
        <SectionWrapper title="F.A.Q." styles={{ separator: "w-14" }}>
            <FAQ />
        </SectionWrapper>
    );
}
