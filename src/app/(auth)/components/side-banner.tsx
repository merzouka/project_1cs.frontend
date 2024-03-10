import Image from "next/image";

export default function SideBanner() {
    return (
        <div className="
            hidden lg:block rounded-lg relative |
            h-full w-full
            ">
            <Image className="object-cover object-center rounded-2xl" fill
                src="/auth/kaaba.jpg" 
                alt="an image of the kaaba" 
            />
        </div>
    );
}
