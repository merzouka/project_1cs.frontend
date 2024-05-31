"use client";
import { 
    TableHeader,
    Table,
    TableHead,
    TableRow,
    TableBody,
} from "@/components/ui/table";
import { useToast } from "@/components/ui/use-toast";
import { AxiosInstance } from "@/config/axios";
import { endpoints } from "@/constants/endpoints";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { ErrorDisplay } from "@/app/components/error-display";
import { UserRow, User } from "./user-row";
import { Role } from "@/stores/user-store";

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
            try {
                const data: User[] = [
                    {
                        "id": 1,
                        "firstName": "Ethan",
                        "lastName": "Garcia",
                        "email": "email1@example.com",
                        "role": Role.admin,
                        "provinces": [],
                        "cities": []
                    },
                    {
                        "id": 2,
                        "firstName": "Mia",
                        "lastName": "Rodriguez",
                        "email": "email2@example.com",
                        "role": Role.user,
                        "provinces": [],
                        "cities": []
                    },
                    {
                        "id": 3,
                        "firstName": "Lucas",
                        "lastName": "Johnson",
                        "email": "email3@example.com",
                        "role": undefined, // No role assigned
                        "provinces": [],
                        "cities": []
                    },
                    {
                        "id": 4,
                        "firstName": "Aaliyah",
                        "lastName": "Williams",
                        "email": "email4@example.com",
                        "role": Role.superAdmin,
                        "provinces": [],
                        "cities": []
                    },
                    {
                        "id": 5,
                        "firstName": "Mason",
                        "lastName": "Jones",
                        "email": "email5@example.com",
                        "role": undefined, // No role assigned
                        "provinces": [],
                        "cities": []
                    },
                    {
                        "id": 6,
                        "firstName": "Evelyn",
                        "lastName": "Miller",
                        "email": "email6@example.com",
                        "role": Role.doctor,
                        "provinces": [],
                        "cities": []
                    },
                    {
                        "id": 7,
                        "firstName": "Olivia",
                        "lastName": "Davis",
                        "email": "email7@example.com",
                        "role": undefined,
                        "provinces": [],
                        "cities": []
                    },
                    {
                        "id": 8,
                        "firstName": "William",
                        "lastName": "Brown",
                        "email": "email8@example.com",
                        "role": Role.paymentManager,
                        "provinces": [],
                        "cities": []
                    },
                    {
                        "id": 9,
                        "firstName": "Isabella",
                        "lastName": "Lewis",
                        "email": "email9@example.com",
                        "role": undefined,
                        "provinces": [],
                        "cities": []
                    },
                    {
                        "id": 10,
                        "firstName": "Benjamin",
                        "lastName": "Clark",
                        "email": "email10@example.com",
                        "role": Role.haaj,
                        "provinces": [],
                        "cities": []
                    }
                ];
                return data;
                // const response = AxiosInstance.get(endpoints.users);
                // return response;
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
                    {
                        data?.map((user, index) => <UserRow key={user.id} info={user} index={index}/>)
                    }
                </TableBody>
            </Table>
            {isError && 
                <ErrorDisplay text={"Nous ne pouvons pas récupérer les utilisateurs."} />
            }
        </div>
    );
}
