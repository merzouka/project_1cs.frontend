import { motion } from "framer-motion";

export const CardPopup = ({
    items,
    delay,
    duration = 0.1,
}: {
        items: React.ReactNode[];
        delay?: number;
        duration?: number;
    }) => {
    return (
        <motion.div 
            exit={{ opacity: 0 }}
            className="flex gap-x-2 items-center justify-center"
        >
            {
                items.map((item, i) => (
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: (delay || 0) + i * duration }}
                        layout
                    >
                        {item}
                    </motion.div>
                ))
            }
        </motion.div>
    );
}
