"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { getUrl, endpoints } from "@/constants/api";
import { useEmailStore } from "@/app/(auth)/constants/email-store";
import { slideInRightExitLeft } from "@/constants/animations";
import { Spinner } from "@/components/custom/spinner";

export default function ResetEmailSentPage() {
    const email = useEmailStore((state) => state.email);
    const { toast } = useToast()
    const { isPending: isEmailLoadin, isError: isEmailError, isSuccess: isEmailSuccess, mutate } = useMutation({
        mutationFn: async () => {
            const response = await axios.post(getUrl(endpoints.resetPasswordEmail), { email: email});
            return response.data;
        },
        onSuccess: () => {
            toast({
                description: "Un email de vérification vous a été envoyé.",
            });
        },
        onError: () => {
            toast({
                title: "Erreur de connexion",
                description: "L'e-mail n'a pas pu être envoyé.",
                variant: "destructive",
            });
        }
    });

    return (
        <>
            <motion.div
                key="reset-email-sent-header"
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
                key="reset-email-sent-main"
                {...slideInRightExitLeft}
                className="flex items-center justify-center w-full"
            >
                <Button disabled={isEmailLoading} 
                    onClick={() => mutate()}
                    className="rounded-full w-full hover:bg-black hover:text-white bg-transparent text-black border-2 border-black font-bold max-w-96">
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
