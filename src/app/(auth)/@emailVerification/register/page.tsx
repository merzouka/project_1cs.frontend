"use client";

// animations
import { slideInRightExitLeft } from "@/constants/animations";

// hooks
import { MultiStepKeys, useMultiStep } from "@/app/(auth)/hooks/use-mutli-step-register";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useRegisterStore } from "@/app/(auth)/constants/register-store";

// components
import { Spinner } from "@/components/custom/spinner";
import { Toaster } from "@/components/ui/toaster";
import { 
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage 
} from "@/components/ui/form";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// utils
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import axios, { AxiosError } from "axios";
import { getUrl, endpoints } from "@/constants/api";

// fonts
import { inter } from "@/constants/fonts";

const verifyEmailSchema = z.object({
    code: z.string({ required_error: "Veuillez saisir votre code" }),
});

export default function Step() {
    const { email } = useRegisterStore((state) => state.entries);
    const form = useForm<z.infer<typeof verifyEmailSchema>>({
        resolver: zodResolver(verifyEmailSchema),
        defaultValues: {
            code: "",
        }
    });

    const { toast } = useToast();
    const [sendingEmail, setSendingEmail] = useState(true);
    const { isLoading: isEmailLoading, isError: isEmailError, isSuccess: isEmailSuccess } = useQuery({
        queryKey: ["verfication email"],
        queryFn: async () => {
            setSendingEmail(false);
            try {
                const response = await axios.post(getUrl(endpoints.verificationEmail), { email: email});
                toast({
                    description: "Un email de vérification vous a été envoyé.",
                });
                return JSON.parse(response.data);
            } catch (error) {
                toast({
                    title: "Erreur",
                    description: "L'e-mail n'a pas pu être envoyé.",
                    variant: "destructive",
                });
                throw new Error("connection error");
            }
        },
        enabled: sendingEmail,
        retry: false,
    });


    const [sendingOTP, setSendingOTP] = useState(false);
    const [code, setCode] = useState("");
    const { isLoading: isOTPLoading } = useQuery({
        queryKey: ["otp verification"],
        queryFn: async () => {
            setSendingOTP(false);
            try {
                const response = await axios.post(getUrl(endpoints.otpVerification), { email: email, code: code })
                next();
                return JSON.parse(response.data);
            } catch (error) {
                if (error instanceof AxiosError && error?.response) {
                    toast({
                        title: "Erreur",
                        description: "Le code que vous avez fourni est incorrect.",
                        variant: "destructive",
                    });
                } else {
                    toast({
                        title: "Erreur",
                        description: "Nous n'avons pas pu se connecter au serveur.",
                        variant: "destructive",
                    });
                }
                throw new Error("otp error");
            }
        },
        enabled: sendingOTP,
        retry: false,
    });

    const { next } = useMultiStep(MultiStepKeys.register);
    function onSubmit(values: z.infer<typeof verifyEmailSchema>) {
        setCode(values.code);
        setSendingOTP(true);
    }

    return (
        <>
            <motion.div
                key="email-verification-header"
                {...slideInRightExitLeft}
                className="flex flex-col items-center justify-center"
            >
                {
                    isEmailSuccess &&
                        <>
                            <p className="text-3xl lg:text-4xl font-bold max-w-[20ch] text-center mb-2 lg:mb-4">
                                {"Vérifiez votre boite de réception"}
                            </p>
                            <p className="text-gray-500 flex flex-col justify-center items-center mb-2 lg:mb-10">
                                <span className="text-center">{"Nous avons envoyés un code de verification à"}</span>
                                <span>{`${email}`}</span>
                            </p>
                        </>
                }
                {
                    isEmailError &&
                        <>
                            <p className="text-3xl lg:text-4xl font-bold max-w-[20ch] text-center mb-2 lg:mb-4">
                                {"Erreur"}
                            </p>
                            <p className="text-gray-500 flex flex-col justify-center items-center mb-2 lg:mb-10">
                                <span className="text-center">{"Veuillez Réesseyer"}</span>
                                <span>{`${email}`}</span>
                            </p>
                        </>
                }
                {
                    isEmailLoading &&
                        <>
                            <Spinner size="md" text="show" direction="row" className="mb-2 lg:mb-5 text-gray-400">
                                {"Chargement..."}
                            </Spinner>
                        </>
                }
            </motion.div>
            <motion.div
                key="email-verification-form"
                {...slideInRightExitLeft}
                className="flex flex-col items-center justify-center"
            >
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col items-center justify-center mb-3 lg:mb-10">
                        <FormField
                            control={form.control}
                            name="code"
                            render={({ field }) => (
                                <FormItem className="mb-5">
                                    <FormControl>
                                        <InputOTP
                                            disabled={isEmailLoading || isOTPLoading || isEmailError}
                                            autoFocus
                                            className={inter.className}
                                            maxLength={4}
                                            render={({ slots }) => (
                                                <InputOTPGroup className="flex gap-x-2 md:gap-x-4">
                                                    {
                                                        slots.map((slot, index) => (
                                                            <InputOTPSlot 
                                                                defaultValue={"0"}
                                                                className={cn(
                                                                    "rounded-full aspect-square w-16 h-16 lg:w-20 lg:h-20 border-2 border-slate-200",
                                                                    "first:rounded-full last:rounded-full",
                                                                    "text-3xl lg:text-4xl font-bold"
                                                                )}
                                                                key={index}
                                                                {...slot}
                                                            />
                                                        ))
                                                    }{" "}
                                                </InputOTPGroup>
                                            )}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage className="text-xs"/>
                                </FormItem>
                            )}
                        />
                        <Button disabled={isEmailLoading || isOTPLoading || isEmailError} 
                            className="rounded-full w-full bg-black hover:bg-black/70 font-bold max-w-96">
                            {"Vérifier email"}
                        </Button>
                    </form>
                </Form>
            </motion.div>
            <motion.div
                key="email-verification-resend-email"
                {...slideInRightExitLeft}
                className="flex flex-col items-center justify-center"
            >
                <p className="flex flex-wrap justify-center items-center text-xs">
                    {"Vous n'avez pas reçu un e-mail?"}
                    <Button variant="link" size="sm" onClick={() => setSendingEmail(true)} disabled={sendingEmail}
                        className="font-bold focus-visible:ring-blue-400 p-1 ms-5 my-2 h-5 rounded-none text-xs">
                        Cliquez pour renvoyer
                    </Button>
                </p>
            </motion.div>
            <Toaster />
        </>
    );
}
