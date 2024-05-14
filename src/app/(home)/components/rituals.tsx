"use client";
import Image, { StaticImageData } from "next/image";
import ihram from "../../../../public/home/ihram.png";
import ifadaa from "../../../../public/home/tawaf.jpg";
import saii from "../../../../public/home/saii.jpg";
import waqf from "../../../../public/home/waqf.jpg";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { fade } from "@/constants/animations";

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
    const [hovered, setHovered] = useState<number | undefined>(undefined);

    const cycleTime = 5 * 1000;
    const interval = useRef<NodeJS.Timeout | undefined>(undefined);
    const mouseEnterEventListener = useCallback((ritual: number) => {
        clearInterval(interval.current);
        setCurrentRitual(ritual);
        setHovered(ritual);
    }, []);

    const mouseLeaveEventListener = useCallback(() => {
        setHovered(undefined);
        interval.current = setInterval(() => {
            setCurrentRitual((current) => (current + 1) % rituals.length);
        }, cycleTime);
    }, [])

    useEffect(() => {
        interval.current = setInterval(
            () => setCurrentRitual((ritual) => (ritual + 1) % rituals.length),
             cycleTime
        );
        document.querySelectorAll(".ritual").forEach((ritual, i) => {
            ritual.addEventListener("mouseenter", () => mouseEnterEventListener(i));
            ritual.addEventListener("mouseleave", mouseLeaveEventListener);
        })
        return () => {
            clearInterval(interval.current);
            document.querySelectorAll(".ritual").forEach((ritual, i) => {
                ritual.removeEventListener("mouseenter", () => mouseEnterEventListener(i));
                ritual.removeEventListener("mouseleave", mouseLeaveEventListener);
            });
        };
    }, []);

    return (
        <div className="w-full flex flex-col items-center">
            <p className="text-center mb-3 md:mb-6 max-w-[66ch]">
                {"Les bénéfices du Hajj sont multiples et de dimensions tant confessionnelles que personnelles, sociétales, morales et pédagogiques. Le Hajj est l’un des cinq piliers de l’Islam et a été prescrit pendant l’an 9 de l’Hégire."}
            </p>
            <div className="flex h-96 gap-x-3 w-full">
                {
                    rituals.map((ritual, i) => (
                        <motion.div 
                            key={ritual.id}
                            className={cn(
                                "h-full flex-grow relative ritual flex flex-col group items-end justify-end p-3",
                                currentRitual == i && "flex-grow-[2]"
                            )}
                            layout
                        >
                            <div aria-hidden 
                                className={cn(
                                    "w-full h-full rounded-xl bg-gradient-to-t",
                                    "from-black/65 group-hover:from-black/85 absolute top-0 right-0 z-[-1]",
                                )}
                            ></div>
                            <Image 
                                src={ritual.image}
                                alt={ritual.alt}
                                fill
                                className="object-cover rounded-xl h-full z-[-2]"
                                sizes="(max-width: 768px) 50vw, 100vw"
                            />
                            <motion.div 
                                className="absolute top-0 right-0 left-0 bottom-0 flex flex-col items-center justify-end p-5"
                                layout
                            >
                                {
                                    currentRitual == i &&
                                        <motion.h3
                                            layout
                                            key="heading"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className={cn(
                                                "text-white w-full text-2xl font-bold capitalize relative top-0",
                                                "group-hover:mb-3"
                                            )}
                                        >
                                            {ritual.title}
                                        </motion.h3>
                                }
                                {
                                    hovered === i &&
                                        <motion.p
                                            key="paragraph"
                                            {...fade}
                                            transition={{ duration: 1.1 }}
                                            layout
                                            className="text-white w-full text-xs"
                                        >
                                            {ritual.paragraph}
                                        </motion.p>
                                }
                            </motion.div>
                        </motion.div>
                    ))
                }
            </div>
        </div>
    );
}

