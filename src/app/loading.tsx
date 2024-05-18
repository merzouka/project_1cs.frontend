import { BiLoaderAlt } from "react-icons/bi";
import Logo from "@/components/ui/logo";

export default function Loading() {
    return (
        <div className="w-dvw h-dvh flex justify-center items-center">
            <div className="flex flex-col gap-y-7 items-center justify-center">
                <Logo size="large" />
                <Spinner />
            </div>
        </div>
    );
}

function Spinner() {
    return (
        <BiLoaderAlt className="animate-spin size-10"/>
    );
}
