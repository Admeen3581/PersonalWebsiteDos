/**
 * @author Adam Long
 * @copyright 2024 - All rights reserved.
 */
import {BackgroundNonHome} from "@/components/backgroundNonHome";
import {NavbarNonHome} from "@/components/navbarNonHome";
import GradualSpacing from "@/components/ui/gradualSpacing";
import {downloadElements} from "@/app/(resources)/downloadables/downloadElements";

function Downloadables() {
    return (
        <div className="relative min-h-screen min-w-screen overflow-hidden">
            {/*Background component*/}
            <BackgroundNonHome/>
            {/*Foreground components*/}
            <div className="relative z-30 flex flex-col items-center justify-center h-full">
                {/*Navbar component*/}
                <NavbarNonHome/>
                {/*Heading*/}
                <div className='grid grid-cols-4 pt-20'>
                    <div className='flex flex-col items-start'>
                        <GradualSpacing
                            text="DOWNLOADS"
                            className="font-display text-sm text-white font-avalors shadow-inner"
                            duration={2.0}
                        />
                        <br/>
                        <div className='bg-gray-900 h-1 w-full'/>
                        <br/>
                        <GradualSpacing
                            text="All my links"
                            className="font-display text-3xl text-white font-avalors shadow-inner"
                            duration={2.0}
                        />
                    </div>
                </div>
                {/*Page Content*/}
                <div className='md:pt-20'>
                    {downloadElements.map((element) => (
                        <div key={element.title} className='text-gray-300 text-center text-2xl font-semibold font-aptos py-4 hover:text-blue-600'>
                            <li className='list-disc'><a href={element.link}>{element.title}</a></li>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Downloadables;