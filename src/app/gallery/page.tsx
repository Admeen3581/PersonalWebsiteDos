/**
 * @author Adam Long
 * @copyright 2024 - All rights reserved.
 */

//Imports
import Image from 'next/image';
import {BackgroundNonHome} from "@/components/backgroundNonHome";
import {NavbarNonHome} from "@/components/navbarNonHome";
import GradualSpacing from "@/components/ui/gradualSpacing";

function Gallery() {
    return (
        <div className="relative min-h-screen min-w-screen overflow-hidden">
            {/*Background component*/}
            <BackgroundNonHome/>
            {/*Foreground components*/}
            <div className="relative z-30 flex flex-col items-center justify-center h-full">
                {/*Navbar component*/}
                <NavbarNonHome/>
                <div className='grid grid-cols-3 pt-20'>
                    {/*Heading*/}
                    <div className='flex flex-col items-start'>
                        <GradualSpacing
                            text="GALLERY"
                            className="font-display text-sm text-white font-avalors shadow-inner"
                            duration={2.0}
                        />
                        <br/>
                        <div className='bg-gray-900 h-1 w-full'></div>
                        <br/>
                        <GradualSpacing
                            text="The photo album"
                            className="font-display text-3xl text-white font-avalors shadow-inner"
                            duration={2.0}
                        />
                    </div>
                </div>
                Blog Content
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 w-10/12 mt-28">
                    {galleryElements.map((post) => (
                        <div key={pic.key}>
                            <Image
                                src={post.imgRef}
                                alt={post.title + " cover image"}
                                className="w-full h-48 object-cover rounded-t-lg"
                                width={4000}
                                height={4000}
                            />
                            <div className="p-4">
                                <p className="text-gray-400 text-sm">
                                    {post.date}
                                </p>
                                <h3 className="text-xl font-semibold text-white mt-2">
                                    {post.title}
                                </h3>
                                <p className="text-gray-300 mt-2">
                                    {post.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                    <div className="h-10"></div>
                </div>
            </div>
        </div>
    );
}

export default Gallery;