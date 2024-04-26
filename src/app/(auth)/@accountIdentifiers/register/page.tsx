"use client";
// animations
import { slideInLeftExitRight, slideInRightExitLeft } from "@/constants/animations";

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
import { useRegisterStore } from "@/app/(auth)/stores/register-store";

import { motion } from "framer-motion";

// fonts
import { rokkitt } from "@/constants/fonts";
import { useErrorStore } from "../../stores/register-error-store";


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

    const { next, direction } = useMultiStep(MultiStepKeys.register);
    const setErrors = useErrorStore((state) => state.setErrors);
    function onSubmit(values: z.infer<typeof registerSchema1>){
        let [code, area] = countryCode.includes("-") ? countryCode.split("-") : [countryCode, ""];
        area = area === "" ? "" : `(${area})`;
        values.phone = `${code}${area}-${values.phone}`;
        updateRegisterStore(values);
        setErrors({ email: undefined });
        next();
    }

    const animation = direction == "forward" ? slideInRightExitLeft : slideInLeftExitRight;
    const errors = useErrorStore((state) => state.errors);
    return (
        <>
            <motion.p className={cn(
                "text-4xl font-bold",
                "text-center",
                rokkitt.className
            )}
                key="account-identifiers-header"
                {...animation}
            >
                {"Créer un compte"}
            </motion.p>
            <div className="flex-grow max-h-10"></div>
            <Form {...form}>
                <motion.div
                    key="account-identifiers-form"
                    {...animation}
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
                                            className="rounded-full bg-gray-100 border-0"
                                            {...field}
                                            disabled={isOauthRegsitering}
                                            onChange={(e) => {
                                                setErrors({ email: undefined });
                                                field.onChange(e.target.value);
                                            }}
                                        />
                                    </FormControl>
                                    <FormMessage className="text-xs">
                                        {errors.email ? errors.email : null}
                                    </FormMessage>
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
                                            disabled={isOauthRegsitering}
                                            onChange={setCountryCode} 
                                        />
                                        <Input
                                            type="text"
                                            className="rounded-r-full flex-grow bg-transparent border-0
                                            focus-visible:ring-0 focus-visible:ring-offset-0"
                                            placeholder="Entrez le numéro de téléphone"
                                            {...field}
                                            disabled={isOauthRegsitering}
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
                            disabled={isOauthRegsitering}
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
