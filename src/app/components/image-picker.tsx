import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import { FaRegPenToSquare } from "react-icons/fa6";
import { icons } from "@/constants/icons";
import { cn } from "@/lib/utils";

export const ImagePicker  = ({ 
    defaultImage, 
    onChange,
    className,
}: {
        defaultImage?: string;
        onChange?: (image: File) => void;
        className?: string,
    }) => {
    const [imageSrc, setImageSrc] = useState<string | undefined>(defaultImage);
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
        <div className={cn(
            "rounded-3xl min-w-24 size-32 relative",
            className
        )}>
            {
                imageSrc ?
                    <Image
                        src={imageSrc}
                        alt="profile image"
                        fill
                        sizes="(max-width: 768px) 50vw, 40vw"
                        className="object-cover rounded-3xl"
                    />:
                    icons.upload("bg-slate-200 text-slate-300 size-full rounded-3xl")
        }
            <Button 
                size={"icon"} 
                onClick={handleImageChange}
                className="size-5 p-1 absolute bottom-0.5 right-0.5 rounded-l"
            >
                <FaRegPenToSquare className="size-4 text-white"/>
            </Button>
        </div>
    );
}
