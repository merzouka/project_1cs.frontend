"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { StaticImageData } from "next/image";
import ifadaa from "../../../../public/home/ifadaa-guide.webp";
import ihram from "../../../../public/home/ihram-guide.jpg";
import ramii from "../../../../public/home/ramii-guide.png";
import saii from "../../../../public/home/saii-guide.jpg";
import tarwia from "../../../../public/home/tarwia-guide.jpeg";
import tawaf from "../../../../public/home/tawaf-guide.jpg";
import wadaa from "../../../../public/home/wadaa-guide.jpg";
import waqf from "../../../../public/home/waqf-guide.jpg";
import zabh from "../../../../public/home/zabh-guide.jpg";
import { MdArrowOutward } from "react-icons/md";
import { Element, Scroller } from "./scroller";
import { useMemo } from "react";


interface Step {
    num: number;
    id: string;
    title: string;
    brief: string;
    image: StaticImageData;
}

const steps: Step[] = [
    {
        id: "ihram",
        title: "ihram",
        num: 0,
        brief: "Pour le Hajj ou la Omra, l'Ihram est un état sacré atteint par l'intention et un vêtement spécifique. Il interdit certaines actions comme se raser ou porter du parfum. L'avis sur la récitation de la talbiyah est partagé, mais la plupart la considèrent recommandée.",
        image: ihram 
    },
    {
        id: "tawaf",
        title: "tawaf al qudum",
        num: 1,
        brief: "Arrivée à La Mecque, le Tawaf al-Qudum, une marche rituelle autour de la Kaaba, est la première Sunna du Hajj. Il marque le début du pèlerinage.",
        image: tawaf 
    },
    {
        id: "saii",
        title: "saii",
        brief: "C'est le Jour du Sacrifice, après le Tawaf de Visite et non le Tawaf d'Arrivée, que débute le Sa'i. Pour l'entamer, le pèlerin gravit le mont Safa, se dirigeant vers la Kaaba.",
        num: 2,
        image: saii 
    },
    {
        id: "tarwia",
        title: "tarwia",
        brief: "Le 8ème de Dhul Hijjah, jour de Tarwiyah, les pèlerins quittent La Mecque pour Mina. Prières, nuit sur place, puis départ à pied pour Arafat au lever du soleil : une préparation pour le moment fort du Hajj.",
        num: 3,
        image: tarwia 
    },
    {
        id: "waqf",
        title: "waqf",
        brief: "Premier pilier du Hajj, le stationnement à Arafat est indispensable à sa validité, bien qu'il figure en cinquième position.  Cette obligation est confirmée par les hadiths et l'accord des quatre imams.",
        num: 4,
        image: waqf 
    },
    {
        id: "zabh",
        title: "zabh",
        brief: "Hadi, le sacrifice animalier à Hajj, peut être volontaire ou lié aux pèlerinages tamattu et qiran, ou encore compensatoire. Son timing dépend du motif du sacrifice.",
        num: 5,
        image: zabh 
    },
    {
        id: "ifadaa",
        title: "ifadaa",
        brief: "Pilier du Hajj, le Tawaf al-Ifadah (circumambulation de la Kaaba) se fait en sept tours selon la majorité, quatre pour les Hanafis.",
        num: 6,
        image: ifadaa 
    },
    {
        id: "ramii",
        title: "ramii",
        brief: "Obligation du Hajj, le jet des pierres (Ramy al-Jamaraat) vise trois stèles à sept reprises chacune. Son omission requiert un sacrifice animal en expiation.",
        num: 7,
        image: ramii 
    },
    {
        id: "wadaa",
        title: "tawaf al wadaa",
        brief: "Circumambulation d'adieu (Tawaf al-Wada'), wajib, intervient après tous les rites du Hajj.  Tout Tawaf suivant le circumambulation de visite (Tawaf al-Ziarah) peut le remplacer.",
        num: 8,
        image: wadaa 
    },
]


const StepCard = ({
    step
}: {
        step: Step;
    }) => {
    // TODO: make link
    return (
        <div 
            key={step.id}
            className={cn(
                "rounded-2xl relative h-full flex-grow group"
            )}
        >
            <Image 
                alt="title"
                src={step.image}
                fill
                className="object-cover rounded-2xl z-[-3]"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 70vw, 100vw"
            />
            <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-t from-black/65 group-hover:bg-black/35 rounded-2xl z-[-2] transition-all group-hover:transition-all"></div>
            <div className={cn(
                "absolute top-0 right-0 bottom-0 left-0 flex justify-end items-center flex-col p-4",
            )}>
                <MdArrowOutward className={cn(
                    "absolute top-5 right-5 group-hover:text-white/100 transition-all", 
                    "group-hover:transition-all size-6 text-white/0",
                    "-translate-x-1/2 translate-y-1/2 group-hover:translate-x-0 group-hover:translate-y-0",
                )}/>
                <div>
                    <h3 className="font-bold text-xl mb-3 text-wrap capitalize text-white transition-all group-hover:transition-all">{step.title}</h3>
                    <p className="text-wrap text-xs text-white transition-all group-hover:transition-all">{step.brief}</p>
                </div>
            </div>
        </div>
    );
}

export const Guide = () => {
    const elements: Element[] = useMemo(() => steps.map(step => ({
        id: step.id,
        element: <StepCard key={step.id} step={step} />
    })), [])
    return (
        <Scroller elements={elements} perPage={3}/>
    );
}
