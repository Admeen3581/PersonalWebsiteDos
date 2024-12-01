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
import {contactElements, resourceElements} from '@/lib/navBarElements'


//Function
const RightHomePageNavbar = () => {
    return (
        <div className="text-white p-4 ml-10">
            <NavigationMenu className='relative' direction={"left-0"}>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="hover:text-blue-400 text-lg font-dagger pr-16">Resources</NavigationMenuTrigger>
                        <NavigationMenuContent className='bg-gray-800'>
                            <ul className="grid gap-3 p-6 bg-gray-700 rounded-md shadow-lg md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                <li className="row-span-3">
                                    <NavigationMenuLink asChild>
                                        <Link
                                            className="from-gray-600 to-gray-800 flex w-full select-none flex-col justify-end rounded-md bg-gradient-to-b p-3 no-underline outline-none hover:shadow-md"
                                            href="/"
                                        >
                                            <div className="mb-2 text-lg font-bold">Resume</div>
                                            <p className="text-gray-300 text-sm leading-tight">
                                                My up-to-date, general purpose resume listing my qualifications within the field.
                                            </p>
                                            <br/>
                                            <p className="text-gray-300 text-sm leading-tight italic">
                                                Click to download
                                            </p>
                                        </Link>
                                    </NavigationMenuLink>
                                </li>
                                {resourceElements.map(component => (
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
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="hover:text-blue-400 text-lg font-dagger">Contact</NavigationMenuTrigger>
                        <NavigationMenuContent className='bg-gray-800'>
                            <ul className="grid w-[250px] gap-3 p-6 bg-gray-700 rounded-md shadow-lg md:w-[400px] md:grid-cols-2 lg:w-[500px]">
                                {contactElements.map(component => (
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