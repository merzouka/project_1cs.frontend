import Image from "next/image";

export default function Logo() {
    return (

        <Image
            src="/logo.svg" 
            alt="our logo" 
            width={159} 
            height={126} />
    );
}
