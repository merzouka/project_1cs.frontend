import FormStep1 from "./form-step1";
import FormStep2 from "./form-step2";
import FormStep3 from "./form-step3";
import FormStep4 from "./form-step4";

export default function Forms({ 
    index,
    next,
    previous
    }: {
        index: number;
        next: () => void;
        previous: () => void;
    }) {
    switch (index) {
        case 0:
            return <FormStep1 next={next} />
        case 1:
            return <FormStep2 next={next} previous={previous}/>
        case 2:
            return <FormStep3 next={next} previous={previous}/>
        case 3:
            return <FormStep4 previous={previous}/>

        default:
            break;
    }
}
