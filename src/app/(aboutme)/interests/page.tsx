/**
 * @author Adam Long
 * @copyright 2024 - All rights reserved.
 */

//Imports
import {BackgroundNonHome} from "@/components/backgroundNonHome";
import {NavbarDefault} from "@/components/navbarDefault";
import InterestCard from "@/components/interestCard";
import {interestElements} from "@/app/(aboutme)/interests/interestElements";
import ScrollToTop from "@/components/ui/scrollToTop";
import PageSubheading from "@/components/pageSubheading";

function Interests() {

    return (
        <div className="relative min-h-screen min-w-screen overflow-hidden">
            {/*Background component*/}
            <BackgroundNonHome particleNum={3500}/>
            {/*Foreground components*/}
            <div className="relative z-30 flex flex-col items-center justify-center h-full">
                {/*Navbar component*/}
                <NavbarDefault/>
                {/*Heading*/}
                <PageSubheading
                    pageTitle={"interests"}
                    funnyTitle={'that\'s what i like'}
                />
                {/*Page Content*/}
                <div className="w-10/12 px-8 py-20 space-y-32 mt-24 font-aptos">
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