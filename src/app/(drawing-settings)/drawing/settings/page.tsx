import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Participants } from "@/app/(drawing-settings)/components/participants";

export default function Page() {

    return (
        <div className="flex flex-col pt-16 md:pt-8 p-2 md:p-8 size-full">
            <div className="w-full pt-3 mb-4 lg:mb-8">
                <h1 className="text-3xl md:text-4xl font-semibold">Le tirage au sort</h1>
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
                <TabsContent value="participants" className="h-full">
                    <Participants />
                </TabsContent>
                <TabsContent value="settings">
                    <div className="p-4 rounded-xl border border-slate-200 w-fit">
                        <div className="h-10 bg-black w-20"></div>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}
