"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormField,
} from "@/components/ui/form";

import { useForm } from "react-hook-form";

// schema
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import PasswordInput from "@/app/(auth)/components/password-input";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { resetPasswordSchema } from "@/app/(auth)/constants/schemas";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { endpoints, getUrl } from "@/constants/api";

import { motion } from "framer-motion";

// fonts
import { Rokkitt } from "next/font/google";
const rokkitt = Rokkitt({
    subsets: ["latin"],
    display: "swap",
});

enum ResetError {
    DuplicatePassword = "duplicate",
    InvalidResetToken = "invalid",
}

function matchesError(matching: string, matched: ResetError) {
    return matching.includes(matched);
}

export default function ResetPasswordPage() {
    const form = useForm<z.infer<typeof resetPasswordSchema>>({
        resolver: zodResolver(resetPasswordSchema),
        defaultValues: {
            password: "",
            confirm: "",
        }
    });

    const [resettingPassword, setResettingPassword] = useState(false);
    const { toast } = useToast();
    const router = useRouter();
    const { isLoading } = useQuery({
        queryKey: ["password reset"],
        queryFn: async () => {
            try {
                setResettingPassword(false);
                const response = axios.post(getUrl(endpoints.resetPassword), body);
                router.push("/login");
                return response;
            } catch (error) {
                if (error instanceof AxiosError && error.response) {
                    if (matchesError(error.response.data, ResetError.DuplicatePassword)) {
                        toast({
                            title: "Mot de passe invalide",
                            description: "Le mot de passe saisi est déjà utilisé.",
                            variant: "destructive",
                        });
                        throw new Error("duplicate password");
                    } else if (matchesError(error.response.data, ResetError.InvalidResetToken)) {
                        toast({
                            title: "Jeton de réinitialisation invalide",
                            description: "Veuillez utiliser le courriel qui a été envoyé à votre boîte de réception.",
                            variant: "destructive",
                        });
                        throw new Error("invalid reset token");
                    }
                }
                toast({
                    title: "Erreur de connexion",
                    description: "Nous ne pouvons pas connecter au serveur",
                    variant: "destructive",
                });
                throw new Error("connection error");
            }
        },
        enabled: resettingPassword,
        retry: false,
    });

    const searchParams = useSearchParams();
    const resetId = Number(searchParams.get("id") || "0");
    const email = searchParams.get("email");

    const [body, setBody] = useState({});
    const [formDisabled, setFormDisabled] = useState(false);
    async function onSubmit(values: z.infer<typeof resetPasswordSchema>) {
        if (!resetId || !email) {
            toast({
                title: "Adresse invalide",
                description: "Veuilleez utiliser l'adresse envoyée dans votre boite mail",
                variant: "destructive",
            });
            setFormDisabled(true);
            return;
        }
        setBody({
            id: resetId,
            email: email,
            newPassword: values.password,
        });
        setResettingPassword(true);
    }

    return (
        <>
            <motion.p className={cn(
                "text-3xl font-bold",
                "text-center",
                rokkitt.className
            )}
                key="reset password header"
                initial={{opacity: 0, x: 200}}
                animate={{opacity: 1, x: 0}}
                exit={{opacity: 0, x: -200}}
            >
                {"Réinitialiser votre mot de passe "}
            </motion.p>
            <div className="flex-grow max-h-10"></div>
            <Form {...form}>
                <motion.div
                    key="reset password form"
                    initial={{opacity: 0, x: 200}}
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
                                    disabled={formDisabled || isLoading}
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
                                    disabled={formDisabled || isLoading}
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
                            disabled={formDisabled || isLoading}
                            className={cn(
                                "rounded-full w-full font-bold bg-black hover:bg-black/90",
                            )}
                        >
                            Continuer
                        </Button>
                    </form>
                </motion.div>
            </Form>
            <Toaster />
        </>
    );
}
