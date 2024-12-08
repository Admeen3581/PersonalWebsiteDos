/**
 * @author Adam Long
 * @copyright 2024 - All rights reserved.
 */

//Imports
import Particles from "@/components/ui/particles";


export const BackgroundNonHome = ({particleNum = 800} : {particleNum? : number}) => {
    return (
        <div className="absolute inset-0 bg-black">

            <div className="absolute -right-60 -top-44 h-60 w-[44rem] transform-gpu md:right-0 bg-gradient-to-r opacity-30 from-[#e2beff] from-[28%] via-[#87a4ee] via-[70%] to-[#b060ff] rotate-[-10deg] rounded-full blur-3xl"></div>

            <div className="absolute -left-60 -top-36 h-60 w-[44rem] transform-gpu md:right-0 bg-gradient-to-r opacity-30 from-[#e2beff] from-[28%] via-[#87a4ee] via-[70%] to-[#b060ff] rotate-[10deg] rounded-full blur-3xl"></div>

            <Particles
                quantity={particleNum}
                color="#FFFFFF"
                staticity={95}
                size={0.8}
                vx={0.1}
                vy={-0.1}
                className="absolute inset-0 opacity-90 z-20"
            />

        </div>
    );
}