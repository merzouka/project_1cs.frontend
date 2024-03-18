"use client";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
    FormLabel,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { resetPasswordEmailSchema } from "@/app/(auth)/constants/schemas";

import { useEmailStore } from "@/app/(auth)/constants/email-store";
import { MultiStepKeys, useMultiStep } from "@/app/(auth)/hooks/use-mutli-step-register";
import { cn } from "@/lib/utils";

// fonts
import { Rokkitt } from "next/font/google";
import Link from "next/link";
const rokkitt = Rokkitt({
    subsets: ["latin"],
    display: "swap",
});

export default function ResetEmailPage() {
    const email = useEmailStore((state) => state.email);
    const form = useForm({
        resolver: zodResolver(resetPasswordEmailSchema),
        defaultValues: {
            email: email,
        }
    });

    const setEmail = useEmailStore((state) => state.setEmail);
    const { next } = useMultiStep(MultiStepKeys.resetEmail);
    function onSubmit(values: z.infer<typeof resetPasswordEmailSchema>) {
        if (values.email != email) {
            setEmail(values.email);
        }
        next();
    }

    return (
        <>
            <motion.div
                className={cn(
                "text-3xl font-bold mb-4 lg:mb-7",
                "text-center",
                rokkitt.className
            )}
                key="reset password email header"
                initial={{opacity: 0, x: 200}}
                animate={{opacity: 1, x: 0}}
                exit={{opacity: 0, x: -200}}
            >
                {"Mot de passe oublié?"}
            </motion.div>
            <Form {...form}>
                <motion.div
                    key="reset password form"
                    initial={{opacity: 0, x: 200}}
                    animate={{opacity: 1, x: 0}}
                    exit={{opacity: 0, x: -200}}
                    className="w-full flex flex-col items-center justify-center md:w-80 lg:w-[22rem]"
                >
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col jusitfy-center items-center w-full">
                        <FormField 
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="mb-5 w-full">
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input 
                                            placeholder="Entrez votre email"
                                            type="email"
                                            {...field}
                                            className="bg-transparent border-slate-400 rounded-full"
                                        />
                                    </FormControl>
                                    <FormMessage className="text-xs"/>
                                </FormItem>
                            )}
                        />
                        <Button
                            className="bg-black font-bold rounded-full hover:bg-black/70 mb-3 w-full"
                        >
                            {"Réinitialiser votre mot de passe"}
                        </Button>
                    </form>
                    <motion.div 
                        className="w-full h-full flex justify-center items-center"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                    >
                        <Link href="/login" className="w-full h-full">
                            <Button 
                                className="hover:border hover:border-black hover:bg-transparent rounded-full w-full group"
                                variant="ghost"
                            >
                                <div className="flex justify-between items-center">
                                    <ArrowLeft className="text-black p-1 group-hover:p-0 group-hover:-translate-x-2 group-hover:transition-all transition-all"/>
                                    <p className="font-bold">{"Revenir à la page de connexion"}</p>
                                </div>
                            </Button>
                        </Link>
                    </motion.div>
                </motion.div>
            </Form>
        </>
    );
}
