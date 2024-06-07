import { useMemo } from "react";
import Link from "next/link";
import { Scroller } from "./scroller";
import { IoMdArrowDropright } from "react-icons/io";


export default function SecondSec() {
    const elements = useMemo(() => services.map(service => ({
        id: service.id,
        element: <ServiceCard key={service.id} service={service} />
    })), [])

    return (
        <>
            <div className=" mt-[20px] flex justify-center text-center mb-3">
                <h1 className="font-bold text-4xl font-custom">Découvrez nos services</h1>
            </div>
            <div className="flex justify-center">
                <hr className="mb-4 mx-auto my-2 h-0.5 w-[150px] border-0 bg-[#EBA565] " />
            </div>
            <div className=" mt-[5px] flex justify-center text-center  text-[#8B929D] mb-10" >
                Cette plateforme a été créée pour faciliter les services du Hajj aux citoyens,
                <br></br>
                où vous pouvez via cette plateforme :
            </div>
            <div className="flex justify-center items-center mb-40">
                <Scroller elements={elements} perPage={3}/>
            </div>
        </>
    );
}

interface Service {
    id: string;
    title: string;
    description: string;
    link: string;
}

const services: Service[] = [
    {
        id: "registration",
        title: "Inscription au tirage",
        description: "Notre site vous permet (Hajj ou Hajja) de s'inscrire au hajj.",
        link: "/",
    },
    {
        id: "drawing",
        title: "Tirage au sort",
        description: "Notre site va vous permettre de spectater le tirage au sort.",
        link: "/",
    },
    {
        id: "appointment",
        title: "Visite médical",
        description: "Notre site va gérer les visite médicales.",
        link: "/",
    },
    {
        id: "payment",
        title: "Payment des frais",
        description: "Notre site va gérer les payment des frais du Hajj.",
        link: "/",
    },
    {
        id: "bookings",
        title: "Gestion vols/hotels",
        description: "Notre site gère la répartition des hodjadj sur les vols et hotels.",
        link: "/",
    },
]

const ServiceCard = ({ service }: { service: Service }) => {
    return (
        <div key={service.id} className=' h-[200px] rounded-3xl bg-white drop-shadow-lg w-[320px] px-8 py-4 flex flex-col relative group pb-6'>
            <div className='w-full h-full flex flex-col justify-between'>
                <h3 className='text-xl font-bold text-wrap'>
                    {service.title}
                </h3>
                <p className='text-slate-500 group-hover:text-slate-700'>{service.description}</p>
                <Link href={service.link} className='w-fit text-orange-300 group-hover:text-orange-400 font-bold flex items-center gap-x-2'>
                    {"Apprendre Plus"}
                    <IoMdArrowDropright className="size-6 p-0"/>
                </Link>
            </div>

        </div>
    );
}
