"use client";
import { cn } from "@/lib/utils";
import { Tab } from "@/app/(admin)/components/nav-tabs";
import { NavBar } from "@/app/(admin)/components/nav-bar";
import { icons } from "@/constants/icons";

const styles = "text-black group-hover:text-orange-500"
const tabs: Tab[] = [
    {
        icon: (className) => icons.payment(cn(styles, className)),
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
