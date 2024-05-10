import { Tab } from "@/app/(admin)/components/nav-tabs";
import { NavBar } from "@/app/(admin)/components/nav-bar";
import { BsBank2 } from "react-icons/bs";

const styles = "text-black group-hover:text-orange-400"
const tabs: Tab[] = [
    {
        icon: <BsBank2 className={styles}/>,
        display: "Payment des frais",
        id: "payment",
        link: "/payment",
    }
]

export const PaymentManagerNavBar = () => {
    return (
        <NavBar tabs={tabs} profileLink="/profile/payment-manager" />
    );
}
