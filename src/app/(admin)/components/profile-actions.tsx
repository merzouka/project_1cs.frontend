import { Logout } from "./logout";
import { SwitchAccount } from "./switch-account";


export const ProfileActions = () => {
    return (
        <div className="flex flex-col justify-center items-center w-fit ">
            <SwitchAccount className="text-black"/>
            <Logout className="text-black"/>
        </div>
    );
}
