import Image from "next/image";


export default function NavBar() {
  return (
    <>
      <nav className=" w-full h-12 z-15 ml-20 mt-2">
        <Image alt="Logo" src="/logo.svg" width={58} height={90} />
      </nav>

    </>

  )
}


