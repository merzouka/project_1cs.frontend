import { VariantProps, cva } from "class-variance-authority";
import { Loader } from "lucide-react";

const vary = cva(
    "flex [&>svg]:animate-spin justify-center items-center [&>p]:font-bold", 
    {
        variants: {
            size: {
                xs: "[&>svg]:w-3 [&>svg]:h-3 [&>p]:text-xs gap-1",
                sm: "[&>svg]:w-5 [&>svg]:h-5 [&>p]:text-sm gap-3",
                md: "[&>svg]:w-9 [&>svg]:h-9 [&>p]:text-lg gap-5",
                lg: "[&>svg]:w-14 [&>svg]:h-14 [&>p]:text-2xl gap-9",
                xl: "[&>svg]:w-24 [&>svg]:h-24 [&>p]:text-3xl gap-11",
                "2xl": "[&>svg]:w-36 [&>svg]:h-36 [&>p]:text-5xl gap-14",
            },
            text: {
                hide: "[&>p]:hidden",
                show: "[&>p]:block",
            },
            direction: {
                col: "flex-col",
                row: "flex-row",
            }
        },
        defaultVariants: {
            size: "md",
            text: "hide",
            direction: "col",
        }
    }
);

export function Spinner({
        children,
        text,
        direction,
        size,
        className,
    }: {
        children?: React.ReactNode;
        className?: string,
    } & VariantProps<typeof vary>) {
    return (
        <div className={vary({ size, text, direction, className })}>
            <Loader />
            <p>{children || "Loading..."}</p>
        </div>
    );
}
