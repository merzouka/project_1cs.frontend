import { useMemo } from "react";
import Link from "next/link";
import { Scroller } from "./scroller";
import { IoMdArrowDropright } from "react-icons/io";

/* 
 export default function SecondSec() {

    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )


    return (
        <>
            <div className=" mt-[20px] flex justify-center text-center mb-3">
                <h1 className="font-bold text-4xl font-custom drop-shadow-md  ">Découvrez nos services</h1>
            </div>
            <div className="flex justify-center">
                <hr className="mb-4 mx-auto my-2 h-0.5 w-[150px] border-0 bg-[#EBA565] " />
            </div>
            <div className=" mt-[5px] flex justify-center text-center  text-[#8B929D] mb-10" >
                Cette plateforme a été créée pour faciliter les services du Hajj aux citoyens,
                <br></br>
                où vous pouvez via cette plateforme :
            </div>

            <Carousel
                className="w-full  mb-[100px]"
                plugins={[plugin.current]}
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
                <CarouselContent className="" >
                    {Array.from({ length: 1 }).map((_, index) => (
                        <CarouselItem key={index} className="flex space-x-5 ">

                            <div className=' ml-[100px] h-[200px]  rounded-[50px] bg-white  mb-5 shadow-lg w-[320px]' >
                                <div className='flex flex-col justify-center  gap-4 p-4 w-[300px] '  >
                                    <p className='text-xl font-bold ' >
                                        Inscription au tirage
                                    </p>
                                    <p className='text-[#8B929D]'>
                                        Vous pouvez vous inscrire au tirage et recevoir un SMS pour connaître la résultat
                                    </p>
                                    <button className='text-[#EBA565] mr-[140px] text-start ml-3 '>
                                        Learn More &nbsp;  &gt;
                                    </button>
                                </div>

                            </div>

                            <div className=' h-[200px]  rounded-[50px] bg-white  mb-5 shadow-lg  w-[320px]' >
                                <div className='flex flex-col justify-center  gap-4 p-4 w-[300px]'>
                                    <p className='text-xl font-bold ' >
                                        Payement des frais
                                    </p>
                                    <p className='text-[#8B929D]'>
                                        Vous pouvez vous inscrire au tirage et recevoir un SMS pour connaître la résultat                                </p>
                                    <button className='text-[#EBA565] mr-[140px] text-start ml-3 '>
                                        Learn More  &nbsp;  &gt;
                                    </button>
                                </div>

                            </div>
                            <div className=' h-[200px]  rounded-[50px] bg-white  mb-5 shadow-lg w-[320px]' >
                                <div className='flex flex-col justify-center  gap-4 p-4 w-[300px]'>
                                    <p className='text-xl font-bold ' >
                                        Payement des frais
                                    </p>
                                    <p className='text-[#8B929D]'>
                                        Vous pouvez vous inscrire au tirage et recevoir un SMS pour connaître la résultat                                </p>
                                    <button className='text-[#EBA565] mr-[140px] text-start ml-3 '>
                                        Learn More &nbsp;  &gt;
                                    </button>
                                </div>

                            </div>

                        </CarouselItem>))}
                    {Array.from({ length: 1 }).map((_, index) => (
                        <CarouselItem key={index} className="flex space-x-5 ">

                            <div className=' ml-[100px] h-[200px]  rounded-[50px] bg-white  mb-5 shadow-lg w-[320px]' >
                                <div className='flex flex-col justify-center  gap-4 p-4 w-[300px] '  >
                                    <p className='text-xl font-bold ' >
                                        Flights
                                    </p>
                                    <p className='text-[#8B929D]'>
                                        Vous pouvez vous inscrire au tirage et recevoir un SMS pour connaître la résultat
                                    </p>
                                    <button className='text-[#EBA565] mr-[140px] text-start ml-3 '>
                                        Learn More &nbsp;  &gt;
                                    </button>
                                </div>

                            </div>

                            <div className=' h-[200px]  rounded-[50px] bg-white  mb-5 shadow-lg  w-[320px]' >
                                <div className='flex flex-col justify-center  gap-4 p-4 w-[300px]'>
                                    <p className='text-xl font-bold ' >
                                        Hotel
                                    </p>
                                    <p className='text-[#8B929D]'>
                                        Vous pouvez vous inscrire au tirage et recevoir un SMS pour connaître la résultat                                </p>
                                    <button className='text-[#EBA565] mr-[140px] text-start ml-3 '>
                                        Learn More  &nbsp;  &gt;
                                    </button>
                                </div>

                            </div>
                            <div className=' h-[200px]  rounded-[50px] bg-white  mb-5 shadow-lg w-[320px]' >
                                <div className='flex flex-col justify-center  gap-4 p-4 w-[300px]'>
                                    <p className='text-xl font-bold ' >
                                        Guide
                                    </p>
                                    <p className='text-[#8B929D]'>
                                        Vous pouvez vous inscrire au tirage et recevoir un SMS pour connaître la résultat                                </p>
                                    <button className='text-[#EBA565] mr-[140px] text-start ml-3 '>
                                        Learn More &nbsp;  &gt;
                                    </button>
                                </div>

                            </div>

                        </CarouselItem>))}

                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </>)


}
 * */

export default function SecondSec() {
    const elements = useMemo(() => services.map(service => ({
        id: service.id,
        element: <ServiceCard service={service} />
    })), [])

    return (
        <>
            <div className=" mt-[20px] flex justify-center text-center mb-3">
                <h1 className="font-bold text-4xl font-custom drop-shadow-md  ">Découvrez nos services</h1>
            </div>
            <div className="flex justify-center">
                <hr className="mb-4 mx-auto my-2 h-0.5 w-[150px] border-0 bg-[#EBA565] " />
            </div>
            <div className=" mt-[5px] flex justify-center text-center  text-[#8B929D] mb-10" >
                Cette plateforme a été créée pour faciliter les services du Hajj aux citoyens,
                <br></br>
                où vous pouvez via cette plateforme :
            </div>
            <div className="flex justify-center items-center">
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
        <div key={service.id} className=' h-[200px] rounded-3xl bg-white drop-shadow-xl w-[320px] px-8 py-4 flex flex-col relative'>
            <div className='w-full h-full flex flex-col justify-between '>
                <h3 className='text-xl font-bold text-wrap'>
                    {service.title}
                </h3>
                <p className='text-slate-500'>{service.description}</p>
                <Link href={service.link} className='w-fit text-orange-300 font-bold flex items-center gap-x-2'>
                    {"Apprendre Plus"}
                    <IoMdArrowDropright className="size-6 p-0"/>
                </Link>
            </div>

        </div>
    );
}
