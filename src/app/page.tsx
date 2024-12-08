/**
 * @author Adam Long
 * @default - Landing page
 * @copyright 2024 - All rights reserved Adam Long.
 */

'use client'

//Imports
import Image from "next/image";
import Particles from "@/components/ui/particles";
import GradualSpacing from "@/components/ui/gradualSpacing";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hoverCard"
import {Link, Terminal} from "lucide-react";
import {useEffect, useState} from "react";
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";
import {NavbarDefault} from "@/components/navbarDefault";


//Function
function Home() {

    useEffect(() => {
        const isFirstVisit = localStorage.getItem('isFirstVisit');

        if (!isFirstVisit) {
            setShowAlert(true);
            //Sets flag
            localStorage.setItem('isFirstVisit', 'true');
        }
    }, []);

    const [showAlert, setShowAlert] = useState(false);

    const handleAlertClose = () => {
        setShowAlert(false);
    }

    return (
        <div className="relative min-h-screen min-w-screen overflow-hidden">
            {/* Background Layer */}
            <div className="absolute inset-0">
                <Image
                    src="/pictures/conny-schneider-abstract.jpg"
                    alt="background image"
                    className=""
                    fill
                />
                <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
                <Particles
                    quantity={800}
                    color="#FFFFFF"
                    staticity={95}
                    size={0.8}
                    vx={0.1}
                    vy={-0.1}
                    className="absolute inset-0 opacity-80 z-20"
                />
            </div>

            {/* Foreground Layer */}
            <div className="relative z-30 flex flex-col items-center justify-center h-full">
                {/*Nav Bar Layer*/}
                <div className="relative z-40 animate-slideName delay-[1.7s] inline-flex items-center">
                    <NavbarDefault/>
                </div>

                {/*Title Text*/}
                <GradualSpacing
                    text="adam long"
                    className="text-7xl text-white md:pt-64 font-avalors shadow-inner"
                    duration={2.0}
                    delayMultiple={0.09}
                />
                <GradualSpacing
                    text="Leader - Visionary - Speaker"
                    className="font-display text-lg text-white pt-8 font-avalors shadow-inner"
                    duration={2.0}
                    delayMultiple={0.03}
                />

                {/* Badge Icon */}
                <div className='fixed bottom-5 right-5 text-white text-sm font-bold font-aptos'>
                    <HoverCard>
                        <HoverCardTrigger className='bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded-full shadow-lg hover:bg-blue-900'>Photo Credit</HoverCardTrigger>
                        <HoverCardContent className='w-180 h-12 mr-2 pb-9'>
                            <div className="flex justify-between space-x-4">
                                <div className="space-y-1">
                                    <p className="text-sm">
                                        Photo by -&ensp;
                                        <a href='https://unsplash.com/@choys_' className='italic'>
                                            @Conny Schneider
                                        </a>
                                        &ensp;on&ensp;
                                        <a href="https://unsplash.com/photos/a-blue-background-with-lines-and-dots-xuTJZ7uD7PI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" className='inline-flex'>
                                            Unsplash<Link className="w-3 h-3" />
                                        </a>
                                    </p>
                                    <div className="flex items-center pt-2">

                                    </div>
                                </div>
                            </div>
                        </HoverCardContent>
                    </HoverCard>
                </div>

                {showAlert && (
                    <div className='fixed left-1/2 -translate-x-2/4 bottom-2/4 translate-y-2/4 text-white bg-black w-5/12 h-1/4'>
                        <Alert className='relative h-full'>
                            <Terminal className="h-8 w-8" />
                            <AlertTitle className='font-bold text-2xl ml-4 font-cascadia'>A quick mention - Mr.Margrave</AlertTitle>
                            <AlertDescription className='mt-4 font-cascadia'>
                                Here it is, I custom built this website after a year to build my brand as a developer (and it was a cool project). Just click around, if it looks short, it can be clicked. Thank you for being my professor. Hopefully the link wasn't too big of an issue to navigate. Cheers!
                            </AlertDescription>
                            <div className='fixed right-5 bottom-5'>
                                <button
                                    onClick={handleAlertClose}
                                    className='relative flex flex-col py-2 text-center text-white bg-gray-700 rounded hover:bg-blue-700 p-8'
                                >
                                    Close
                                </button>
                            </div>
                        </Alert>
                    </div>
                )}
            </div>
        </div>
  );
}

export default Home;