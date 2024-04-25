import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Participants } from "@/app/(drawing)/components/participants";
import { Cities } from "@/app/(drawing)/components/cities";
import Tirage from "@/app/(drawing)/components/tirage";

export default function Page() {
    return (
        <div className="flex flex-col pt-16 md:pt-8 p-2 md:p-8 size-full">
            <div className="w-full pt-3 mb-4 lg:mb-8">
                <h1 className="text-3xl md:text-4xl font-semibold mb-1 md:mb-2">Le tirage au sort</h1>
                <Cities />
            </div>
            <Tabs defaultValue="participants" className="flex flex-col grow">
                <TabsList className="w-full justify-between mb-3 lg:mb-5 bg-transparent">
                    <div className="flex">
                        <TabsTrigger 
                            className="shadow-none rounded-none border-b border-b-transparent bg-transparent
                            data-[state=active]:text-orange-400 data-[state=active]:border-b-orange-400
                            data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                            value="participants"
                        >
                            {"Participants"}
                        </TabsTrigger>
                        <TabsTrigger 
                            className="shadow-none rounded-none border-b border-b-transparent bg-transparent
                            data-[state=active]:text-orange-400 data-[state=active]:border-b-orange-400
                            data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                            value="settings"
                        >
                            {"Tirage"}
                        </TabsTrigger>
                    </div>
                </TabsList>
                <TabsContent value="participants" className="h-full">
                    <Participants />
                </TabsContent>
                <TabsContent value="settings" className="flex flex-row h-full">
                    <Tirage />
                </TabsContent>
            </Tabs>
        </div>
    );
}
