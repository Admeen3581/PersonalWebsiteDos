/**
 * @author Adam Long
 * @copyright 2024 - All rights reserved.
 */
import {BackgroundNonHome} from "@/components/backgroundNonHome";
import {NavbarNonHome} from "@/components/navbarNonHome";
import GradualSpacing from "@/components/ui/gradualSpacing";
import {contactElements} from "@/app/(contact)/contactElements";
import Image from "next/image";
import Link from "next/link";

function ContactProfessional() {
    return (
        <div className="relative min-h-screen min-w-screen overflow-hidden">
            {/*Background component*/}
            <BackgroundNonHome/>
            {/*Foreground components*/}
            <div className="relative z-30 flex flex-col items-center justify-center h-full">
                {/*Navbar component*/}
                <NavbarNonHome/>
                {/*Heading*/}
                <div className='grid grid-cols-4 pt-20 ml-16'>
                    <div className='flex flex-col items-start'>
                        <GradualSpacing
                            text="CONTACT"
                            className="font-display text-sm text-white font-avalors shadow-inner"
                            duration={2.0}
                        />
                        <br/>
                        <div className='bg-gray-900 h-1 w-full'/>
                        <br/>
                        <GradualSpacing
                            text="Let's connect"
                            className="font-display text-3xl text-white font-avalors shadow-inner"
                            duration={2.0}
                        />
                    </div>
                </div>
                {/*Page Content*/}
                <div className='relative grid grid-cols-6 items-center justify-center flex flex-col text-black text-center font-aptos font-semibold pt-24'>
                    {contactElements.map((element) => (
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