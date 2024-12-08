/**
 * @author Adam Long
 * @copyright 2024 - All rights reserved.
 */

//Imports
import {BackgroundNonHome} from "@/components/backgroundNonHome";
import {NavbarNonHome} from "@/components/navbarNonHome";
import GradualSpacing from "@/components/ui/gradualSpacing";
import InterestCard from "@/components/interestCard";
import {interestElements} from "@/app/(aboutme)/interests/interestElements";
import ScrollToTop from "@/components/ui/scrollToTop";

function Interests() {

    return (
        <div className="relative min-h-screen min-w-screen overflow-hidden">
            {/*Background component*/}
            <BackgroundNonHome particleNum={3500}/>
            {/*Foreground components*/}
            <div className="relative z-30 flex flex-col items-center justify-center h-full">
                {/*Navbar component*/}
                <NavbarNonHome/>
                {/*Heading*/}
                <div className='grid grid-cols-3 pt-20'>
                    <div className='flex flex-col items-start'>
                        <GradualSpacing
                            text="INTERESTS"
                            className="font-display text-sm text-white font-avalors shadow-inner"
                            duration={2.0}
                        />
                        <br/>
                        <div className='bg-gray-900 h-1 w-full'></div>
                        <br/>
                        <GradualSpacing
                            text="That's what I like"
                            className="font-display text-3xl text-white font-avalors shadow-inner"
                            duration={2.0}
                        />
                    </div>
                </div>
                {/*Page Content*/}
                <div className="w-10/12 px-8 py-20 space-y-32 mt-24">
                    {interestElements.map((interest) => (
                        <div key={interest.title}>
                            <InterestCard props={interest}/>
                        </div>
                    ))}
                </div>
                <div className='h-10'/>
                <div>
                    <ScrollToTop/>
                </div>
            </div>
        </div>
    );
}

export default Interests;