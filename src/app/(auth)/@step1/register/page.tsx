"use client";
// animations
import { slideInRightExitLeft } from "@/constants/animations";

// hooks
import { useState } from "react";
import { MultiStepKeys, useMultiStep } from "@/app/(auth)/hooks/use-mutli-step-register";
import { useForm } from "react-hook-form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";

// components
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import CountrySelect from "@/app/(auth)/components/country-select";
import { Button } from "@/components/ui/button";

// icons
import { FcGoogle } from "react-icons/fc";

// constants
import { OAUTH_PROVIDERS } from "@/app/(auth)/actions/oauth";

// schema
import { registerSchema1 } from "@/app/(auth)/constants/schemas";
import { useRegisterStore } from "@/app/(auth)/constants/register-store";

import { motion } from "framer-motion";

// fonts
import { Rokkitt } from "next/font/google";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { endpoints, getUrl } from "@/constants/api";
import { useToast } from "@/components/ui/use-toast";
const rokkitt = Rokkitt({
    subsets: ["latin"],
    display: "swap",
});

export default function Step() {
    const updateRegisterStore = useRegisterStore((state) => state.updateEntries);
    const entries = useRegisterStore((state) => state.entries);
    const form = useForm<z.infer<typeof registerSchema1>>({
        resolver: zodResolver(registerSchema1),
        defaultValues: {
            email: entries.email || "",
            phone: entries.phone.split("-")[1] || "",
        },
    });

    const [isOauthRegsitering, setIsOauthRegsitering] = useState(false);
    const [countryCode, setCountryCode] = useState("+213");

    const { next } = useMultiStep(MultiStepKeys.register);
    const { toast } = useToast();
    const [sendingUniquenessVerification, setSendingUniquenessVerification] = useState(false);
    const { isLoading: isVerifyingUniqueEmail } = useQuery({
        queryKey: ["unique email"],
        queryFn: async () => {
            try {
                next();
                setSendingUniquenessVerification(false);
                const response = axios.post(getUrl(endpoints.emailUnique), { email: entries.email });
                return response;
            } catch (error) {
                if (error instanceof AxiosError && error.response) {
                    toast({
                        title: "Email déjà utilisé",
                        description: "Essayez d'utiliser une autre adresse e-mail.",
                        variant: "destructive",
                    })
                    throw new Error("duplicate email");
                } else {
                    toast({
                        title: "Erreur de connexion",
                        description: "Nous nous pouvons pas connecter au serveur",
                        variant: "destructive",
                    });
                    throw new Error("connection error");
                }
            }
        },
        enabled: sendingUniquenessVerification,
        retry: false,
    });
    function onSubmit(values: z.infer<typeof registerSchema1>){
        let [code, area] = countryCode.includes("-") ? countryCode.split("-") : [countryCode, ""];
        area = area === "" ? "" : `(${area})`;
        values.phone = `${code}${area}-${values.phone}`;
        updateRegisterStore(values);
        setSendingUniquenessVerification(true);
    }

    return (
        <>
            <motion.p className={cn(
                "text-4xl font-bold",
                "text-center",
                rokkitt.className
            )}
                key="step-1-header"
                {...slideInRightExitLeft}
            >
                {"Créer un compte"}
            </motion.p>
            <div className="flex-grow max-h-10"></div>
            <Form {...form}>
                <motion.div
                    key="step-1-form"
                    {...slideInRightExitLeft}
                    className=""
                >
                    <form onSubmit={form.handleSubmit(onSubmit)} className={cn(
                        "w-full md:w-80 lg:w-[22rem]",
                    )}>
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="mb-3">
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Entrez votre email"
                                            className="rounded-full bg-gray-100 border-0 font-medium"
                                            {...field}
                                            disabled={isOauthRegsitering || isVerifyingUniqueEmail}
                                        />
                                    </FormControl>
                                    <FormMessage className="text-xs" />
                                </FormItem> 
                            )}
                        />
                        <FormField 
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem className="mb-7">
                                    <FormLabel>Numéro de téléphone</FormLabel>
                                    <div className="
                                        flex gap-x-1
                                        bg-gray-100
                                        rounded-full
                                        items-center
                                        focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-slate-950
                                        ">
                                        <CountrySelect className={{
                                            trigger: "rounded-l-full focus:ring-0 focus:ring-offset-0 bg-transparent border-0 w-24 pe-0", 
                                        }} 
                                            disabled={isOauthRegsitering || isVerifyingUniqueEmail}
                                            onChange={setCountryCode} 
                                        />
                                        <Input
                                            type="text"
                                            className="rounded-r-full flex-grow bg-transparent border-0
                                            focus-visible:ring-0 focus-visible:ring-offset-0 font-medium"
                                            placeholder="Entrez le numéro de téléphone"
                                            {...field}
                                            disabled={isOauthRegsitering || isVerifyingUniqueEmail}
                                        />
                                    </div>
                                    <FormMessage className="text-xs" />
                                </FormItem>
                            )}
                        />
                        <Button 
                            type="submit" 
                            className={cn(
                                "w-full font-bold rounded-full mb-2 bg-black hover:bg-black/90",
                            )}
                            disabled={isOauthRegsitering || isVerifyingUniqueEmail}
                        >
                            Continuer
                        </Button>
                    </form>
                    <Button className="flex justify-center
                        w-full border rounded-full
                        hover:bg-transparent hover:border-slate-500
                        bg-white text-black "
                        onClick={async () => {
                            setIsOauthRegsitering(true);
                            OAUTH_PROVIDERS.google.register();
                            setIsOauthRegsitering(false);
                        }}
                    >
                        <div className="flex flex-row gap-x-2 items-center justify-center">
                            <FcGoogle />
                            <p>{"S'inscrire Avec Google"}</p>
                        </div>
                    </Button>

                </motion.div>
            </Form>
        </>
    );
}
