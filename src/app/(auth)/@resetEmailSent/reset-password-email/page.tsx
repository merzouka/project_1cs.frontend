"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { getUrl, endpoints } from "@/constants/api";
import { useEmailStore } from "@/app/(auth)/constants/email-store";

export default function ResetEmailSentPage() {
    const email = useEmailStore((state) => state.email);
    const { toast } = useToast()
    // #TODO set to true
    const [sendingEmail, setSendingEmail] = useState(false);
    const { isLoading: isEmailLoading } = useQuery({
        queryKey: ["verfication email"],
        queryFn: async () => {
            setSendingEmail(false);
            try {
                const response = await axios.post(getUrl(endpoints.verificationEmail), { email: email});
                toast({
                    description: "Un email de vérification vous a été envoyé.",
                });
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
    return (
        <>
            <motion.div
                key="step 2 title"
                initial={{opacity: 0, x: 200}}
                animate={{opacity: 1, x: 0}}
                exit={{opacity: 0, x: -200}}
                className="flex flex-col items-center justify-center"
            >
                <p className="text-3xl lg:text-4xl font-bold max-w-[20ch] text-center mb-2 lg:mb-4">
                    {"Vérifiez votre boite de réception"}
                </p>
                <p className="text-gray-500 flex flex-col justify-center items-center mb-2 lg:mb-10">
                    <span className="text-center">{"Nous avons envoyés un code de verification à"}</span>
                    <span>{`${email}`}</span>
                </p>
            </motion.div>
            <motion.div
                key="step 2 resend email"
                initial={{opacity: 0, x: 200}}
                animate={{opacity: 1, x: 0}}
                exit={{opacity: 0, x: -200}}
                className="flex items-center justify-center w-full"
            >
                <Button disabled={isEmailLoading} 
                    onClick={() => setSendingEmail(true)}
                    className="rounded-full w-full bg-black hover:bg-black/70 font-bold max-w-96">
                    {"Renvoyer"}
                </Button>
            </motion.div>
            <Toaster />
        </>
    );
}

// function LinkResend() {
//     <p className="flex flex-wrap justify-center items-center text-xs">
//         {"Vous n'avez pas reçu un e-mail?"}
//         <Button variant="link" size="sm" onClick={() => setSendingEmail(true)} 
//             className="font-bold focus-visible:ring-blue-400 p-1 ms-5 my-2 h-5 rounded-none text-xs">
//             Cliquez pour renvoyer
//         </Button>
//     </p>
//
// }
