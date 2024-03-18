"use client";
import {
    Form,
    FormField,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";

import { useForm } from "react-hook-form";

// schema
import { registerSchema2 } from "@/app/(auth)/constants/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import PasswordInput from "@/app/(auth)/components/password-input";
import { useRegisterStore } from "@/app/(auth)/constants/register-store";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { MultiStepKeys, useMultiStep } from "@/app/(auth)/hooks/use-mutli-step-register";


// fonts
import { Rokkitt } from "next/font/google";
const rokkitt = Rokkitt({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "700"],
});

export default function Step() {
    const form = useForm<z.infer<typeof registerSchema2>>({
        resolver: zodResolver(registerSchema2),
        defaultValues: {
            password: "",
            confirm: "",
        }
    });
    const updateRegisterStore = useRegisterStore((state) => state.updateEntries)

    const { next, direction } = useMultiStep(MultiStepKeys.register);
    function onSubmit(values: z.infer<typeof registerSchema2>) {
        updateRegisterStore({password: values.password});
        next();
    }
    const initial = direction == "forward"? {opacity: 0, x: 200} : {opacity: 0, x: -200};
    return (
        <>
            <motion.p className={cn(
                "text-3xl font-bold",
                "text-center",
                rokkitt.className
            )}
                key="create-account-header"
                initial={initial}
                animate={{opacity: 1, x: 0}}
                exit={{opacity: 0, x: -200}}
            >
                {"Saisissez votre mot de passe."}
            </motion.p>
            <div className="flex-grow max-h-10"></div>
            <Form {...form}>
                <motion.div
                    key={2}
                    initial={initial}
                    animate={{opacity: 1, x: 0}}
                    exit={{opacity: 0, x: -200}}
                    className="w-full flex items-center justify-center md:w-80 lg:w-[22rem]"
                >
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                        <FormField 
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <PasswordInput 
                                    onChange={field.onChange}
                                    value={field.value}
                                    disabled={field.disabled}
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
                                    onChange={field.onChange}
                                    value={field.value}
                                    disabled={field.disabled}
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
                            className={cn(
                                "rounded-full w-full font-bold bg-black hover:bg-black/90",
                            )}
                        >
                            Continuer
                        </Button>
                    </form>
                </motion.div>
            </Form>
        </>
    );
}
