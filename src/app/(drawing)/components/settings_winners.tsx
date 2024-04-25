"use client";

import { Spinner } from "@/components/custom/spinner";
import { endpoints, getUrl } from "@/constants/api";
// import { useUser } from "@/hooks/use-user";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Settings } from "./settings";
import Tirage from "./tirage";

export function SettingsWinners() {
    // TODO: add validation
    // const { validateAccess } = useUser();
    // validateAccess("drawing")
    const router = useRouter();
    const { isLoading, isError } = useQuery({
        queryKey: ["drawing settings"],
        queryFn: async () => {
            const response = await axios.get(getUrl(endpoints.drawingSettings))
            router
            return response.data
        }
    });

    return (
        <div className="w-full h-full flex flex-row">
            {
                isLoading ?
                    <div className="flex w-full h-full justify-center items-center">
                        <Spinner size={"lg"} className="text-gray-500"/>
                    </div>:
                    false ?
                        <div className="w-full">
                            <Settings />
                        </div>:
                        <Tirage />
            }
        </div>
    );
}
