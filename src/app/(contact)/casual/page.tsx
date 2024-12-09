/**
 * @author Adam Long
 * @copyright 2024 - All rights reserved.
 */

//Imports
import {BackgroundNonHome} from "@/components/backgroundNonHome";
import {NavbarDefault} from "@/components/navbarDefault";
import {casualElements} from "@/app/(contact)/contactElements";
import Image from "next/image";
import Link from "next/link";
import PageSubheading from "@/components/pageSubheading";

function ContactProfessional() {
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
                    pageTitle={"contact"}
                    funnyTitle={'gamers unite'}
                />
                {/*Page Content*/}
                <div className='relative grid grid-cols-6 items-center justify-center flex flex-col text-black text-center font-aptos font-semibold pt-24'>
                    {casualElements.map((element) => (
                        <Link
                            key={element.title}
                            href={element.href}
                            className='bg-blue-100 p-10 m-4 w-52 h-72 rounded-3xl hover:scale-110 duration-300'
                        >
                            <Image
                                src={element.icon}
                                alt={`Logo of ${element.title}`}
                                width={512}
                                height={512}
                            />
                            <h1 className='pt-6'>{element.title}</h1>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ContactProfessional;