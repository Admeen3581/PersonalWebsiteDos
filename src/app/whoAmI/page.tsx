/**
 * @author Adam Long
 * @copyright 2024 - All rights reserved.
 */

//Imports
import {BackgroundNonHome} from "@/components/backgroundNonHome";
import {NavbarNonHome} from "@/components/navbarNonHome";
import Image from 'next/image';
import {BicepsFlexed, CodeXml, GraduationCap, Briefcase, NotebookPen, Computer} from 'lucide-react';
import Link from "next/link";
import {textElements} from "@/app/whoAmI/textElements";

function WhoAmI() {
    return (
        <div className="relative min-h-screen min-w-screen overflow-hidden">
            {/*Background component*/}
            <BackgroundNonHome/>
            {/*Foreground components*/}
            <div className="relative z-30 flex flex-col items-center justify-center h-full">
                {/*Navbar component*/}
                <NavbarNonHome/>
                {/*Page Content*/}
                <div className="flex flex-col items-center min-h-screen text-white">

                    {/* Profile Picture */}
                    <div className="relative flex flex-col mt-40">
                        <div className="relative lg:w-[300px] lg:h-[300px] rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
                            <Image
                                src="/pictures/templateImage.jpg"
                                alt="Adam Long Headshot"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <h1 className="mt-4 text-2xl md:text-3xl font-bold text-center">
                            Adam Long
                        </h1>
                    </div>

                    {/* Summary Section */}
                    <div className="md:max-w-5xl lg:max-w-7xl mx-auto my-20 flex text-center items-center">
                        <Link className='p-4 flex flex-col items-center' href='https://txst.edu'>
                            <GraduationCap size={128}/>
                            <h2 className="text-xl md:text-2xl font-semibold text-blue-400 pt-3">
                                Texas State University Student
                            </h2>
                            <p className="mt-4 text-gray-300 leading-relaxed">
                                {textElements[0].title}
                            </p>
                        </Link>
                        <div className="grid grid-cols-2 gap-4">
                            <div className='p-4 flex flex-col items-center'>
                                <Computer size={128}/>
                                <h2 className="text-xl md:text-2xl font-semibold text-blue-400 pt-3">
                                    About Me
                                </h2>
                                <p className="mt-4 text-gray-300 leading-relaxed">
                                    Briefly introduce yourself here. Share a little about your background,
                                    passions, and what drives you. Keep it concise and engaging!
                                </p>
                            </div>
                            <div className='p-4 flex flex-col items-center'>
                               <BicepsFlexed size={128}/>
                                <h2 className="text-xl md:text-2xl font-semibold text-blue-400 pt-3">
                                    About Me
                                </h2>
                                <p className="mt-4 text-gray-300 leading-relaxed">
                                    Briefly introduce yourself here. Share a little about your background,
                                    passions, and what drives you. Keep it concise and engaging!
                                </p>
                            </div>
                            <div className='p-4 flex flex-col items-center'>
                                <Briefcase size={128}/>
                                <h2 className="text-xl md:text-2xl font-semibold text-blue-400 pt-3">
                                    About Me
                                </h2>
                                <p className="mt-4 text-gray-300 leading-relaxed">
                                    Briefly introduce yourself here. Share a little about your background,
                                    passions, and what drives you. Keep it concise and engaging!
                                </p>
                            </div>
                            <div className='p-4 flex flex-col items-center'>
                                <NotebookPen size={128}/>
                                <h2 className="text-xl md:text-2xl font-semibold text-blue-400 pt-3">
                                    About Me
                                </h2>
                                <p className="mt-4 text-gray-300 leading-relaxed">
                                    Briefly introduce yourself here. Share a little about your background,
                                    passions, and what drives you. Keep it concise and engaging!
                                </p>
                            </div>
                        </div>
                        <div className='p-4 flex flex-col items-center'>
                            <CodeXml size={128}/>

                            <h2 className="text-xl md:text-2xl font-semibold text-blue-400">
                                About Me
                            </h2>
                            <p className="mt-4 text-gray-300 leading-relaxed">
                                Briefly introduce yourself here. Share a little about your background,
                                passions, and what drives you. Keep it concise and engaging!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhoAmI;