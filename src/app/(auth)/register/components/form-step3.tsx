import { z } from "zod";
import { registerSchema3 } from "../constants/types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { 
    Form,
    FormField,
    FormItem,
    FormControl,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { 
    Select,
    SelectTrigger,
    SelectItem,
    SelectGroup,
    SelectValue,
} from "@/components/ui/select";
import { SelectContent } from "@radix-ui/react-select";
import { 
    Popover,
    PopoverTrigger,
    PopoverContent,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar"
import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";

export default function FormStep3({ props }: { props: { next: () => void; previous: () => void } }) {
    const form = useForm<z.infer<typeof registerSchema3>>({
        resolver: zodResolver(registerSchema3),
        defaultValues: {

        }
    });

    function onSubmit(values: z.infer<typeof registerSchema3) {
        props.next();
        console.log(values);
    }

    function onDateInput(date: string) {

    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="">
                <FormField 
                    control={form.control}
                    name="firstname"
                    render={({ field }) => {
                        <FormItem>
                            <FormLabel>Nom*</FormLabel>
                            <FormControl>
                                <Input
                                    autoFocus
                                    className="bg-transparent border border-slate-400"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    }}
                />
                <FormField 
                    control={form.control}
                    name="lastname"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Pr&eacute;nom*</FormLabel>
                            <FormControl>
                                <Input
                                    autoFocus
                                    className="bg-transparent border border-slate-400"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage className="text-xs"/>
                        </FormItem>
                    )}
                />
                <FormField 
                    control={form.control}
                    name="dateOfBirth"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Date de naissance*</FormLabel>
                            <Popover>
                                <PopoverTrigger>
                                    <div className="flex gap-x-2 items-center">
                                        <CalendarIcon />
                                        <Input 
                                            placeholder={
                                                field.value ? format(field.value, "YYYY-MM-dd") : "Sélectionnez votre date de naissance"
                                            }
                                            onChange={(e) => onDateInput(e.target.value)}
                                        />
                                    </div>
                                </PopoverTrigger>
                            </Popover>
                            <FormControl>
                            </FormControl>
                            <FormMessage className="text-xs"/>
                        </FormItem>
                    )}
                />
                <FormField 
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Sexe*</FormLabel>
                            <FormControl>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Sélectionnez votre sexe"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="male">Male</SelectItem>
                                        <SelectItem value="female">Female</SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage className="text-xs"/>
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    );
}
