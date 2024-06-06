import Image from "next/image";
import kaaba from "@/../public/auth/kaaba.jpg";

export default function SideBanner() {
    return (
        <div className="
            z-[99]
            hidden lg:block rounded-lg relative |
            h-full w-full
            ">
            <Image className="object-cover object-center rounded-2xl" fill
                srcSet="(min-width: 808px) 50vw, 100vw"
                src={kaaba}
                alt="an image of the kaaba" 
            />
        </div>
    );
}
