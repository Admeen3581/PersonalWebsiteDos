/**
 * @author Adam Long
 * @copyright 2024 - All rights reserved.
 */

//Imports
import {BackgroundNonHome} from "@/components/backgroundNonHome";
import {NavbarDefault} from "@/components/navbarDefault";
import WorkExperienceCard from "@/components/workExperienceCard";
import PageSubheading from "@/components/pageSubheading";

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
                <PageSubheading
                    pageTitle={"work experience"}
                    funnyTitle={'my impact on the world'}
                />
                {/*Page Content*/}
                <div className='mt-8'>
                    <WorkExperienceCard/>
                </div>
            </div>
        </div>
    );
}

export default WorkExperience;