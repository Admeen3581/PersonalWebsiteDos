/**
 * @author Adam Long
 * @copyright 2024 - All rights reserved.
 */

//Imports
import {BackgroundNonHome} from "@/components/backgroundNonHome";
import {NavbarDefault} from "@/components/navbarDefault";
import GradualSpacing from "@/components/ui/gradualSpacing";
import WorkExperienceCard from "@/components/workExperienceCard";

function WorkExperience() {
    return (
        <div className="relative min-h-screen min-w-screen overflow-hidden">
            {/*Background component*/}
            <BackgroundNonHome/>
            {/*Foreground components*/}
            <div className="relative z-30 flex flex-col items-center justify-center h-full">
                {/*Navbar component*/}
                <NavbarDefault/>
                {/*Heading*/}
                <div className='grid grid-cols-2 pt-20'>
                    <div className='flex flex-col items-start'>
                        <GradualSpacing
                            text="WORK EXPERIENCE"
                            className="font-display text-sm text-white font-avalors shadow-inner"
                            duration={2.0}
                        />
                        <br/>
                        <div className='bg-gray-900 h-1 w-full'></div>
                        <br/>
                        <GradualSpacing
                            text="My impact on the world"
                            className="font-display text-3xl text-white font-avalors shadow-inner"
                            duration={2.0}
                        />
                    </div>
                </div>
                {/*Page Content*/}
                <div className='mt-8'>
                    <WorkExperienceCard/>
                </div>
            </div>
        </div>
    );
}

export default WorkExperience;