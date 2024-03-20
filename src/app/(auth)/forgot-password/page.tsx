"use client";

import { useSearchParams } from "next/navigation";
import SideBanner from "@/app/(auth)/components/side-banner";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const emailSchema = z.object({
    email: z.string().email({ message: "Addresse email invalide" }),
})

export default function ForgotPassword() {
    const searchParams = useSearchParams();
    const email = searchParams.get("email") || "";

    const form = useForm<z.infer<typeof emailSchema>>({
        resolver: zodResolver(emailSchema),
        defaultValues: {
            email: email,
        }
    });

    function onSubmit(values: z.infer<typeof emailSchema>) {
    }

    return (
        <main className="grid grid-cols-1 md:grid-cols-2 place-items-center h-dvh p-3">
            <div className="
                flex jutify-center items-center
                h-full w-full">
                <div className="flex flex-col gap-y-10">
                </div>
            </div>
            <SideBanner />
        </main>
    );
}
