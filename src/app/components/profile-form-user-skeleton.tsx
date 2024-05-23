import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import { PhoneInputSkeleton } from "./phone-input-skeleton";

export const UserProfileFormSkeleton = () => {
    return (
        <div className="w-full flex items-center justify-center">
            <div className={cn(
                "flex flex-col items-start justify-center w-full max-w-[64rem] mt-2 md:mt-4",
            )}>
                <Skeleton 
                    className="mb-2 rounded-3xl min-w-24 size-32 relative border border-slate-200"
                />
                <div className="md:row-span-2 w-full">
                    <div className="grid grid-flow-col grid-rows-4 grid-cols-1 md:grid-cols-2 gap-x-12 items-start justify-center mb-2 md:mb-6">
                        <div className="mb-2 w-full">
                            <Label>{"Identifiant partageable"}</Label>
                            <Skeleton 
                                className="max-w-[33rem] w-full border border-slate-200 h-10 rounded-2xl"
                            />
                        </div>
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
                        <div className="row-span-3">
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
                        </div>
                    </div>
                    <Button 
                        disabled
                        className="max-w-[33rem] bg-black hover:bg-black/75 w-full font-bold rounded-2xl"
                    >
                        {"Enregistrer"}
                    </Button>
                </div>
            </div>
        </div>
    );
}

function Label({ children }: { children: React.ReactNode }) {
    return (
        <label className="font-medium mb-2 text-sm block">{children}</label>
    );
}
