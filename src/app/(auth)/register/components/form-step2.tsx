import {
    Form,
    FormField,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";

import { Montserrat } from "next/font/google";
import { useForm } from "react-hook-form";

// fonts
const montserrat = Montserrat({
    subsets: ["latin"],
    display: "swap",
});

// schema
import { registerSchema2 } from "@/app/(auth)/register/constants/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import PasswordInput from "../../components/password-input";
import { useRegisterStore } from "../constants/store";

export default function FormStep2({
    next,
    previous,
    }: {
        next: () => void;
        previous: () => void;
    }) {
    const form = useForm<z.infer<typeof registerSchema2>>({
        resolver: zodResolver(registerSchema2),
        defaultValues: {
            password: "",
            confirm: "",
        }
    });
    const updateRegisterStore = useRegisterStore((state) => state.updateEntries)

    function onSubmit(values: z.infer<typeof registerSchema2>) {
        updateRegisterStore({password: values.password});
        next();
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                <FormField 
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <PasswordInput 
                            {...field}
                            className={{
                                field: "bg-transparent border border-slate-300",
                                item: "mb-3"
                            }}
                        />
                    )}
                />
                <FormField 
                    control={form.control}
                    name="confirm"
                    render={({ field }) => (
                        <PasswordInput 
                            {...field}
                            label="Confirmez mot de passe"
                            className={{
                                field: "bg-transparent border border-slate-300",
                                item: "mb-5",
                            }}
                        />
                    )}
                />
                <Button 
                    type="submit" 
                    className="rounded-full w-full font-bold bg-black hover:bg-black/90"
                >
                    Continuer
                </Button>
            </form>
        </Form>
    );
}

