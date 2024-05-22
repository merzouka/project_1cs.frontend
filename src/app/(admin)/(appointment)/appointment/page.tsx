import { Winners } from "../components/winners";
import { endpoints } from "@/constants/endpoints";

const PatientPage = () => {
    return (
        <div className="md:px-4 p-2 flex flex-col w-full h-full">
            <div className="w-full pt-3 mb-4 lg:mb-8">
                <h4 className="text-xl md:text-3xl font-semibold mb-1 md:mb-2">
                    {"Les pèlerins"}
                </h4>
            </div>
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
