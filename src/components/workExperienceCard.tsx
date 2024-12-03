/**
 * @author Adam Long
 * @copyright 2024 - All rights reserved.
 */

//Imports
import Image from 'next/image';
import {workExperience} from "@/app/experience/workExperienceElements";

export default function WorkExperienceCard() {
    return (
        <div className="relative min-h-screen min-w-screen overflow-hidden flex flex-col items-center">
            {/* Foreground components */}
            <div className="relative z-30 flex flex-col items-center justify-center w-11/12 h-full">

                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-12 mt-16 px-8">
                    {workExperience.map((work, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
                        >
                            <Image
                                src={work.imgRef}
                                alt={`${work.company} logo`}
                                width={800}
                                height={400}
                                className="w-full h-40 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-xl font-bold text-white">{work.company}</h2>
                                <h3 className="text-gray-400">{work.role}</h3>
                                <p className="text-sm text-gray-500 mt-1">{work.duration}</p>
                                <p className="text-gray-300 mt-2">{work.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}