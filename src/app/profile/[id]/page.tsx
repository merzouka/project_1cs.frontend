
export default function ProfilePage({
    params
    }: {
        params: {
            id: number;
        }
    }) {
    return (
        <div>{params.id}</div>
    );
}
