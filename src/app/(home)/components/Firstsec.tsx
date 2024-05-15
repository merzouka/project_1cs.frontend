import Image from 'next/image'
import React from 'react'
import { Reem_Kufi } from "next/font/google";
import { cn } from "@/lib/utils";
import hajj from "../../../../public/hadjj.jpg";

const reemKufi = Reem_Kufi({
    subsets: ["arabic"],
    weight: ["400", "700"],
})

export default function Firstsec() {
    return (
        <section className="pt-14 mb-40">
            <div className=" mt-[20px] flex justify-center text-center mb-2">
                <h1 className={cn(
                    "font-bold text-4xl",
                    reemKufi.className,
                )}>{"ولله على الناس حج البيت من استطاع إليه سبيلاً"}</h1>
            </div>
            <div className="flex justify-center mb-5 md:mb-8">
                <hr className=" mx-auto my-2 h-0.5 w-[250px] border-0 bg-orange-400 md:my-5" />
            </div>
            <div className="h-96 flex justify-center items-center">
                <div className="relative md:rounded-full w-full md:w-9/12 h-full">
                    <div className={cn(
                        "hidden md:block absolute top-0 right-0 bottom-0 left-0",
                        "border rounded-full border-orange-400",
                        "-translate-y-6",
                    )}></div>
                    <div className={cn(
                        "hidden md:block absolute top-0 right-0 bottom-0 left-0 translate-x-1/3",
                        "border rounded-full border-orange-400",
                        "-translate-x-6",
                    )}></div>
                    <Image
                        src={hajj}
                        alt="Image over shape"
                        fill
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 75vw, 100vw"
                        className=' md:rounded-full object-cover'
                    />
                </div>
            </div>
        </section>
    )
}

