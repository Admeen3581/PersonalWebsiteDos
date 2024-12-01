/**
 * @author Dennis Ollhoff & Adam Long
 * @copyright All rights reserved.
 */

import {NavigationMenuLink} from "@radix-ui/react-navigation-menu";
import {ny} from "@/lib/utils";
import React from "react";


const ListItem = React.forwardRef<
    React.ElementRef<'a'>,
    React.ComponentPropsWithoutRef<'a'>
    >(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={ny(
                        'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors',
                        className,
                    )}
                    {...props}
                >
                    <div className="text-sm font-bold leading-none">{title}</div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = 'ListItem'

export default ListItem;