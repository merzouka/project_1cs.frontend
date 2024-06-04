import { Role } from "@/stores/user-store";
import { User } from "./user-row";

const result: User[] = [
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

interface PaginatedResponse {
    next: string | null;
    previous: string | null;
    results: User[];
}

const data: PaginatedResponse = {
    next: "#",
    previous: null,
    results: result,
}

export default data;
