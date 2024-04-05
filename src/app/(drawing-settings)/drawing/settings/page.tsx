"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LuSearch } from "react-icons/lu";
import { useRef } from "react";

export default function Page() {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <div className="flex flex-col pt-16 md:pt-8 p-2 md:p-8 size-full">
            <div className="w-full bg-gray-100 pt-3 mb-4 lg:mb-8">
                <div className="bg-black h-8 w-9/12 mb-3"></div>
                <div className="bg-black h-4 w-9/12"></div>
            </div>
            <Tabs defaultValue="participants" className="flex flex-col grow">
                <TabsList className="w-full justify-between mb-3 lg:mb-5">
                    <div className="flex">
                        <TabsTrigger value="participants">{"Les participants"}</TabsTrigger>
                        <TabsTrigger value="settings">{"Le tirage"}</TabsTrigger>
                    </div>
                    <Button className="bg-transparent hover:bg-gray-100 text-black">{"Commencer"}</Button>
                </TabsList>
                <TabsContent value="participants" className="relative h-full">
                    <div className="flex items-center border border-slate-100 rounded-lg px-2 
                        focus-within:ring-2 focus-within:ring-black focus-within:ring-offset-2 mb-2 md:mb-4
                        shadow-lg shadow-slate-200
                        ">
                        <LuSearch className="size-7 text-slate-400" onClick={() => inputRef.current?.focus()}/>
                        <Input 
                            ref={inputRef}
                            className="w-full border-0 focus-visible:ring-0 focus-within:ring-transparent focus-within:ring-offset-0"
                            placeholder="Rechercer"
                        />
                    </div>
                    <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-200 overflow-y-auto">
                        <div className="h-dvh"></div>
                    </div>
                </TabsContent>
                <TabsContent value="settings">
                </TabsContent>
            </Tabs>
        </div>
    );
}
