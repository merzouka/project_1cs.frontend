import { z } from "zod";

export const loginFormSchema = z.object({
    email: z.string().email({ message: "Adresse e-mail invalide." }),
    password: z.string()
    .min(8, { message: "8 caractères minimum requis." })
    .regex(new RegExp(
        /(?=[A-Z])/
    ), { message: "Mot de passe doit contenir une lettre majuscule." })
    .regex(new RegExp(
        /(?=[a-z])/
    ), { message: "Mot de passe doit contenir une lettre miniscule" })
    .regex(new RegExp(
        /(?=[0-9])/
    ), { message: "Mot de passe doit contenir un chiffre." }),
    persist: z.boolean().default(false),
});

// const phoneRegex = new RegExp(
//   /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
// );
export const registerSchema1 = z.object({
    email: z.string().email({ message: "Adresse e-mail invalide." }),
    phone: z.string({
        required_error: "Requis",
    }),
});

export const registerSchema2 = z.object({
    password: z.string()
    .min(8, { message: "8 caractères minimum requis." })
    .regex(new RegExp(
        /(?=[A-Z])/
    ), { message: "Mot de passe doit contenir une lettre majuscule." })
    .regex(new RegExp(
        /(?=[a-z])/
    ), { message: "Mot de passe doit contenir une lettre miniscule" })
    .regex(new RegExp(
        /(?=[0-9])/
    ), { message: "Mot de passe doit contenir un chiffre." }),
    confirm: z.string(),
}).refine((data) => data.confirm == data.password, {
    path: ["confirm"],
    message: "La confirmation doit correspondre au mot de passe.",
});

export const registerSchema3 = z.object({
    firstname: z.string().regex(new RegExp(/^[a-zA-Z]+$/), {
        message: "Veuillez saisir un nom valide"
    }),
    lastname: z.string().regex(new RegExp(/^[a-zA-Z]+$/), {
        message: "Veuillez saisir un nom valide"
    }),
    dateOfBirth: z.date({
        required_error: "Requis",
    }).optional(),
    gender: z.enum(["male", "female"], {
        required_error: "Requis",
    }),
});

export const registerSchema4 = z.object({
    province: z.string({
        required_error: "Requis",
    }),
    city: z.string({
        required_error: "Requis",
    }),
});

export const resetPasswordSchema = z.object({
    password: z.string(),
    confirm: z.string(),
}).refine((data) => data.confirm == data.password, {
    path: ["confirm"],
    message: "La confirmation doit correspondre au mot de passe.",
});

export const resetPasswordEmailSchema = z.object({
    email: z.string().email({ message: "Veuillez saisir une adresse e-mail valide." }),
});
