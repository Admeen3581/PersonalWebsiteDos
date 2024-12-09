/**
 * @author Adam Long
 * @copyright 2024 - All rights reserved.
 */
import {BackgroundNonHome} from "@/components/backgroundNonHome";
import {NavbarDefault} from "@/components/navbarDefault";
import {downloadElements} from "@/app/(resources)/downloadables/downloadElements";
import PageSubheading from "@/components/pageSubheading";

function Downloadables() {
    return (
        <div className="relative min-h-screen min-w-screen overflow-hidden">
            {/*Background component*/}
            <BackgroundNonHome/>
            {/*Foreground components*/}
            <div className="relative z-30 flex flex-col items-center justify-center h-full">
                {/*Navbar component*/}
                <NavbarDefault/>
                {/*Heading*/}
                <PageSubheading
                    pageTitle={"downloads"}
                    funnyTitle={'all my links'}
                />
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