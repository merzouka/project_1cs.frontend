"use client";
import { AUTH_ENDPOINT, BACKEND_URL } from "@/constants/apis";
import axios from "axios"

export enum Message {
    Success,
    Error,
}

export interface Response {
    type: Message,
    value: any,
}


interface LoginRequestBody {
    email: string,
    password: string,
}

export async function login(body: LoginRequestBody): Promise<Response> {
    const response = await axios.post(`${BACKEND_URL}${AUTH_ENDPOINT}/login`, body)
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

export async function register(body: RegisterRequestBody): Promise<Response> {
    try {
        const response = await axios.post(`${BACKEND_URL}${AUTH_ENDPOINT}/register`, body);
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

interface ResetPasswordRequestBody {
    id: number | string;
    email: string;
    newPassword: string;
}

export async function resetPassword(body: ResetPasswordRequestBody) {
    return await axios.post(`${BACKEND_URL}${AUTH_ENDPOINT}/reset-password`, body)
    .then(() => {
        return {
            type: Message.Success,
            value: "success",
        }
    })
    .catch((error) => {
        if (error.body) {
            return {
                type: Message.Error,
                value: "wrong credentials",
            };
        }
        return {
            type: Message.Error,
            value: "",
        }
    });
}

interface ForgotPassowrdRequestBody {
    email: string;
}

export async function forgotPassword(body: ForgotPassowrdRequestBody) {
    try {
        const response = await axios.post(`${BACKEND_URL}${AUTH_ENDPOINT}/reset-password-email`, body);
        return {
            type: Message.Success,
            value: response.data.message,
        };
    } catch (error) {
        return {
            type: Message.Error,
            value: "",
        }
    }
}

interface EmailVerificationRequestBody {
    id: string | number;
}

export async function verifyEmail(body: EmailVerificationRequestBody) {
    try {
        const response = await axios.post(`${BACKEND_URL}${AUTH_ENDPOINT}/verify-email`, body);
        return {
            type: Message.Success,
            value: response.data.message,
        }
    } catch (error) {
        return {
            type: Message.Error,
            value: "",
        }
    }
}
