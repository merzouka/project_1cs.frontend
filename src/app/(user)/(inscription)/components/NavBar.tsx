import Link from "next/link";
import Logo from "@/components/ui/logo";

export default function NavBar() {
    return (
        <>
            <nav className=" w-full h-12 z-15 ml-20 mt-2">
                <Link href="/" >
                    <div className="hover:bg-slate-50 p-4 rounded-full w-fit">
                        <Logo size={"xs"} />
                    </div>
                </Link>
            </nav>

        </>

    )
}


