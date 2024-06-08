"use client";
import { Progress, Step } from "./components/progress";
import { FaUserCheck } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { icons } from "@/constants/icons";
import { FaFlagCheckered } from "react-icons/fa";
import { useUser } from "@/hooks/use-user";

function getSteps(
    status?: {
        registration: boolean;
        drawing: boolean;
        appointment: boolean;
        payment: boolean;
        booking: boolean;
        done: boolean;
    }) {

    if (!status) {
        return [];
    }
    
    const steps: Step[] = [
        {
            id: "registration",
            status: status.registration,
            display: "Inscription",
            icon: (className) => <FaUserCheck className={className}/>,
        },
        {
            id: "drawing",
            status: status.drawing,
            display: "Tirage",
            icon: (className) => icons.drawing(className),
        },
        {
            id: "appointment",
            status: status.appointment,
            display: "Visite Médicale",
            icon: (className) => <FaUserDoctor className={className}/>,
        },
        {
            id: "payment",
            status: status.payment,
            display: "Payment des frais",
            icon: (className) => icons.payment(className),
        },
        {
            id: "flight-choosing",
            status: status.booking,
            display: "Choix de l'offre",
            icon: (className) => icons.flight(className),
        },
        {
            id: "done",
            status: status.done,
            display: "Fin",
            icon: (className) => <FaFlagCheckered className={className}/>,
        },
    ]
    return steps;
}

const StatusPage = () => {
    const { user } = useUser();
    return (
        <div className="flex justify-center items-center px-3 w-full h-full">
            <Progress steps={getSteps(user.status)} />
        </div>
    );
}

export default StatusPage;
