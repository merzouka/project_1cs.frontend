import { Title } from "@/app/(admin)/components/title";
import { Winners } from "../components/winners";
import { endpoints } from "@/constants/endpoints";


const PatientPage = () => {

    return (
        <div className="md:px-4 p-2 flex flex-col w-full h-full">
            <Title title={"Les pèlerins"} />
            <div className="flex justify-center items-center flex-grow">
                <Winners 
                    itemsEndpoint={endpoints.appointmentWinners} 
                    updateEndpoint={endpoints.appointmentStatusUpdate} 
                />
            </div>
        </div>
    );
};

export default PatientPage;
