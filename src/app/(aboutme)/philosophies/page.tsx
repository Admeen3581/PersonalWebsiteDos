/**
 * @author Adam Long
 * @copyright 2024 - All rights reserved.
 */
import {BackgroundNonHome} from "@/components/backgroundNonHome";
import {NavbarDefault} from "@/components/navbarDefault";
import {philosophyElements} from "@/app/(aboutme)/philosophies/philosophyElements";
import PhilosophyCard from "@/components/philosophyCard";
import ScrollToTop from "@/components/ui/scrollToTop";
import PageSubheading from "@/components/pageSubheading";

function Philosophies() {
    return (
        <div className="relative min-h-screen min-w-screen overflow-hidden">
            {/*Background component*/}
            <BackgroundNonHome particleNum={2200}/>
            {/*Foreground components*/}
            <div className="relative z-30 flex flex-col items-center justify-center h-full">
                {/*Navbar component*/}
                <NavbarDefault/>
                {/*Heading*/}
                <PageSubheading
                    pageTitle={"philosophies"}
                    funnyTitle={'how I live my life'}
                />
                {/*Page Content*/}
                <div className="relative flex flex-col items-center justify-center w-9/12 mt-32">
                    <h1 className='text-2xl shadow-inner text-center font-aptos text-gray-300 leading-relaxed'>
                        My life philosophies are guided by lessons I have learned. They are written on my mirror, so
                        that I can be a reflection of who I want to be.
                    </h1>
                    <div className='bg-gray-900 h-1 w-full m-8'/>
                    {/*Row-By-Row Cards*/}
                    <div className='mt-10 w-full'>
                        {philosophyElements.map((elements) => (
                            <div key={elements.title} className='p-4'>
                                <PhilosophyCard prop={elements}/>
                            </div>
                        ))}
                    </div>
                    <div className='h-10'/>
                </div>
                <div>
                    <ScrollToTop/>
                </div>
            </div>
        </div>
    );
}

export default Philosophies;