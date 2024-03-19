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
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { resetPasswordSchema } from "@/app/(auth)/constants/schemas";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { endpoints, getUrl } from "@/constants/api";

import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { motion } from "framer-motion";

// fonts
import { rokkitt } from "@/constants/fonts";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { MultiStepKeys, useMultiStep } from "../../hooks/use-mutli-step-register";
import { slideInRightExitLeft, fade } from "@/constants/animations";

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
    const { isLoading } = useQuery({
        queryKey: ["password reset"],
        queryFn: async () => {
            try {
                setResettingPassword(false);
                const response = await axios.patch(getUrl(endpoints.resetPassword), body);
                next();
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
    const [displayError, setDisplayError] = useState(false);
    const { next } = useMultiStep(MultiStepKeys.resetPassword);
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
        for (let constraint in constraints) {
            if (!constraints[constraint].verifier(values.password)) {
                setDisplayError(true);
                return;
            }
        }
        setBody({
            id: resetId,
            email: email,
            newPassword: values.password,
        });
        setResettingPassword(true);
    }

    const [password, setPassword] = useState("");
    return (
        <>
            <motion.p className={cn(
                "text-3xl font-bold",
                "text-center",
                rokkitt.className
            )}
                key="reset-password-header"
                {...slideInRightExitLeft}
            >
                {"Réinitialiser votre mot de passe "}
            </motion.p>
            <div className="flex-grow max-h-10"></div>
            <Form {...form}>
                <motion.div
                    key="reset-password-form"
                    {...slideInRightExitLeft}
                    className="w-full flex flex-col items-center justify-center md:w-80 lg:w-[22rem]"
                >
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                        <FormField 
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <PasswordInput 
                                    onChange={(e) => {
                                        setDisplayError(false);
                                        setPassword(e.target.value);
                                        field.onChange(e.target.value);
                                    }}
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
                                        item: "mb-2 lg:mb-5",
                                    }}
                                    placeholder="Ré-entrez le mot de passe"
                                />
                            )}
                        />
                        <ul className="flex flex-col justify-center items-start w-full ps-2 lg:ps-3 mb-2 lg:mb-3">
                            {
                                constraints.map((constraint) => 
                                    <ContstraintItem 
                                        key={constraint.label} 
                                        label={constraint.label}
                                        verifier={constraint.verifier}
                                        text={password}
                                        displayError={displayError}
                                    />)
                            }
                        </ul>
                        <Button 
                            type="submit" 
                            disabled={formDisabled || isLoading}
                            className={cn(
                                "rounded-full w-full font-bold bg-black hover:bg-black/90 mb-1 lg:mb-2",
                            )}
                        >
                            Continuer
                        </Button>
                    </form>
                    <motion.div 
                        className="w-full h-full flex justify-center items-center"
                        {...fade}
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
            <Toaster />
        </>
    );
}

interface Constraint {
    label: string,
    verifier: (text: string) => boolean;
}

const constraints: Constraint[] = [
    {
        label: "Lettre majuscule",
        verifier: (text) => new RegExp(/(?=[A-Z])/).test(text)
    },
    {
        label: "Lettre miniscule",
        verifier: (text) => new RegExp(/(?=[a-z])/).test(text)
    },
    {
        label: "Nombre",
        verifier: (text) => new RegExp(/(?=[0-9])/).test(text)
    },
    {
        label: "Longeur au minimum 8",
        verifier: (text) => text.length >= 8
    },
];

function ContstraintItem({
    text,
    verifier,
    label,
    displayError,
    }: {
        text: string;
        verifier: (text: string) => boolean;
        label: string;
        displayError: boolean;
    }) {
    return (
        <li className="flex gap-x-1 items-center justify-start mb-2">
            {
                !verifier(text) && displayError ?
                    <IoMdCloseCircleOutline className="w-5 h-5 text-red-500"/>
                    :
                    <IoIosCheckmarkCircleOutline className={cn(
                        "w-5 h-5",
                        verifier(text) && "text-emerald-600",
                        !verifier(text) && !displayError && "text-gray-400",
                    )} />
            }
            <p className={cn(
                "text-sm",
                verifier(text) && "text-emerald-600",
                !verifier(text) && !displayError && "text-gray-600",
                !verifier(text) && displayError && "text-red-500",
            )}>
                {label}
            </p>
        </li>
    );
}
