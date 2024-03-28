import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function BottomMessage({
    action,
    prompt,
    link,
    className,
    params,
    }: {
        action: string;
        prompt: string;
        link: string;
        className?: {
            wrapper?: string,
            button?: string,
            link?: string,
        },
        params?: URLSearchParams,
    }) {
    return (
        <p className={cn(
            "text-xs flex items-center justify-center flex-wrap",
            className?.wrapper
        )}>
            {prompt}
            <Button 
                tabIndex={-1} 
                variant="link" 
                className={cn(
                    "font-bold text-black text-base",
                    className?.button,
                )}>
                <Link className={cn(
                    "text-xs" 
                )} href={`${link}?${params?.toString()}`}>
                    {action}
                </Link>
            </Button>
        </p>
    );
}
