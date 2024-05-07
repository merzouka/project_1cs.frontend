import { Tab } from "@/app/(admin)/components/nav-tabs";
import { NavBar } from "@/app/(admin)/components/nav-bar";
import { icons } from "@/constants/icons";

const styles = "text-black group-hover:text-orange-400"
const tabs: Tab[] = [
    {
        icon: icons.payment(styles),
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
