import { cn } from "@/lib/utils";
import { icons } from "@/constants/icons";

const sizes = {
    xs: {
        icon: "size-14",
        text: "text-sm",
    },
    sm: {
        icon: "size-24",
        text: "text-xl",
    },
    md: {
        icon: "size-32",
        text: "text-2xl",
    },
    l: {
        icon: "size-40",
        text: "text-3xl",
    },
    xl: {
        icon: "size-56",
        text: "text-4xl",
    },
    "2xl": {
        icon: "size-80",
        text: "text-6xl",
    },
    "3xl": {
        icon: "size-96",
        text: "text-7xl",
    },
};

export const ErrorDisplay = (
    {
        size = "md",        
        displayText = true,
        text,
        styles
    }: {
        size?: keyof typeof sizes;
        displayText?: boolean;
        text?: string;
        styles?: {
            wrapper?: string;
            icon?: string;
            text?: string;
        }
    }
) => {
    return (
        <div className={cn(
            "w-full flex-grow items-center justify-center flex",
            styles?.wrapper,
        )}>
            <div className="flex flex-col items-center justify-center md:gap-y-5 gap-y-2">
                {icons.caution(cn(
                    `${sizes[size].icon} text-slate-400`,
                    styles?.icon,
                ))}
                {
                    displayText && 
                        <span className={cn(
                            `text-slate-400 ${sizes[size].text} font-bold text-center text-wrap`,
                            styles?.text,
                        )}>
                            {(displayText && text) || "Nous ne pouvons pas récupérer les pèlerins."}
                        </span>
                }
            </div>
        </div>
    );
}
