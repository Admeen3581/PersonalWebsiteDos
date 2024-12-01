import Particles from "@/components/ui/particles";

/**
 * @author Adam Long
 * @copyright 2024 - All rights reserved.
 */

export const BackgroundNonHome = () => {
    return (
        <div className="absolute inset-0 bg-black">
            <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
            <Particles
                quantity={800}
                color="#FFFFFF"
                staticity={95}
                size={0.8}
                vx={0.1}
                vy={-0.1}
                className="absolute inset-0 opacity-70 z-20"
            />
        </div>
    );
}