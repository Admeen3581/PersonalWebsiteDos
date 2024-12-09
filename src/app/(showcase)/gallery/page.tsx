/**
 * @author Adam Long
 * @copyright 2024 - All rights reserved.
 */

//Imports
import Image from 'next/image';
import {BackgroundNonHome} from "@/components/backgroundNonHome";
import {NavbarDefault} from "@/components/navbarDefault";
import {galleryElements} from "@/app/(showcase)/gallery/galleryElements";
import ScrollToTop from "@/components/ui/scrollToTop";
import PageSubheading from "@/components/pageSubheading";

function Gallery() {
    return (
        <div className="relative min-h-screen min-w-screen overflow-hidden">
            {/*Background component*/}
            <BackgroundNonHome particleNum={1300}/>
            {/*Foreground components*/}
            <div className="relative z-30 flex flex-col items-center justify-center h-full">
                {/*Navbar component*/}
                <NavbarDefault/>
                {/*Heading*/}
                <PageSubheading
                    pageTitle={"gallery"}
                    funnyTitle={'the photo album'}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 w-10/12 mt-28 pointer-events-none grid-auto-rows">
                    {galleryElements.map((pic) => (
                        <div key={pic.title} className='font-aptos my-8'>
                            <Image
                                src={pic.imgRef}
                                alt={pic.title + " cover image"}
                                className="w-full h-full object-cover rounded-lg aspect-video"
                                width={500}
                                height={500}
                            />
                            <div className="p-4">
                                <h3 className="text-2xl font-semibold text-white mt-2">
                                    {pic.title}
                                </h3>
                                <p className="text-gray-300 mt-2">
                                    {pic.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                    <div className="h-10"></div>
                </div>
                <div>
                    <ScrollToTop/>
                </div>
            </div>
        </div>
    );
}

export default Gallery;