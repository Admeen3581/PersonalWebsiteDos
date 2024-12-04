/**
 * @author Adam Long
 * @copyright 2024 - All rights reserved.
 */
import {LucideIcon} from "lucide-react";

//Imports

export interface philosophyProps {
    icon : LucideIcon,
    title : string,
    desc : string,
}

const PhilosophyCard = ({prop} : {prop : philosophyProps}) => {
    return (
        <div className='relative grid grid-cols-3 flex flex-col items-center justify-center text-center'>
            <div className="flex p-8 items-center">
                <prop.icon
                    size={128}
                    color={'white'}
                />
                <h1 className='text-gray-300 text-2xl leading-relaxed font-aptos shadow-inner pl-10'>
                    {prop.title}
                </h1>
            </div>
            <div className='col-span-2'>
                <p className='text-gray-300 text-lg leading-relaxed font-aptos shadow-inner'>
                    {prop.desc}
                </p>
            </div>
        </div>
    );
}

export default PhilosophyCard;