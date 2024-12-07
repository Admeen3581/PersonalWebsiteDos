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
import {textElements} from "@/app/(aboutme)/whoAmI/textElements";

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
                        <div className="relative lg:w-[320px] lg:h-[320px] rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
                            <Image
                                src="https://i.imgur.com/ge2pRs3.jpg"
                                alt="Adam Long Headshot"
                                width={500}
                                height={500}
                                className="object-cover"
                            />
                        </div>
                        <h1 className="mt-4 text-2xl md:text-3xl font-bold text-center font-avalors">
                            adam Long
                        </h1>
                    </div>

                    {/* Summary Section */}
                    <div className="grid grid-cols-4 gap-8 md:max-w-screen-lg lg:max-w-screen-xl xl:max-w-screen-2xl mx-auto my-20 flex text-center items-center font-aptos">
                        <Link className='p-6 flex flex-col items-center' href={textElements[0].href}>
                            <GraduationCap size={128}/>
                            <h2 className="text-xl md:text-2xl font-semibold text-blue-400 pt-3">
                                {textElements[0].title}
                            </h2>
                            <p className="mt-4 text-gray-300 leading-relaxed">
                                {textElements[0].desc}
                            </p>
                        </Link>
                        <div className="grid grid-cols-1 gap-16 p-6">
                            <div className='flex flex-col items-center'>
                                <Computer size={128}/>
                                <h2 className="text-xl md:text-2xl font-semibold text-blue-400 pt-3">
                                    {textElements[1].title}
                                </h2>
                                <p className="mt-4 text-gray-300 leading-relaxed">
                                    {textElements[1].desc}

                                </p>
                            </div>
                            <div className='flex flex-col items-center'>
                               <BicepsFlexed size={128}/>
                                <h2 className="text-xl md:text-2xl font-semibold text-blue-400 pt-3">
                                    {textElements[2].title}
                                </h2>
                                <p className="mt-4 text-gray-300 leading-relaxed">
                                    {textElements[2].desc}

                                </p>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 gap-16 p-6'>
                            <div className='flex flex-col items-center'>
                                <Briefcase size={128}/>
                                <h2 className="text-xl md:text-2xl font-semibold text-blue-400 pt-3">
                                    {textElements[3].title}
                                </h2>
                                <p className="mt-4 text-gray-300 leading-relaxed">
                                    {textElements[3].desc}

                                </p>
                            </div>
                            <div className='flex flex-col items-center md:mt-4'>
                                <NotebookPen size={128}/>
                                <h2 className="text-xl md:text-2xl font-semibold text-blue-400 pt-3">
                                    {textElements[4].title}

                                </h2>
                                <p className="mt-4 text-gray-300 leading-relaxed">
                                    {textElements[4].desc}

                                </p>
                            </div>
                        </div>
                        <div className='p-6 flex flex-col items-center'>
                            <CodeXml size={128}/>

                            <h2 className="text-xl md:text-2xl font-semibold text-blue-400">
                                {textElements[5].title}
                            </h2>
                            <p className="mt-4 text-gray-300 leading-relaxed">
                                {textElements[5].desc}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhoAmI;