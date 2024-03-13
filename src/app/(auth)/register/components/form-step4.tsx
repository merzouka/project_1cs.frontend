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
import { Select, SelectContent, SelectTrigger } from "@/components/ui/select";
import { SelectItem, SelectValue } from "@radix-ui/react-select";
import { Province, cities } from "@/constants/cities";
import { useState } from "react";

export default function FormStep4({}) {
    const form = useForm<z.infer<typeof registerSchema4>>({
        resolver: zodResolver(registerSchema4),
        defaultValues: {
            province: "",
            city: "",
        }
    });
    const [province, setProvince] = useState<string | undefined>(undefined);
    const provinceCities = province && cities.find((city: Province) => city.province === province);


    function onSubmit(values: z.infer<typeof registerSchema4>) {

    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField 
                    control={form.control}
                    name="province"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Wilaya*</FormLabel>
                            <Select onValueChange={(value) => {
                                console.log(value);
                                setProvince(value);
                                field.onChange(value);
                            }} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Choisir votre wilaya"/>
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
                        <FormItem>
                            <FormLabel>Commune*</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Choisir votre commune"/>
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
            </form>
        </Form>
    );
}
