/**
 * @author Adam Long
 * @copyright 2024 - All rights reserved.
 */

//Imports
import { blogElements } from '../blogElements';
import {BackgroundNonHome} from "@/components/backgroundNonHome";
import Image from 'next/image'
import {CircleChevronLeft} from "lucide-react";
import Link from "next/link";
import ScrollToTop from "@/components/ui/scrollToTop";

export default function BlogPost({ params }: { params: { id: string } })
{
    const { id } = params;

    if (!id)
    {
        return (
            <div>Invalid or missing blog ID</div>
        );

    }

    // Find the blog post based on the ID
    const blog = blogElements.find((post) => post.id === parseInt(id));

    if (!blog)
    {
        return <div>Blog not found</div>;
    }
    else
    {
        const blogContent = blog.content.split('\n');
        //Styled component
        return (
            <div className="relative min-h-screen min-w-screen overflow-hidden">
                {/* Background component */}
                <BackgroundNonHome />

                {/* Foreground components */}
                <div className="relative z-30 flex flex-col items-center h-full">
                    {/* Page Content */}
                    <div className="w-10/12 max-w-5xl mx-auto pt-20">
                        {/* Blog Header */}
                        <div className="text-center">
                            <p className="text-gray-400 text-sm">{blog.date}</p>
                            <div className="flex text-white items-center justify-center w-full">
                                <div className='flex-none'>
                                    <Link href='../../blogs'>
                                        <CircleChevronLeft
                                            className='w-10 h-10 mt-3'
                                        />
                                    </Link>
                                </div>
                                <h1 className="text-4xl font-bold mt-4 flex-grow">
                                    {blog.title}
                                </h1>
                                <div className="flex-none w-10"></div>
                            </div>
                            <div className="bg-gray-800 h-1 w-64 mx-auto my-4"></div>
                        </div>

                        {/* Blog Cover Image */}
                        <div className="w-full mt-8 flex justify-center">
                            <Image
                                src={blog.imgRef}
                                alt={`${blog.title} cover image`}
                                className="w-full rounded-lg shadow-lg"
                                width={1920}
                                height={1080}
                            />
                        </div>
                        {/* Blog Content */}
                        <div className="mt-12 text-gray-300 leading-relaxed text-lg">
                            {blogContent.map((section) => (
                                <div key={Math.random()}> {/*Ahh yes, peak programming*/}
                                    <div>
                                        &emsp;{section}
                                        <br/>
                                        <br/>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='h-10'/>
                    <div>
                        <ScrollToTop/>
                    </div>
                </div>
            </div>

        );
    }
}