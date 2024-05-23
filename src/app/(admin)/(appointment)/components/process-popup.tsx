import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ProcessDisplay } from "./process-display";
import { ProcessContainer } from "./process-container";

export const ProcessPopup = () => {
    const [open, setOpen] = useState(false);
    const [processShowing, setProcessShowing] = useState(true);
    const [pings, setPings] = useState(0);

    return (
        <AnimatePresence initial={true}>
            {
                open &&
                    <motion.div 
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        className="flex flex-col p-2 absolute bottom-0 right-0"
                    >
                        <ProcessContainer
                            onClose={() => setOpen(false)}
                            onMinimizeChange={(state) => setProcessShowing(!state)}
                            title="Requests"
                            pingCount={pings}
                        >
                            <AnimatePresence initial={true}>
                                {
                                    processShowing &&
                                        <motion.div
                                            initial={{ flexGrow: 0 }}
                                            animate={{ flexGrow: 1 }}
                                            exit={{ flexGrow: 0 }}
                                        >
                                            <ProcessDisplay 
                                                processes={[]}
                                            />
                                        </motion.div>
                                }
                            </AnimatePresence>
                        </ProcessContainer>
                    </motion.div>
            }
        </AnimatePresence>
    )
}
