/**
 * @author Adam Long
 * @copyright 2024 - All rights reserved.
 * @todo In interface, see if imgAlt can be set a a default value.
 */

//Imports
import Image from 'next/image';
import {InterestProps} from "@/app/(aboutme)/interests/interestElements";

const InterestCard = ({props} : { props : InterestProps }) => {

    switch(props.variant)
    {
        //Center-Slanted
        case 1:
            return (
                <div className="relative flex flex-col items-center text-center">
                    <Image
                        src={props.imgRef}
                        alt={props.imgAlt}
                        className="w-5/12 h-auto rounded-lg shadow-lg transform -skew-x-6 hover:skew-x-0 transition duration-500"
                        width={2000}
                        height={2000}
                    />
                    <h1 className='text-gray-300 text-2xl font-semibold leading-relaxed pt-4'>
                        {props.title}
                    </h1>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        {props.desc}
                    </p>
                </div>
            );
        //Center-Grid
        case 2:
            return (
                <div className="relative grid grid-cols-3 items-center">
                    <Image
                        src={props.imgRef}
                        alt={props.imgAlt}
                        className="col-span-1 w-full h-auto rounded-md shadow-md transform -rotate-6 hover:rotate-0 transition duration-500 aspect-4/3"
                        width={2000}
                        height={2000}
                    />
                    <Image
                        src={props.imgRef2}
                        alt={props.imgAlt}
                        className="col-span-1 w-full h-auto rounded-md shadow-md transform rotate-6 hover:rotate-0 transition duration-500 aspect-4/3"
                        width={2000}
                        height={2000}
                    />
                    <Image
                        src={props.imgRef3}
                        alt={props.imgAlt}
                        className="col-span-1 w-full h-auto rounded-md shadow-md transform -rotate-6 hover:rotate-0 transition duration-500 aspect-4/3"
                        width={2000}
                        height={2000}
                    />
                    <h1 className='col-span-3 text-center text-gray-300 text-2xl font-semibold leading-relaxed mt-8'>
                        {props.title}
                    </h1>
                    <p className="col-span-3 text-center text-gray-300 text-lg leading-relaxed">
                        {props.desc}
                    </p>
                </div>
            );
        //Left-Square
        case 3:
            return (
                <div className="relative flex items-center justify-between">
                    <div className='relative text-center w-5/12 transform rotate-6 hover:rotate-0 transition duration-500'>
                        <Image
                            src={props.imgRef}
                            alt={props.imgAlt}
                            className="h-auto rounded-lg shadow-lg"
                            width={2000}
                            height={2000}
                        />
                        <h1 className='text-gray-300 text-2xl font-semibold leading-relaxed pt-3'>
                            {props.title}
                        </h1>
                    </div>
                    <p className="max-w-lg text-gray-300 text-lg leading-relaxed transform -translate-x-10">
                        {props.desc}
                    </p>
                </div>
            );
        //Right-Square
        case 4:
            return (
                <div className="relative flex items-center justify-between flex-row-reverse">
                    <div className="w-5/12 text-center transform rotate-6 hover:rotate-0 transition duration-500">
                        <Image
                            src={props.imgRef}
                            alt={props.imgAlt}
                            className="h-auto rounded-lg shadow-md"
                            width={2000}
                            height={2000}
                        />
                        <h1 className='text-gray-300 text-2xl font-semibold leading-relaxed pt-3'>
                            {props.title}
                        </h1>
                    </div>
                    <p className="max-w-lg text-gray-300 text-lg leading-relaxed mt-6 md:mt-0 md:ml-8">
                        {props.desc}
                    </p>
                </div>
            );
        //Left Oval
        case 5:
            return(
                <div className="relative flex items-center justify-between">
                    <div className='w-5/12 text-center transform -rotate-12 hover:rotate-0 transition duration-500'>
                        <Image
                            src={props.imgRef}
                            alt={props.imgAlt}
                            className="h-auto rounded-full shadow-md"
                            width={2000}
                            height={2000}
                        />
                        <h1 className='text-gray-300 text-2xl font-semibold leading-relaxed pt-3'>
                            {props.title}
                        </h1>
                    </div>
                    <p className="max-w-lg text-gray-300 text-lg leading-relaxed transform translate-x-10">
                        {props.desc}
                    </p>
                </div>
            );
        //Right-Oval
        case 6:
            return (
                <div className="relative flex items-center justify-between flex-row-reverse">
                    <div className="w-5/12 text-center transform -rotate-12 hover:rotate-0 transition duration-500">
                        <Image
                            src={props.imgRef}
                            alt={props.imgAlt}
                            className="h-auto rounded-full shadow-md"
                            width={2000}
                            height={2000}
                        />
                        <h1 className='text-gray-300 text-2xl font-semibold leading-relaxed pt-3'>
                            {props.title}
                        </h1>
                    </div>
                    <p className="max-w-lg text-gray-300 text-lg leading-relaxed mt-6 md:mt-0 md:ml-8">
                        {props.desc}
                    </p>
                </div>
            );
    }
}

export default InterestCard;