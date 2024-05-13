import Image from 'next/image'
import React from 'react'

export default function Firstsec() {
    return (
        <section className=' mb-[300px]'>

            <>
                <div className=" mt-[20px] flex justify-center text-center mb-2">
                    <h1 className="font-bold font-Kufi text-3xl">ولله على الناس حج البيت من استطاع إليه سبيلاً</h1>

                </div>
                <div className="flex justify-center ">

                    <hr className=" mx-auto my-2 h-0.5 w-[250px] border-0 bg-[#EBA565] md:my-5 " />

                </div>
                <div className=" w-[900px] h-32 mt-[50px]">
                    <div className="relative">
                        <div className="absolute inset-0 rounded-full border-2 border-[#EBA565]  -mt-[40px] w-[900px] h-[378px]"></div>
                        <div className="absolute inset-0 rounded-full border-2 -ml-[25px] border-[#EBA565]   "></div>
                        <Image
                            src="hadjj.svg"
                            alt="Image over shape"
                            width={950}
                            height={400}
                            className='rounded-[2150px]'
                        />
                    </div>
                </div>


            </>
        </section>
    )
}

