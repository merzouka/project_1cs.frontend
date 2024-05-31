import { Role } from "@/stores/user-store";

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    role: Role;
    province: number;
    city: number;
}

export const User = (
    {
        info
    }: {
        info: User;
    }
) => {
    return (
        <div></div>
    );
}
