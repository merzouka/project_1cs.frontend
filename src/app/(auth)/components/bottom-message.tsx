import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function BottomMessage({
    action,
    prompt,
    link,
    className,
    }: {
        action: string;
        prompt: string;
        link: string;
        className?: {
            wrapper?: string,
            button?: string,
            link?: string,
        }
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
                )} href={link}>
                    {action}
                </Link>
            </Button>
        </p>
    );
}
