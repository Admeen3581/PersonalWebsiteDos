/**
 * @author Adam Long
 * @copyright 2024 - All rights reserved.
 */

//Imports
import {BackgroundNonHome} from "@/components/backgroundNonHome";
import {NavbarDefault} from "@/components/navbarDefault";
import PageSubheading from "@/components/pageSubheading";

function Education() {
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
                    pageTitle={"education"}
                    funnyTitle={'my brain food'}
                />
                {/*Content*/}
                <div className="mt-24 text-center text-white space-y-5 font-aptos">
                    <h1 className='font-semibold font-aptos text-6xl'>
                        Texas State University
                    </h1>
                    <h2 className='font-aptos text-4xl'>
                        B.S Computer Science
                    </h2>
                    <div className='grid grid-cols-3 gap-16 pt-16'>
                        <div>
                            <h1 className='text-2xl'>
                                Computer Science Coursework
                            </h1>
                            <ul className='text-lg p-2'>
                                <li>Software Engineering</li>
                                <li>Object Oriented Programming</li>
                                <li>Data Structures</li>
                                <li>Computer Systems Fundamentals</li>
                            </ul>
                        </div>
                        <div>
                            <h1 className='text-2xl'>
                                Mathematics Coursework
                            </h1>
                            <ul className='text-lg p-2'>
                                <li>Discrete Mathematics I & II</li>
                                <li>Calculus I & II</li>
                                <li>Computational Architecture</li>
                                <li>Physics C Mechanics & E&M</li>
                            </ul>
                        </div>
                        <div>
                            <h1 className='text-2xl'>
                                General Education Coursework
                            </h1>
                            <ul className='text-lg p-2'>
                                <li>Technical Writing</li>
                                <li>Computational Ethics</li>
                                <li>Intro Data Analytics</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;