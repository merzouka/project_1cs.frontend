import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { registerSchema4 } from "@/app/(auth)/register/constants/types";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export default function FormStep4() {
    const form = useForm<z.infer<typeof registerSchema4>>({
        resolver: zodResolver(registerSchema4),
        defaultValues: {
            province: "",
            city: "",
        },
    });

    function onSubmit(values: z.infer<typeof registerSchema4>) {
        console.log(values);
    }
    return (
        <Form {...form}>

        </Form>
    );
}
