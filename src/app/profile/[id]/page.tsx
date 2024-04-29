"use client";

import { getUrl } from "@/constants/api";
import { endpoints } from "@/constants/endpoints";
import { useUser } from "@/hooks/use-user";
import { Pages } from "@/constants/pages";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ProfilePage({
    params
    }: {
        params: {
            id: number;
        }
    }) {
    const { isLoggedIn, validateAccess } = useUser();
    validateAccess(Pages.profile);
    const router = useRouter();
    if (!isLoggedIn) {
        router.push("/login");
    }
    const [isFetching, setIsFetching] = useState(false);
    const { data } = useQuery({
        queryKey: ["logout"],
        enabled: isFetching,
        retry: 0,
        queryFn: async () => {
            try {
                setIsFetching(false);
                const response = await axios.post(getUrl(endpoints.logout), {}, {
                    xsrfCookieName: "csrftoken",
                    xsrfHeaderName: "X-CSRFToken",
                    withXSRFToken: true,
                });
                console.log(response);
                return response.data;
            } catch (error) {
                console.log(error);
                throw new Error(`${error}`);
            }
        }
    });
    return (
        <div>
            <p>{params.id}</p> 
            <p key={"hello"}>{data}</p>
            <button onClick={() => setIsFetching(true)}>
                Logout
            </button>
        </div>
    );
}
