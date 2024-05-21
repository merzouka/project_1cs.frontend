import { useEffect, useRef, useState } from "react";
import { Counter } from "./counter";
import { Scroller } from "./scroller";
import { CardPopup } from "./card-popup";
import { Spinner } from "@/components/custom/spinner";
import { AnimatePresence, motion } from "framer-motion";

function pad(num: number, digits: number) {
    let result = "";
    for (let i = 0; i < digits - `${num}`.length; i++) {
        result += "0";
    }
    return result + `${num}`;
}

export const displayLoadingTime = 2 * 1000;

export const WinnerDisplay = ({
    chosen
}: {
        chosen: React.ReactNode[];
    }) => {
    return (
        <SimpleWinnerDisplay chosen={chosen} />
    );
}

const SimpleWinnerDisplay = ({ chosen }: { chosen: React.ReactNode[] }) => {
    const [showWinners, setShowWinners] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

    useEffect(() => {
        timeoutRef.current = setTimeout(() => {
            setShowWinners(true);
        }, displayLoadingTime);
        return () => {
            clearTimeout(timeoutRef.current);
            setShowWinners(false);
        }
    }, [])

    return (
        <>
            {

                !showWinners ?
                    <div className="w-6/12 h-5/12 bg-white rounded-2xl py-24 px-5 flex items-center justify-center">
                        <Spinner size={"xl"} text={"show"} direction={"col"} className="text-slate-500">
                            {"Chargement..."}
                        </Spinner>
                    </div>:
                    <CardPopup items={chosen}/>
            }
        </>
    )
}


const WinnerDisplayWithCount = ({
    scrollerItems,
    num,
    digits,
    chosen,
    updateNum,
    preResultAnimationDuration = 2,
}: {
        scrollerItems: React.ReactNode[][];
        num: number,
        digits: number,
        chosen: React.ReactNode[];
        updateNum: () => void;
        preResultAnimationDuration?: number;
    }) => {
    const [displayChosen, setDisplayChosen] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDisplayChosen(true);
            updateNum();
        }, preResultAnimationDuration * 1000);
        return () => {
            clearTimeout(timeout);
            setDisplayChosen(false);
        };
    }, [chosen, preResultAnimationDuration, updateNum]);

    return (
        <div className="w-full h-full">
            <div className="h-full flex flex-col items-center justify-start w-full">
                <div className="items-center justify-center flex">
                    <Counter num={pad(num, digits)} />
                </div>
                <div className="flex-grow max-h-12"></div>
                <div className=" w-full">
                    <AnimatePresence initial={true}>
                        {
                            !displayChosen ? 
                                <motion.div 
                                    initial={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: preResultAnimationDuration }}
                                    className="flex flex-col gap-y-2"
                                >
                                    {
                                        scrollerItems.map((items, i) => (
                                            <Scroller key={i} items={items} direction={i % 2 == 0 ? "left" : "right"}/>
                                        ))
                                    }
                                </motion.div>:
                                <CardPopup delay={0} items={chosen}/>
                        }
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
