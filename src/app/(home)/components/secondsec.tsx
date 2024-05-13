import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


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





