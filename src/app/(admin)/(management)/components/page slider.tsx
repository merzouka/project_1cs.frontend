"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Separator } from "@/components/ui/separator"


export function NavigationMenuDemo() {
    return (
        <NavigationMenu className="flex justify-center mb-7 ml-6">
            <NavigationMenuList>
                <NavigationMenuItem>


                    <div className="flex h-5 items-center space-x-4 text-sm">
                        <div>
                            <Link href="/bookings/vols" legacyBehavior passHref >
                                <NavigationMenuLink className={navigationMenuTriggerStyle()} >
                                    <div className="hover:text-red focus:text-blue-500">
                                        Les vols
                                    </div>
                                </NavigationMenuLink>
                            </Link>
                        </div>
                        <Separator orientation="vertical" />
                        <div>
                            <Link href="/AlertDialogDemo" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Les hotel
                                </NavigationMenuLink>
                            </Link>
                        </div>

                    </div>

                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <Separator orientation="vertical" />
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
