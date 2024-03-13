import { 
    Form,
    FormControl,
    FormField, 
    FormItem, 
    FormLabel,
    FormMessage
} from "@/components/ui/form";

import { registerSchema4 } from "../constants/types";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { provinces } from "@/constants/provinces";
import { useForm } from "react-hook-form";
import { 
    Select,
    SelectContent,
    SelectTrigger,
    SelectItem,
    SelectValue
} from "@/components/ui/select";
import { Province, cities } from "@/constants/cities";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRegisterStore } from "../constants/store";
import { Message, register } from "@/app/(auth)/actions/credentials";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

export default function FormStep4({
    previous
    }: {
        previous: () => void;
    }) {
    const form = useForm<z.infer<typeof registerSchema4>>({
        resolver: zodResolver(registerSchema4),
        defaultValues: {
            province: "",
            city: "",
        }
    });
    const [province, setProvince] = useState<string | undefined>(undefined);
    const provinceCities = province && cities.find((city: Province) => city.province === province);
    const updateRegisterStore = useRegisterStore((state) => state.updateEntries);
    const entries = useRegisterStore((state) => state.entries);
    const [isRegisterProcessing, setIsRegisterProcess] = useState(false);
    const router = useRouter();
    const { toast } = useToast();
    const [error, setError] = useState(false);
    if (error) {
        toast({
            title: "Erreur de connexion",
            description: "Nous ne pouvons pas créer votre compte",
            variant: "destructive",
        });
        console.log("error");
        setError(false);
    }

    async function onSubmit(values: z.infer<typeof registerSchema4>) {
        updateRegisterStore(values);
        setIsRegisterProcess(true);
        const fields = {...entries, ...values};
        console.log(fields)
        const response = await register(fields);
        setIsRegisterProcess(false);
        if (response.type == Message.Success) {
            router.push("/login");
            return;
        }
        setError(true);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                <FormField 
                    control={form.control}
                    name="province"
                    render={({ field }) => (
                        <FormItem className="mb-2">
                            <FormLabel>Wilaya*</FormLabel>
                            <Select 
                                onValueChange={(value) => {
                                    setProvince(value);
                                    field.onChange(value);
                                }} 
                                defaultValue={field.value}
                                disabled={isRegisterProcessing}
                            >
                                <FormControl>
                                    <SelectTrigger className="rounded-full text-gray-500">
                                        <SelectValue placeholder="Sélectionneé votre wilaya"/>
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {
                                        provinces.sort().map((province) => (
                                            <SelectItem key={province} value={province} className="capitalize">
                                                {province}
                                            </SelectItem>
                                        ))
                                    }
                                </SelectContent>
                            </Select>
                            <FormMessage className="text-xs"/>
                        </FormItem>
                    )}
                />
                <FormField 
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                        <FormItem className="mb-5">
                            <FormLabel>Commune*</FormLabel>
                            <Select 
                                onValueChange={field.onChange} 
                                defaultValue={field.value}
                                disabled={isRegisterProcessing}
                            >
                                <FormControl>
                                    <SelectTrigger className="rounded-full text-gray-500">
                                        <SelectValue placeholder="Sélectionnez votre commune"/>
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {
                                        !provinceCities ?
                                        <p>Sélectionnez une wilaya</p>:
                                        provinceCities.cities.map((city) => (
                                            <SelectItem key={city.id} value={city.city}>
                                                    {city.city}
                                            </SelectItem>
                                        ))
                                    }
                                </SelectContent>
                            </Select>
                            <FormMessage className="text-xs"/>
                        </FormItem>
                    )}
                />
                <Button 
                    disabled={isRegisterProcessing}
                    type="submit" 
                    className="bg-black hover:bg-black/70 rounded-full font-bold w-full"
                >
                    Créer compte
                </Button>
            </form>
        </Form>
    );
}
