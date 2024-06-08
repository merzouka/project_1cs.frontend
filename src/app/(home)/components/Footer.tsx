import React from "react";
import Logo from "@/components/ui/logo";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="px-28 flex justify-center rounded-lg p-6 items-center justify-between text-xs ">
        <div className="">
          <Logo size={"xs"} />
          <p>
            El Hajj,
            <br /> Vous guide à chaque étape de votre Hajj.
          </p>
        </div>
        <div className="flex">
          <div className="mr-2">
            <ul className="   pl-6 space-y-2 px-5 text-[#EBA565] mr-[15px]">
              <li className="font-semibold">Content</li>
              <li>
                <Link
                  className=" text-xs text-bold text-black font-semibold"
                  href={""}
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  className=" text-xs text-bold text-black font-semibold"
                  href={""}
                >
                  Tirage
                </Link>
              </li>
              <li>
                <Link
                  className="w-[50px] text-xs text-bold text-black font-semibold "
                  href={"/about"}
                >
                  A propos
                </Link>
              </li>
            </ul>
          </div>
          <div className="mr-0.5">
            <ul className="   pl-6 space-y-2 px-5 text-[#EBA565] mr-[15px]">
              <li className="font-semibold">Contact</li>
              <li>
                <p className=" text-xs text-bold text-black font-semibold">
                  +213 556 30 39 78
                </p>
              </li>
              <li>
                <p className=" text-xs text-bold text-black font-semibold">
                  +213 756 30 00 79
                </p>
              </li>
              <li>
                <p className="w-[50px] text-xs text-bold text-black font-semibold ">
                  celeq.elhajj@gmail.com
                </p>
              </li>
            </ul>
          </div>
          <div className="mr-0.5">
            <ul className="   pl-6 space-y-2 px-5 text-[#EBA565] mr-[15px]">
              <li className="font-semibold">Contact</li>
              <li>
                <p className=" text-xs text-bold text-black font-semibold">
                  +213 556 30 39 78
                </p>
              </li>
              <li>
                <p className=" text-xs text-bold text-black font-semibold">
                  +213 756 30 00 79
                </p>
              </li>
              <li>
                <p className="w-[50px] text-xs text-bold text-black font-semibold ">
                  celeq.elhajj@gmail.com
                </p>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="flex justify-center px-28">
        <hr className="h-0.5 w-full border-0 bg-[#EBA565] " />
      </div>

      <p className="text-center text-black font-semibold py-3">
        &copy; Copyright {new Date().getFullYear()}
      </p>
    </>
  );
}
