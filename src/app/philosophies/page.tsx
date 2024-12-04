/**
 * @author Adam Long
 * @copyright 2024 - All rights reserved.
 */
import {BackgroundNonHome} from "@/components/backgroundNonHome";
import {NavbarNonHome} from "@/components/navbarNonHome";
import GradualSpacing from "@/components/ui/gradualSpacing";

function Philosophies() {
    return (
        <div className="relative min-h-screen min-w-screen overflow-hidden">
            {/*Background component*/}
            <BackgroundNonHome/>
            {/*Foreground components*/}
            <div className="relative z-30 flex flex-col items-center justify-center h-full">
                {/*Navbar component*/}
                <NavbarNonHome/>
                {/*Heading*/}
                <div className='grid grid-cols-3 pt-20'>
                    <div className='flex flex-col items-start'>
                        <GradualSpacing
                            text="PHILOSOPHIES"
                            className="font-display text-sm text-white font-avalors shadow-inner"
                            duration={2.0}
                        />
                        <br/>
                        <div className='bg-gray-900 h-1 w-full'></div>
                        <br/>
                        <GradualSpacing
                            text="How I live my life"
                            className="font-display text-3xl text-white font-avalors shadow-inner"
                            duration={2.0}
                        />
                    </div>
                </div>
                {/*Page Content*/}
                <div className="w-10/12 mt-24">
                    <h1 className='text-2xl text-white shadow-inner text-center font-aptos'>
                        My life philosophies are guided by lessons I have learned. They are written on my mirror, so
                        that I can be a reflection of who I want to be.
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default Philosophies;