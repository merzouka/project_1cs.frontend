"use client";
import Link from "next/link";
import { useUser } from "@/hooks/use-user";
import { BiSolidBadgeCheck } from "react-icons/bi";

export default function Thirdsec() {
    const { user } = useUser();

    return (
        <>
            <div className=" mt-[20px] flex justify-center text-center ">
                <h1 className="font-bold font-custom  text-3xl ">{"Le Tirage Au Sort"}</h1>
            </div>
            <div className="flex justify-center">
                <hr className="mb-[30px] mx-auto my-2 h-0.5 w-[150px] border-0 bg-[#EBA565] " />
            </div>
            <div className="flex justify-center items-start rounded-lg p-6 mb-[30px] w-full">
                <div className="">
                    <h2 className="text-[#8B929D] font-cunstom">
                        {"Veuillez lire attentivement les conditions, si"}
                        <br></br>
                        {"vous ne remplissez pas l'une des conditions,"}
                        <br></br>
                        {"votre demande sera refusée"}
                    </h2>
                </div>
                <div className="flex-grow max-w-40"></div>
                <ul className="list-disc pl-6 space-y-2  text-[#EBA565]">
                    <li>
                        <span className="text-[#8B929D]">{"Résident ou citoyen"}</span>
                    </li>
                    <li>
                        <span className="text-[#8B929D]">{"Ne pas être intérieur à 12 ans"}</span>
                    </li>
                    <li>
                        <span className="text-[#8B929D]">{"Peut se terminer, peut atteindre le stratam doit avoir un compte"}</span>
                    </li>
                </ul>
            </div>
            <div className="flex justify-center mb-40">
                {
                    user.isLoggedIn && (
                        (user.status?.registration || user.status?.drawing) ?
                            <Link 
                                href={"/inscription"} 
                                className="flex items-center justify-center py-5 border-orange-400  h-7 mb-10 w-full md:w-5/12 rounded-[30px] border  text-center md:font-bold font-bold text-black hover:bg-orange-400 hover:text-white transition-all hover:transition-all">
                                {"s’incrire au tirage"}
                            </Link>
                            :
                            <div className="flex gap-x-4 items-center justify-center">
                                <BiSolidBadgeCheck className="size-9 text-emerald-400" />
                                <p className="font-bold text-2xl">{"Vous êtes déja inscrit."}</p>
                            </div>
                    )
                }
            </div>


        </>

    )
}


