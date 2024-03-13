import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import CountrySelect from "../../components/country-select";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import { FcGoogle } from "react-icons/fc";
import { OAUTH_PROVIDERS } from "@/app/(auth)/actions/oauth";

// schema
import { registerSchema1 } from "@/app/(auth)/register/constants/types";
import { useRegisterStore } from "../constants/store";

// fonts
const montserrat = Montserrat({
    subsets: ["latin"],
    display: "swap",
});

export default function FormStep1({ next }: { next: () => void }) {
    const form = useForm<z.infer<typeof registerSchema1>>({
        resolver: zodResolver(registerSchema1),
        defaultValues: {
            email: "",
            phone: "",
        },
    });

    const [isOauthRegsitering, setIsOauthRegsitering] = useState(false);
    const [countryCode, setCountryCode] = useState("+213");
    const updateRegisterStore = useRegisterStore((state) => state.updateEntries)

    function handleSubmit(values: z.infer<typeof registerSchema1>){
        let [code, area] = countryCode.includes("-") ? countryCode.split("-") : [countryCode, ""];
        area = area === "" ? "" : `(${area})`;
        values.phone = `${code}${area}${values.phone}`;
        updateRegisterStore(values);
        console.log(values);
        next();
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className={cn(
                "w-full",
                montserrat.className
            )}>
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem className="mb-3">
                            <FormLabel className="text-xs">Email</FormLabel>
                            <FormControl>
                                <Input autoFocus type="text" placeholder="Entrez votre email"
                                    className="rounded-full text-xs bg-gray-100 border-0 font-medium"
                                    {...field}
                                    disabled={isOauthRegsitering}
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
                            <FormLabel className="text-xs">Numéro de téléphone</FormLabel>
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
                                    className="rounded-r-full flex-grow text-xs bg-transparent border-0
                                    focus-visible:ring-0 focus-visible:ring-offset-0 font-medium"
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
                    className="w-full font-bold rounded-full mb-2 bg-black hover:bg-black/90" 
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
                    <p>S'inscrire Avec Google</p>
                </div>
            </Button>
        </Form>
    );
}
