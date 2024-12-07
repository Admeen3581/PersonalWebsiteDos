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
} from '@/components/ui/navigationMenu'
import Link from 'next/link'
import ListItem from '@/components/ui/navigationMenuListitem'
import {aboutMeElements, showcaseElements} from '@/lib/navBarElements'


//Function
const LeftHomePageNavbar = () => {
    return (
        <div className="text-white p-4 mr-10">
            <NavigationMenu className='relative' direction={"right-0"}>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="hover:text-blue-400 text-lg font-dagger pr-16">About Me</NavigationMenuTrigger>
                        <NavigationMenuContent className='bg-gray-800'>
                            <ul className="grid gap-3 p-6 bg-gray-700 rounded-md shadow-lg md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                <li className="row-span-2">
                                    <NavigationMenuLink asChild>
                                        <Link
                                            className="from-gray-600 to-gray-800 flex w-full select-none flex-col justify-end rounded-md bg-gradient-to-b p-3 no-underline outline-none hover:shadow-md"
                                            href="/whoAmI"
                                        >
                                            <div className="mb-2 text-lg font-bold">Who Am I?</div>
                                            <p className="text-gray-300 text-sm font-semibold leading-tight">
                                                Dell Technologies
                                            </p>
                                            <p className="text-gray-300 text-sm leading-tight">
                                                &emsp;SWE Intern
                                            </p>
                                            <br/>
                                            <p className="text-gray-300 text-sm font-semibold leading-tight">
                                                Texas State University
                                            </p>
                                            <p className="text-gray-300 text-sm leading-tight">
                                                &emsp;B.S. Computer Science
                                            </p>
                                            <p className="text-gray-300 text-sm leading-tight">
                                                &emsp;TXST Waterski
                                            </p>
                                            <p className="text-gray-300 text-sm leading-tight">
                                                &emsp;TXST Senator
                                            </p>
                                        </Link>
                                    </NavigationMenuLink>
                                </li>
                                {aboutMeElements.map(component => (
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
                        <NavigationMenuTrigger className="hover:text-blue-400 text-lg font-dagger">Showcase</NavigationMenuTrigger>
                        <NavigationMenuContent className='bg-gray-800'>
                            <ul className="grid w-[400px] gap-3 p-4 bg-gray-700 rounded-md shadow-lg md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                {showcaseElements.map(component => (
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

export default LeftHomePageNavbar;