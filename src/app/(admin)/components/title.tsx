import { Cities } from "./cities";

export const Title = (
    {
        title
    }: {
        title: string,
    }) => {
    return (
        <div className="w-full pt-3 mb-4 lg:mb-8">
            <h1 className="text-3xl md:text-4xl font-semibold mb-1 md:mb-2">{title}</h1>
            <Cities />
        </div>
    )
}
