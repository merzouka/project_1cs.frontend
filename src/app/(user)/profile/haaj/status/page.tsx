import { Progress, Step } from "./components/progress";
import { FaUserCheck } from "react-icons/fa";
import { icons } from "@/constants/icons";

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
        status: null,
        display: "Visite Médicale",
        icon: (className) => <FaUserCheck className={className}/>,
    },
    {
        id: "payment",
        status: null,
        display: "Payment des frais",
        icon: (className) => <FaUserCheck className={className}/>,
    },
    {
        id: "flight-choosing",
        status: null,
        display: "Choix de l'offre",
        icon: (className) => <FaUserCheck className={className}/>,
    },
    {
        id: "done",
        status: null,
        display: "Fin",
        icon: (className) => <FaUserCheck className={className}/>,
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
