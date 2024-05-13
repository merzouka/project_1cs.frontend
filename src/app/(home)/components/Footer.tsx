import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    return (
        <>
            <footer className='mt-[40px] flex justify-center rounded-lg p-6   items-start text-xs '>
                <div className='mr-[350px]'>
                    <Image src='icon.svg' alt='elhadj' width={50} height={90} />
                    <p>Lorem ipsum dolor,
                        <br />sit amet consectetur adipisicing elit. </p>
                </div>
                <div className='mr-2'>
                    <ul className="   pl-6 space-y-2 px-5 text-[#EBA565] mr-[15px]">
                        <li className='font-semibold'>content</li>
                        <li>
                            <Link className=" text-xs text-bold text-black font-semibold" href={''}>Accueil</Link>
                        </li>
                        <li>
                            <Link className=" text-xs text-bold text-black font-semibold" href={''}>Tirage</Link>
                        </li>
                        <li>
                            <Link className="w-[50px] text-xs text-bold text-black font-semibold " href={''}>A propos</Link>
                        </li>
                    </ul>
                </div>
                <div className='mr-0.5'>
                    <ul className="   pl-6 space-y-2 px-5 text-[#EBA565] mr-[15px]">
                        <li className='font-semibold'>Contact</li>
                        <li>
                            <p className=" text-xs text-bold text-black font-semibold" >+213 556 30 39 78</p>
                        </li>
                        <li>
                            <p className=" text-xs text-bold text-black font-semibold" >+213 756 30 00 79</p>
                        </li>
                        <li>
                            <p className="w-[50px] text-xs text-bold text-black font-semibold " >Example@gmail.com</p>
                        </li>
                    </ul>
                </div>
                <div className='mr-0.5'>
                    <ul className="   pl-6 space-y-2 px-5 text-[#EBA565] mr-[15px]">
                        <li className='font-semibold'>Contact</li>
                        <li>
                            <p className=" text-xs text-bold text-black font-semibold" >+213 556 30 39 78</p>
                        </li>
                        <li>
                            <p className=" text-xs text-bold text-black font-semibold" >+213 756 30 00 79</p>
                        </li>
                        <li>
                            <p className="w-[50px] text-xs text-bold text-black font-semibold " >Example@gmail.com</p>
                        </li>
                    </ul>
                </div>


            </footer>
            <div className="flex justify-center">

                <hr className=" mr-[100px] ml-[70px] mb-5   h-0.5 w-full border-0 bg-[#EBA565] " />


            </div>

            <p className="text-center text-black font-semibold">
                &copy; Copyright {new Date().getFullYear()}
            </p>

        </>
    )
}


