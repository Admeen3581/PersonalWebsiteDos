import LeftHomePageNavbar from "@/components/leftHomePageNavbar";
import {NeonGradientCard} from "@/components/ui/neonGradientCard";
import RightHomePageNavbar from "@/components/rightHomePageNavbar";

/**
 * @author Adam Long
 * @copyright 2024 - All rights reserved.
 */

//Imports
import Image from 'next/image'
import Link from "next/link";


export const NavbarNonHome = () => {
    return (
        <div className="relative z-40 pt-20 inline-flex items-center">

            <LeftHomePageNavbar/>

            <Link href='/'>
                <NeonGradientCard
                    className="max-w-sm flex items-center justify-center text-center rounded-full pointer-events-none"
                    borderRadius={100}
                    borderSize={13.5}
                    neonColors={{
                        firstColor: "#073873",
                        secondColor: "#FFFFFF"
                    }}
                >
                    <Image
                        src="/pictures/al18.jpg"
                        className='rounded-full'
                        width={128}
                        height={128}
                        alt="Picture of the author"
                    />
                </NeonGradientCard>
            </Link>

            <RightHomePageNavbar/>
        </div>
    );
}