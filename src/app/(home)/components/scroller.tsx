import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import {
    Carousel,
    CarouselItem,
    CarouselContent,
    type CarouselApi,
} from "@/components/ui/carousel";

export interface Element {
    id: string;
    element: React.ReactNode;
}

export const Scroller = ({
    elements,
    perPage,
}: {
        elements: Element[];
        perPage: number;
    }) => {
    // constants
    const numPages = Math.ceil(elements.length / perPage);
    const scrollCooldown = 10 * 1000;

    const [current, setCurrent] = useState(0);
    const [api, setApi] = useState<CarouselApi>();

    const scrollIntervalRef = useRef<NodeJS.Timeout>();
    let setScrollInterval = useCallback(() => {
        scrollIntervalRef.current = setTimeout(() => {
            setCurrent((current) => (current + 1) % numPages);
            api?.scrollNext();
        }, scrollCooldown);
    }, [api, setCurrent, current]);
    let removeScrollInterval = useCallback(() => {
        if (scrollIntervalRef.current) clearTimeout(scrollIntervalRef.current);
    } , []);

    useEffect(() => {
        scrollIntervalRef.current = setTimeout(() => {
            setCurrent(1);
            api?.scrollNext();
        }, scrollCooldown)
        api?.on("settle", () => setScrollInterval());
        api?.on("select", () => removeScrollInterval());
        return () => {
            clearInterval(scrollIntervalRef.current);
            api?.off("settle", setScrollInterval);
            api?.off("select", removeScrollInterval);
        }
    }, [setCurrent, api]);

    function onSlideSelect(slide: number) {
        api?.scrollTo(slide);
        setCurrent(slide);
    }

    return (
        <div className="flex flex-col gap-y-9 items-center justify-center w-full">
            <Carousel
                setApi={setApi}
                className="w-full"
                opts={{ loop: true }}
            >
                <CarouselContent className="h-56 w-full">
                    {
                        Array.from({ length: numPages }).map((_, i) => (
                            <CarouselItem key={i} className="w-full h-full flex gap-x-5 items-center justify-center">
                                {
                                    Array.from({ length: Math.min(perPage, elements.length - (i * perPage)) }).map((_, j) => {
                                        const element = elements[i * perPage + j];
                                        return element.element;
                                    })
                                }
                            </CarouselItem>
                            
                        ))
                    }
                </CarouselContent>
            </Carousel>
            <ScrollerIndicator dots={numPages} current={current} setNumber={onSlideSelect} />
        </div>
    );
}

export const ScrollerIndicator = ({
    dots, current, setNumber
}: {
        dots: number,
        current: number,
        setNumber: (i: number) => void,
    }) => {
    return (
        <div className="flex gap-x-2 items-center justify-center">
            {Array(dots).fill(null).map((_, i) => (
                <motion.button 
                    layout
                    key={i}
                    className={cn(
                    "rounded-full bg-gray-500 size-3",
                    current == i && "bg-orange-400 w-9"
                )} onClick={() => setNumber(i)}></motion.button>
            ))}
        </div>
    );
}
