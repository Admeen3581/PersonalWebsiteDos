/**
 * @author Adam Long
 * @copyright 2024 - All rights reserved.
 */

//Imports
import {BackgroundNonHome} from "@/components/backgroundNonHome";
import {NavbarNonHome} from "@/components/navbarNonHome";
import GradualSpacing from "@/components/ui/gradualSpacing";
import { blogElements } from "@/app/(showcase)/blogs/blogElements";
import Link from "next/link";
import Image from "next/image";
import ScrollToTop from "@/components/ui/scrollToTop";

function Blogs() {
    return (
        <div className="relative min-h-screen min-w-screen overflow-hidden">
            {/*Background component*/}
            <BackgroundNonHome/>
            {/*Foreground components*/}
            <div className="relative z-30 flex flex-col items-center justify-center h-full">
                {/*Navbar component*/}
                <NavbarNonHome/>
                {/*Page Content*/}
                <div className='grid grid-cols-3 pt-20'>
                    {/*Heading*/}
                    <div className='flex flex-col items-start'>
                        <GradualSpacing
                            text="BLOG"
                            className="font-display text-sm text-white font-avalors shadow-inner"
                            duration={2.0}
                        />
                        <br/>
                        <div className='bg-gray-900 h-1 w-full'></div>
                        <br/>
                        <GradualSpacing
                            text="What's going on?"
                            className="font-display text-3xl text-white font-avalors shadow-inner"
                            duration={2.0}
                        />
                    </div>
                </div>
                {/*Blog Content*/}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 w-10/12 mt-28">
                    {blogElements.map((post) => (
                        <Link
                            key={post.id} href={`/blogs/${post.id}`}
                            className='bg-blueblack rounded-lg overflow-hidden shadow-lg hover:scale-110 hover:rotate-6 duration-300'
                        >
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
                        </Link>
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

export default Blogs;