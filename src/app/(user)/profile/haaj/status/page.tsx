import { Progress, Step } from "./components/progress";
import { FaUserCheck } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { icons } from "@/constants/icons";
import { FaFlagCheckered } from "react-icons/fa";

const steps: Step[] = [
    {
        id: "registration",
        status: true,
        display: "Inscription",
        icon: (className) => <FaUserCheck className={className}/>,
    },
    {
        id: "draw",
        status: true,
        display: "Tirage",
        icon: (className) => icons.drawing(className),
    },
    {
        id: "appointment",
        status: false,
        display: "Visite Médicale",
        icon: (className) => <FaUserDoctor className={className}/>,
    },
    {
        id: "payment",
        status: null,
        display: "Payment des frais",
        icon: (className) => icons.payment(className),
    },
    {
        id: "flight-choosing",
        status: null,
        display: "Choix de l'offre",
        icon: (className) => icons.flight(className),
    },
    {
        id: "done",
        status: null,
        display: "Fin",
        icon: (className) => <FaFlagCheckered className={className}/>,
    },
]

const StatusPage = () => {
    return (
        <div className="flex justify-center items-center px-3 w-full h-full">
            <Progress steps={steps} />
        </div>
    );
}

export default StatusPage;
