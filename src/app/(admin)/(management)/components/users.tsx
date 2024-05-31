"use client";
import { 
    TableHeader,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
} from "@/components/ui/table";
import { useToast } from "@/components/ui/use-toast";
import { AxiosInstance } from "@/config/axios";
import { endpoints } from "@/constants/endpoints";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { ErrorDisplay } from "@/app/components/error-display";

export const Users = (
    {
        query
    }: {
        query?: string;
    }
) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ["users", query],
        queryFn: async () => {
                throw new Error("connetion erorr");
            try {
                // const response = AxiosInstance.get(endpoints.users);
                // return response;
                return "hello";
            } catch (error) {
                throw new Error("connetion erorr");
            }
        },
    });

    const { toast } = useToast();
    useEffect(() => {
        if (isError) {
            toast({
                title: "Erreur de connexion",
                description: "Nous ne pouvons pas récupérer le utilisateurs",
                variant: "destructive",
            });
        }
    }, [isError]);

    return (
        <div className="p-3 border border-slate-100 rounded-xl flex-grow flex flex-col items-center justify-between">
            <Table className="h-full">
                <TableHeader>
                    <TableRow>
                        <TableHead>{"N"}</TableHead>
                        <TableHead>{"Nom"}</TableHead>
                        <TableHead>{"Prénom"}</TableHead>
                        <TableHead>{"Email"}</TableHead>
                        <TableHead>{"Role"}</TableHead>
                        <TableHead>{"Wilaya"}</TableHead>
                        <TableHead>{"Communes"}</TableHead>
                        <TableHead>{"Action"}</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                </TableBody>
            </Table>
            {isError && 
                <ErrorDisplay text={"Nous ne pouvons pas récupérer les utilisateurs."} />
            }
        </div>
    );
}
