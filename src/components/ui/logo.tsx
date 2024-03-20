import Image from "next/image";

const variants = {
    default: {
        width: 98,
        height: 90,
    },
    xs: {
        width: 49,
        height: 45,
    },
    small: {
        width: 78,
        height: 72,
    },
    medium: {
        width: 98,
        height: 90,
    },
    large: {
        width: 117,
        height: 108,
    },
    xl: {
        width: 147,
        height: 135,
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
