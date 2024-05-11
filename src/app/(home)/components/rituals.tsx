import Image, { StaticImageData } from "next/image";
import ihram from "../../../../public/home/ihram.png";
import ifadaa from "../../../../public/home/tawaf.png";
import saii from "../../../../public/home/saii.png";
import waqf from "../../../../public/home/waqf.png";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface Ritual {
    id: string,
    title: string,
    paragraph: string,
    image: StaticImageData,
    alt: string,
}

const rituals: Ritual[] = [
    {
        id: "ihram",
        title: "Iharm",
        paragraph: "État de sacralisation, l’ihram doit se faire avant de pénétrer dans le territoire sacré. Sacralisation morale : les hommes et les femmes expriment, selon des formulations précises, leur intention d’accomplir le Hajj. Sacralisation corporelle : les hommes s’habillent d’un pagne non cousu et d’un morceau d’étoffe qui recouvre les épaules, et portent des sandales. Les femmes gardent leurs habits et se découvrent le visage et les mains.",
        image: ihram,
        alt: "ihram image",
    },
    {
        id: "ifada",
        title: "Al-Ifâda",
        paragraph: "Le Tawâf Al-Ifâda accompli après la présence à 'Arafât, circumambulation de 7 tours autour de la Ka‘ba, en commençant à partir de la pierre noire ou à partir d’une ligne rouge tracée sur le sol, et dans le sens inverse des aiguilles d’une montre.",
        image: ifadaa,
        alt: "ifadaa image",
    },
    {
        id: "saii",
        title: "Saii",
        paragraph: "Procession qui consiste à accomplir 7 fois le parcours entre deux collines situées à l’intérieur de la Mecque (As-Safâ et Al-Marwâ), en commençant par As-Safâ. La longueur du parcours est de l’ordre de 395 m.",
        image: saii,
        alt: "saii image",
    },
    {
        id: "waqfa",
        title: "Waqfat Arafah",
        paragraph: "Obligatoirement accompli le 9ème jour de Dhû-l-Hijja jusqu'à l'aube du jour de l'Aïd, c’est le plus grand pilier du Hajj. Durant cette journée de ferveur ultime, au pied du mont de la Miséricorde, située dans la plaine d'Arafât, les pèlerins implorent Dieu, Lui demandent pardon, miséricorde et protection.",
        image: waqf,
        alt: "waqfa image",
    },
];

export const Rituals = () => {
    const [currentRitual, setCurrentRitual] = useState(0);
    useEffect(() => {
        const interval =  setInterval(() => {
            setCurrentRitual((current) => (current + 1) % rituals.length);
        }, 30 * 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="">
            <p className="text-center mb-3 md:mb-6">
                {"Les bénéfices du Hajj sont multiples et de dimensions tant confessionnelles que personnelles, sociétales, morales et pédagogiques. Le Hajj est l’un des cinq piliers de l’Islam et a été prescrit pendant l’an 9 de l’Hégire."}
            </p>
            <div className="flex h-52">
                {
                    rituals.map((ritual, i) => (
                         <div className={cn(
                            "h-full flex-grow relative ritual flex",
                            currentRitual == i && "flex-grow-[3]"
                        )}>
                            <Image 
                                src={ritual.image}
                                alt={ritual.alt}
                                className="object-cover rounded-xl h-full"
                                sizes="(max-width: 768px) 50vw, 100vw"
                            />
                            {
                                currentRitual == i &&
                                    
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

