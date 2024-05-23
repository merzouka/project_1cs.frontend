"use client";
import { Winners } from "../components/winners";
import { endpoints } from "@/constants/endpoints";
import { Title } from "@/app/(admin)/components/title";
import { ProcessDisplay } from "../components/process-display";
import { ProcessData } from "../components/process";
import { ProcessContainer } from "../components/process-container";
import { useState } from "react";
import { Button } from "@/components/ui/button";

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

const PatientPage = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="md:px-4 p-2 flex flex-col w-full h-full">
            <Title title={"Les pèlerins"} />
            <div className="flex justify-center items-center flex-grow">
                <Button onClick={() => setCount((count) => count + 1)}>
                    Click
                </Button>
                {
                    // <Winners 
                    //     itemsEndpoint={endpoints.appointmentWinners}
                    //     updateEndpoint={endpoints.appointmentStatusUpdate}
                    // />
                }
                <ProcessContainer 
                    pingCount={count}
                    title="Processes"
                    onClose={() => console.log("closing")}
                    onMinimizeChange={(state) => console.log(`new state is ${state}`)}

                />
            </div>
        </div>
    );
};

export default PatientPage;
