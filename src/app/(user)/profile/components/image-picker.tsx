import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import { FaRegPenToSquare } from "react-icons/fa6";

export const ImagePicker  = ({ 
    defaultImage, 
    onChange 
}: {
        defaultImage: string;
        onChange?: (image: File) => void;
    }) => {
    const [imageSrc, setImageSrc] = useState<string>(defaultImage);
    function handleImageChange() {
        const img = document.createElement("input");
        img.type = "file";
        img.addEventListener("change", (e) => {
            /* @ts-ignore */
            if (e.target.files) {
                /* @ts-ignore */
                setImageSrc(URL.createObjectURL(e.target.files[0]))
                /* @ts-ignore */
                onChange(e.target.files[0])
            }
        });
        img.click();
    }

    return (
        <div className="rounded-full min-w-24 size-44 md:size-80 relative rotate-45">
            <Image
                src={imageSrc}
                alt="profile image"
                fill
                sizes="(max-width: 768px) 50vw, 40vw"
                className="object-cover -rotate-45 rounded-full"
            />
            <Button 
                size={"icon"} 
                onClick={handleImageChange}
                className="size-5 p-1 absolute bottom-1/2 right-0 translate-x-1/2 
                -translate-y-1/2 rounded-l -rotate-45"
            >
            </Button>
        </div>
    );
}
