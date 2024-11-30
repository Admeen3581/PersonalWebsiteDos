/**
 * @author Adam Long
 * @copyright 2024 - All rights reserved Adam Long.
 */

//Imports
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import Link from 'next/link'
import ListItem from '@/components/ui/navigation-menu-listitem'
import {rightElements} from '@/lib/navBarElements'


//Function
const RightHomePageNavbar = () => {
    return (
        <div className="text-white p-4 ml-10">
            <NavigationMenu className='relative' direction={"left-0"}>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="hover:text-blue-400 font-size-24 font-dagger">Getting started</NavigationMenuTrigger>
                        <NavigationMenuContent className='bg-gray-800 h-52'>
                            <ul className="grid gap-3 p-6 bg-gray-700 rounded-md shadow-lg md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                <li className="row-span-3">
                                    <NavigationMenuLink asChild>
                                        <Link
                                            className="from-gray-600 to-gray-800 flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none hover:shadow-md"
                                            href="/"
                                        >
                                            <div className="mb-2 mt-4 text-lg font-medium">nyxb/ui</div>
                                            <p className="text-gray-300 text-sm leading-tight">
                                                Beautifully designed components that you can copy and
                                                paste into your apps. Accessible. Customizable. Open
                                                Source.
                                            </p>
                                        </Link>
                                    </NavigationMenuLink>
                                </li>
                                <ListItem href="/docs" title="Introduction">
                                    Re-usable components built using Radix UI and Tailwind CSS.
                                </ListItem>
                                <ListItem href="/docs/installation" title="Installation">
                                    How to install dependencies and structure your app.
                                </ListItem>
                                <ListItem href="/docs/primitives/typography" title="Typography">
                                    Styles for headings, paragraphs, lists...etc
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="hover:text-blue-400 font-size-24 font-dagger">Components</NavigationMenuTrigger>
                        <NavigationMenuContent className='bg-gray-800 h-52'>
                            <ul className="grid w-[400px] gap-3 p-4 bg-gray-700 rounded-md shadow-lg md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                {rightElements.map(component => (
                                    <ListItem
                                        key={component.title}
                                        title={component.title}
                                        href={component.href}
                                    >
                                        {component.desc}
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}

export default RightHomePageNavbar;