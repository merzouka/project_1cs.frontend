import { rokkitt } from "@/constants/fonts";
import { cn } from "@/lib/utils";

export const SectionWrapper = ({
    title,
    children,
    styles,
}:
    {
        title: string,
        children: React.ReactNode,
        styles?: {
            separator?: string;
            container?: string;
        }
    }) => {
    return (
        <div className={cn(
            "flex flex-col justify-center items-center w-full h-fit px-3 md:px-20 mb-10 md:mb-40",
            styles?.container,
        )}>
            <h2 className={cn(
                "text-3xl md:text-4xl font-bold capitalize mb-2 md:mb-5 text-wrap text-center",
                rokkitt.className,
            )}>
                {title}
            </h2>
            <div className={cn(
                "hidden md:block mb-5 bg-orange-400 w-36 h-0.5",
                styles?.separator,
            )}></div>
            {children}
        </div>
    );
}
