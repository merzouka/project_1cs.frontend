import { DisplayWrapper } from "./components/display-wrapper";

const DrawingUserPage = () => {
    return (
        <div className="flex flex-col w-full h-full item-center justify-center px-2 md:px-32 py-4">
            <div className="flex justify-start items-center w-full mb-3">
                <h1 className="text-2xl font-semibold">{"Le tirage au sort"}</h1>
            </div>
            <div className="flex-grow w-full flex">
                <DisplayWrapper />
            </div>
        </div>
    );
}

export default DrawingUserPage;
