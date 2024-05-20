import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface Keyframe {
    initial: string,
    animate: string,
}

function reverse(str: string) {
    let result = "";
    for (const char of str) {
        result = char + result;
    }
    return result
}

function calcDigitsPositions(num: string): string[] {
    let result: string[] = [];
    for (const digit of reverse(num)) {
        result.push(`${Number(digit) * 10}%`)
    }
    return result;
}

function calcKeyframes(prev: string, current: string): Keyframe[] {
    const prevPositions = calcDigitsPositions(prev);
    const currentPositions = calcDigitsPositions(current);
    const result: Keyframe[] = [];
    for (let i = 0; i < prevPositions.length; i++) {
        result.push({
            initial: prevPositions[i],
            animate: currentPositions[i],
        })
    }
    return result;
}

export const Counter = ({ num, className, delay }: { num: string, className?: string, delay?: number }) => {
    const [old, setOld] = useState<string>(Array(num.length).fill(0).join(""));
    const keyframes = useMemo(() => {
        setOld(num);
        const tmp = num.length > old.length ? `0${old}` : old;
        return calcKeyframes(tmp, num);
    }, [num]);
    const digits = reverse(num).split("");
    return (
        <div className={cn(
            "flex w-fit h-fit text-[11rem] font-bold",
            className,
        )}>
            {
                digits.map((_, i) => (
                    <div className="text-transparent relative overflow-y-clip" key={`div${i}`}>
                        0
                        <AnimatePresence initial={false}>
                            <motion.div
                                initial={{ y: keyframes[i].initial }}
                                animate={{ y: keyframes[i].animate }}
                                transition={{ stiffness: 100, delay: delay || 0, }}
                                className="absolute left-0 bottom-0 flex flex-col text-white"
                                key={i}
                            >
                                {
                                    Array(10).fill(0).map((_, j) => <span key={`${i}${j}`}>{10 - j - 1}</span>)
                                }
                            </motion.div>
                        </AnimatePresence>
                    </div>
                )).reverse()
            }
        </div>
    );
}
