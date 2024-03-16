import Image from "next/image";

const variants = {
    default: {
        width: 159,
        height: 126,
    },
    xs: {
        width: 63,
        height: 50,
    },
    small: {
        width: 79,
        height: 63,
    },
    medium: {
        width: 159,
        height: 126,
    },
    large: {
        width: 206,
        height: 159,
    },
    xl: {
        width: 288,
        height: 222,
    },
}
interface LogoProps {
    size?: "xs" | "small" | "medium" | "large" | "xl",
    className?: string,
}

export default function Logo({ size, className }: LogoProps) {
    return (

        <Image
            className={className}
            src="/logo.svg" 
            alt="our logo" 
            width={variants[size || "default"].width}
            height={variants[size || "default"].height} />
    );
}
