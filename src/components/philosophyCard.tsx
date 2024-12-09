/**
 * @author Adam Long
 * @copyright 2024 - All rights reserved.
 */

//Imports
import {PhilosophyProps} from "@/lib/props";


const PhilosophyCard = ({prop} : {prop : PhilosophyProps}) => {
    return (
        <div className='relative grid grid-cols-3 gap-8 flex flex-col items-center justify-center text-center'>
            <div className="flex p-8 items-center">
                <prop.icon
                    color={'white'}
                    className='min-w-24 min-h-24'
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