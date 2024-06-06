import styles from "./scroller.module.css";
import { motion } from "framer-motion";

export const Scroller = ({
    items,
    direction
}: {
        items: React.ReactNode[];
        direction: "left" | "right";
    }) => {
    items = [...items, ...items];
    return (
        <motion.div
            initial={{ x: direction == "left" ? "50%" : "-100%" }}
            animate={{ x: 0 }}
            transition={{ stiffness: 100, duration: 0.8 }}
        >
            <div className="relative overflow-x-clip">
                <div className="invisible">{items[0]}</div>
                <div className={`absolute min-w-[200dvw] flex justify-between items-center w-fit h-fit gap-x-2 top-0 left-0 -translate-x-1/2 ${styles.scroller} ${direction == "left" ? styles.scrollLeft : styles.scrollRight}`} style={{ animationDuration: "9s", }}>
                    {...items}
                    <div className="h-full"></div>
                </div>
            </div>
        </motion.div>
    );
}
