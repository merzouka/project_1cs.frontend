"use client";

// animations
import { slideInRightExitLeft, slideInLeftExitLeft } from "@/constants/animations";

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
    const entries = useRegisterStore((state) => state.entries);
    const form = useForm<z.infer<typeof registerSchema2>>({
        resolver: zodResolver(registerSchema2),
        defaultValues: {
            password: entries.password || "",
            confirm: "",
        }
    });

    const { next, direction } = useMultiStep(MultiStepKeys.register);
    const updateRegisterStore = useRegisterStore((state) => state.updateEntries)
    function onSubmit(values: z.infer<typeof registerSchema2>) {
        updateRegisterStore({password: values.password});
        next();
    }
    const animation = direction == "forward" ? slideInRightExitLeft : slideInLeftExitLeft;
    return (
        <>
            <motion.p className={cn(
                "text-3xl font-bold",
                "text-center",
                rokkitt.className
            )}
                key="step-4-header"
                {...animation}
            >
                {"Saisissez votre mot de passe."}
            </motion.p>
            <div className="flex-grow max-h-10"></div>
            <Form {...form}>
                <motion.div
                    key="step-4-form"
                    {...animation}
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
                                    placeholder="Ré-entrez le mot de passe"
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
