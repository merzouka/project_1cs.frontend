import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Participants } from "@/app/(admin)/(drawing)/components/participants";
import { Title } from "@/app/(admin)/components/title";
import Tirage from "@/app/(admin)/(drawing)/components/tirage";

export default function Page() {
  return (
        <div className="flex flex-col pt-16 md:pt-8 p-2 md:p-8 size-full">
            <Title title={"Le tirage au sort"}/>
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
                            value="drawing"
                        >
                            {"Tirage"}
                        </TabsTrigger>
                    </div>
                </TabsList>
                <TabsContent value="participants" className="h-full">
                    <Participants />
                </TabsContent>
                <TabsContent value="drawing" className="flex flex-row flex-grow">
                    <Tirage />
                </TabsContent>
            </Tabs>
        </div>
  );
}
