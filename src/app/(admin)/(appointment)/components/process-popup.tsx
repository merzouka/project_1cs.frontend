import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ProcessDisplay } from "./process-display";
import { ProcessContainer } from "./process-container";
import { ProcessData } from "./process";

const processData: ProcessData[] = [
  { text: "Starting data processing task...", updated: false, clear: true, status: null, id: 1 },
  { text: "Extracting relevant information...", updated: true, clear: false, status: true, id: 2 },
  { text: "Encountered a minor error, retrying...", updated: true, clear: false, status: null, id: 3 },
  { text: "Successfully completed data processing!", updated: true, clear: true, status: true, id: 4 },
  { text: "Validating data integrity...", updated: false, clear: true, status: null, id: 5 },
  { text: "Preparing data for analysis...", updated: true, clear: false, status: true, id: 6 },
  { text: "Building machine learning model...", updated: false, clear: true, id: 7, status: null },
  { text: "Training model on historical data...", updated: true, clear: false, status: null, id: 8 },
  { text: "Evaluating model performance...", updated: true, clear: false, status: true, id: 9 },
  { text: "Generating insights and reports...", updated: false, clear: true, status: null, id: 10 },
  { text: "Optimizing model parameters...", updated: true, clear: false, status: true, id: 11 },
  { text: "Deploying model to production...", updated: false, clear: true, id: 12, status: null },
  { text: "Monitoring model performance...", updated: true, clear: false, status: null, id: 13 },
  { text: "Identifying potential anomalies...", updated: true, clear: false, status: true, id: 14 },
  { text: "Alerting stakeholders of critical findings...", updated: false, clear: true, status: null, id: 15 },
  { text: "Preparing data for visualization...", updated: true, clear: false, status: true, id: 16 },
  { text: "Generating interactive dashboards...", updated: false, clear: true, id: 17, status: null },
  { text: "Communicating insights to decision makers...", updated: true, clear: false, status: null, id: 18 },
  { text: "Taking corrective actions based on insights...", updated: true, clear: false, status: true, id: 19 },
  { text: "User data anonymization in progress...", updated: false, clear: true, status: null, id: 20 },
];

export const ProcessPopup = () => {
    const [open, setOpen] = useState(true);
    const [processShowing, setProcessShowing] = useState(true);
    const [pings, setPings] = useState(0);

    // TODO remove margin right on top level element
    return (
        <AnimatePresence initial={true}>
            {
                open &&
                    <motion.div 
                        initial={{ x: "20%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: "100%", opacity: 0 }}
                        className="flex flex-col p-2 absolute bottom-0 right-0 h-full max-h-[60dvh] min-w-56 max-w-80 w-full mr-20"
                    >
                        <ProcessContainer
                            onClose={() => setOpen(false)}
                            onMinimizeChange={(state) => setProcessShowing(!state)}
                            title="Requests"
                            pingCount={pings}
                        >
                            {
                                processShowing &&
                                    <div className="flex-grow">
                                        <ProcessDisplay 
                                            processes={processData}
                                        />
                                    </div>
                            }
                        </ProcessContainer>
                    </motion.div>
            }
        </AnimatePresence>
    )
}
