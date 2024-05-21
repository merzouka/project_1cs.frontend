import { cn } from "@/lib/utils"

export const Modal = ({ children, className, close }: { children: React.ReactNode, close: () => void; className?: string }) => {

    return (
        <div className={cn(
            "absolute bottom-0 right-0 top-0 left-0 bg-black/45 z-[9999] flex items-center justify-center",
            className,
        )}
            onClick={() => close()}
        >
            {children}
        </div>
    );
}
