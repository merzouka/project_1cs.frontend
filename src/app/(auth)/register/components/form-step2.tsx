import {
    Form,
    FormField,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";

import { useForm } from "react-hook-form";

// schema
import { registerSchema2 } from "@/app/(auth)/register/constants/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import PasswordInput from "@/app/(auth)/components/password-input";
import { useRegisterStore } from "@/app/(auth)/register/constants/store";
import { motion } from "framer-motion";

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
            <motion.div
                key={2}
                initial={{opacity: 0, x: 200}}
                animate={{opacity: 1, x: 0}}
                exit={{opacity: 0, x: -200}}
                className="w-full"
            >
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
            </motion.div>
        </Form>
    );
}

