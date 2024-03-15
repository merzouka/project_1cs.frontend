"use client";
import { cn } from "@/lib/utils";
import Logo from "@/components/ui/logo";
import SideBanner from "../components/side-banner";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormField,
} from "@/components/ui/form";

import { Rokkitt } from "next/font/google";
import { useForm } from "react-hook-form";

// schema
import { passwordResetSchema } from "@/app/(auth)/register/constants/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import PasswordInput from "@/app/(auth)/components/password-input";
import { Message, resetPassword } from "@/app/(auth)/actions/credentials";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { Toaster } from "@/components/ui/toaster";

// fonts
const rokkitt = Rokkitt({
    subsets: ["latin"],
    display: "swap",
});

export default function ResetPasswordPage() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const { toast } = useToast();
    const form = useForm<z.infer<typeof passwordResetSchema>>({
        resolver: zodResolver(passwordResetSchema),
        defaultValues: {
            password: "",
            confirm: "",
        }
    });
    let disableForm = false
    const id = Number(searchParams.get("id") || "0");
    const email = searchParams.get("email");

    async function onSubmit(values: z.infer<typeof passwordResetSchema>) {
        if (!id || !email) {
            toast({
                title: "Adresse invalide",
                description: "Veuilleez utiliser l'adresse envoyée dans votre boite mail",
                variant: "destructive",
            });
            disableForm = true;
        }
        const response = await resetPassword({
            id: id || "",
            email: email || "",
            newPassword: values.password,
        });
        if (response.type == Message.Success) {
            router.push("/login");
            return;
        }
        if (response.value == "server error") {
            toast({
                title: "Erreur de connexion",
                description: "Impossible de se connecter au serveur",
                variant: "destructive",
                action: 
                <ToastAction altText="Actualiser" onClick={() => location.reload()}>
                    Actualiser
                </ToastAction>,
            });
            return;
        }
        toast({
            title: "Adresse invalide",
            description: "Veuilleez utiliser l'adresse envoyée dans votre boite mail",
            variant: "destructive",
        });
    }

    return (
        <div>
            <div className="
                grid grid-cols-1 md:grid-cols-2 place-items-center |
                min-h-dvh |
                p-1 md:p-3
                ">
                <div className="
                    flex justify-center items-center
                    h-full w-full
                    ">
                    <div className="flex flex-col justify-center items-center h-full">
                        <Logo />
                        <div className="flex-grow max-h-12"></div>
                        <div className="flex flex-col gap-y-4 items-center justify-center">
                            <h2 className={cn(
                                "text-4xl font-bold max-w-[25ch] text-center",
                                rokkitt.className
                            )}>
                                Réinitialiser votre mot de passe 
                            </h2>
                        </div>
                        <div className="flex-grow max-h-10"></div>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="w-9/12">
                                <FormField 
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <PasswordInput 
                                            {...field}
                                            disabled={disableForm}
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
                                            disabled={disableForm}
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
                                    disabled={disableForm}
                                >
                                    Continuer
                                </Button>
                            </form>
                        </Form>
                        <div className="flex-grow max-h-12"></div>
                    </div>
                </div>
                <SideBanner />
            </div>
            <Toaster />
        </div>
    );
}
