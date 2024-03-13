import FormStep1 from "./form-step1";
import FormStep2 from "./form-step2";
import FormStep3 from "./form-step3";
import FormStep4 from "./form-step4";

export default function Forms({ 
    index,
    props 
    }: {
        index: number,
        props: { 
            next: () => void,
            previous: () => void, 
        }
    }) {
    switch (index) {
        case 0:
            return <FormStep1 next={props.next} />
        case 1:
            return <FormStep2 props={props}/>
        case 2:
            return <FormStep3 props={props}/>
        case 3:
            return <FormStep4 />

        default:
            break;
    }
}
