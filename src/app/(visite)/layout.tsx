import { NavBar } from "@/app/(drawing)/components/nav-bar/main";
import { Separator } from "@/components/ui/separator";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center h-dvh">
      <NavBar />
      <Separator orientation="vertical" className="h-[80dvh] hidden md:block" />
      <div className="size-full h-dvh">{children}</div>
    </div>
  );
}
