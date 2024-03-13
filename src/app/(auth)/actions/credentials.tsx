"use client";
import { AUTH_ENDPOINT, BACKEND_URL } from "@/constants/apis";
import axios from "axios"
import { z } from "zod";
import { loginFormSchema } from "../register/constants/types";

export enum Message {
    Success,
    Error,
}

export interface Response {
    type: Message,
    value: any,
}

interface RegisterRequestBody {
    email: string,
    phone: string,
    password: string,
    firstname: string,
    lastname: string,
    dateOfBirth: Date,
    gender: string,
    province: string,
    city: string,
}

export async function login(values: z.infer<typeof loginFormSchema>): Promise<Response> {
    const response = await axios.post(`${BACKEND_URL}${AUTH_ENDPOINT}/login`, values)
        .then((response) => {
            const id = response.data.id;
            return {
                type: Message.Success,
                value: id,
            };
        })
        .catch((error) => {
            if (error.response) {
                return {
                    type: Message.Error,
                    value: error.response.message,
                };
            }

            return {
                type: Message.Error,
                value: "",
            }
        });
    return response;
}

export async function register(fields: RegisterRequestBody): Promise<Response> {
    try {
        const response = await axios.post(`${BACKEND_URL}${AUTH_ENDPOINT}/register`, fields);
        return {
            type: Message.Success,
            value: response.data.message,
        };
    } catch (error) {
        return {
            type: Message.Error,
            value: "",
        };
    }
}
