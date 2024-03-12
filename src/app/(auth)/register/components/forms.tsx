import FormStep1 from "./form-step1";
import FormStep2 from "./form-step2";

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
            return <FormStep2 {...props}/>

        default:
            break;
    }
}
