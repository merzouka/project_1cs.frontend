"use client";
import { Toaster } from "@/components/ui/toaster";
import SideBanner from "@/app/(auth)/components/side-banner";
import Logo from "@/components/ui/logo";
import { useUserStore } from "@/stores/user-store";
import { 
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage 
} from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { getUrl, endpoints } from "@/constants/api";
import { useToast } from "@/components/ui/use-toast";
import { BsPatchCheck } from "react-icons/bs";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useRegisterStore } from "../constants/register-store";

// fonts
const inter = Inter({
    subsets: ["latin"],
});

const verifyEmailSchema = z.object({
    code: z.string({ required_error: "Veuillez saisir votre code" }),
});

export default function VerifyEmailPage() {
    const id = useUserStore((state) => state.id);
    // const router = useRouter();
    // if (!id) {
    //     router.push("/login");
    // }

    const { email } = useRegisterStore((state) => state.entries);
    const form = useForm<z.infer<typeof verifyEmailSchema>>({
        resolver: zodResolver(verifyEmailSchema),
        defaultValues: {
            code: "",
        }
    });

    const [sendingEmail, setSendingEmail] = useState(false);
    const { isLoading: isEmailLoading, isError: isEmailError } = useQuery({
        queryKey: ["verfication email"],
        queryFn: async () => {
            setSendingEmail(false);
            try {
                const response = await axios.post(getUrl(endpoints.verificationEmail), { email: email});
                toast({
                    description: "Un email de vérification vous a été envoyé.",
                })
                return response;
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

    const { toast } = useToast();

    const [sendingOTP, setSendingOTP] = useState(false);
    const [code, setCode] = useState("");
    const { isSuccess: isOTPSucess, isLoading: isOTPLoading, isError: isOTPError, error: OTPError } = useQuery({
        queryKey: ["otp verification"],
        queryFn: async () => {
            setSendingOTP(false);
            try {
                const response = await axios.post(getUrl(endpoints.otpVerification), { email: email, code: code })
                return response;
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

    const [goNext, setGoNext] = useState(false);
    function onSubmit(values: z.infer<typeof verifyEmailSchema>) {
        // setCode(values.code);
        // setSendingOTP(true);
        setGoNext(true);
    }

    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center h-dvh p-3">
                <main className="flex jusitfy-center items-center h-full">
                    <div className="flex flex-col justify-start items-center h-full">
                        <div aria-hidden className="flex-grow max-h-12"></div>
                        <Logo />
                        <div aria-hidden className="flex-grow max-h-16"></div>
                        <AnimatePresence custom="wait" initial={false}>
                            {
                                !goNext &&
                                    <motion.div
                                        key="main"
                                        initial={{opacity: 0, x: -200}}
                                        animate={{opacity: 1, x: 0}}
                                        exit={{opacity: 0, x: -200}}
                                        className="flex flex-col items-center justify-center h-full"
                                    >
                                        <p className="text-3xl lg:text-4xl font-bold max-w-[15ch] text-center">{"Vérifiez votre boite de réception"}</p>
                                        <div className="flex-grow max-h-4"></div>
                                        <p className="text-gray-500 flex flex-col justify-center items-center">
                                            <span className="text-center">{"Nous avons envoyés un code de verification à"}</span>
                                            <span>{`${email}`}</span>
                                        </p>
                                        <div className="flex-grow max-h-12"></div>
                                        <Form {...form}>
                                            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col items-center justify-center">
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
                                        <div aria-hidden className="flex-grow max-h-12"></div>
                                        <p className="text-gray-600 flex flex-wrap justify-center items-center text-sm">
                                            {"Vous n'avez pas reçu un e-mail?"}
                                            <Button variant="link" size="sm" onClick={() => setSendingEmail(true)} 
                                                className="font-bold focus-visible:ring-blue-400 p-1 mx-5 my-2 h-5 rounded-none">
                                                Cliquez pour renvoyer
                                            </Button>
                                        </p>
                                    </motion.div>
                            }
                            {
                                goNext &&
                                    <motion.div 
                                        key="success"
                                        initial={{opacity: 0, x: 200}}
                                        animate={{opacity: 1, x: 0}}
                                        exit={{opacity: 0, x: -200}}
                                    >
                                        <div className="flex flex-col items-center justify-between">
                                            <BsPatchCheck className="text-slate-800 mb-8 border border-slate-200 rounded-full p-3 w-12 h-12" />
                                            <p className="font-bold text-3xl mb-6">Email validé</p>
                                            <p className="text-gray-500 max-w-[50ch] mb-10 text-center">
                                                {"Votre adresse e-mail a été validé avec succés. Cliquez ci-dessous pour revenir a votre profile."}
                                            </p>
                                            <Button tabIndex={-1} className={cn(
                                                "rounded-full bg-black hover:bg-black/70 font-bold w-full max-w-80",
                                            )}>
                                                <Link tabIndex={-1} href={`/profile/${id}`} className="w-full h-full flex items-center justify-center">
                                                    Continuer
                                                </Link>
                                            </Button>
                                        </div>
                                    </motion.div>
                            }
                        </AnimatePresence>
                    </div>
                </main>
                <SideBanner />
            </div>
            <Toaster />
        </div>
    );
}
