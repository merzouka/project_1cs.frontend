import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import { PhoneInputSkeleton } from "./phone-input-skeleton";

export const ProfileFormSkeleton = () => {
    return (
        <div className="p-5 overflow-y-scroll">
            <Skeleton 
                className="mx-16 mb-2 rounded-3xl min-w-24 size-32 relative border border-slate-200"
            />
            <div className="md:row-span-2">
                <div className={cn(
                    "flex flex-col w-full max-w-[33rem] items-stretch md:items-center justify-stretch gap-x-3",
                )}>
                    <div className="mb-2 w-full">
                        <Label>{"Nom"}</Label>
                        <Skeleton 
                            className="max-w-[33rem] w-full border border-slate-200 h-11 rounded-2xl"
                        />
                    </div>
                    <div className="mb-2 w-full">
                        <Label>{"Prénom"}</Label>
                        <Skeleton 
                            className="max-w-[33rem] w-full border border-slate-200 h-11 rounded-2xl"
                        />
                    </div>
                </div>
                <div className="mb-2">
                    <Label>{"Email"}</Label>
                    <div>
                        <div className="flex items-center gap-x-2 w-full max-w-[33rem] relative">
                            <Skeleton 
                                className="max-w-[33rem] w-full border border-slate-200 h-11 rounded-2xl"
                            />
                            <BsFillPatchCheckFill 
                                className={cn(
                                    "absolute right-0 translate-x-[120%] md:translate-x-[150%] text-slate-200" ,
                                )} 
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <PhoneInputSkeleton />
                </div>
                <>
                    <span className="text-sm font-medium mb-2 block">
                        {"Région"}
                    </span>
                    <div className={cn(
                        "p-2 md:p-4 md:pt-5 pt-5 border border-slate-300 rounded-2xl flex-grow max-w-[33rem] relative",
                        "mb-2 md:mb-3"
                    )}>
                        <div>
                            <Label>{"Wilaya"}</Label>
                            <Skeleton 
                                className="max-w-[33rem] w-full border border-slate-200 h-11 rounded-2xl"
                            />
                        </div>
                        <div>
                            <Label>{"Commune"}</Label>
                            <Skeleton 
                                className="max-w-[33rem] w-full border border-slate-200 h-11 rounded-2xl"
                            />
                        </div>
                    </div>
                </>

                <Button 
                    disabled
                    className="max-w-[33rem] bg-black hover:bg-black/75 w-full font-bold rounded-2xl"
                >
                    {"Enregistrer"}
                </Button>
            </div>
        </div>
    );
}

function Label({ children }: { children: React.ReactNode }) {
    return (
        <label className="font-medium mb-2 text-sm block">{children}</label>
    );
}
